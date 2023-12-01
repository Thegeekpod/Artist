import React, { useEffect, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Modal from 'react-modal';
import { useUser } from "../Account/UserContext";
import { apiProxybaseUrl, apibaseUrl } from "../../Component/Apibaseurl";
import axios from "axios";

export default function MGallery({ image }) {
  const { user, token } = useUser();
  const [images, setImages] = useState(image)
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [likes, setLikes] = useState({});
  const [view, setView] = useState(Array(images.length).fill(0));
  const [isOpen, setIsOpen] = useState(false);
  const [comments, setComments] = useState({});
  const [inputValue, setInputValue] = useState('');
  const axiosConfig = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'multipart/form-data',
      'Accept': 'application/json',
    },
  };
  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
    viewHandler(index);
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
  };

  const goToPrevious = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const generateSlidesFromCurrentImage = () => {
    if (selectedImageIndex !== null && images.length > 0) {
      const startIndex = selectedImageIndex;
      const slicedImages = [...images.slice(startIndex), ...images.slice(0, startIndex)];
      return slicedImages.map((item) => ({
        src: `https://sweetdevelopers.com/artist/storage/ArtworkImage/${item.image}`,
      }));
    }
    return [];
  };
  useEffect(() => {
    // Retrieve likes data from local storage when the component mounts

    const storeviws = localStorage.getItem('views');
    if (storeviws) {
      setView(JSON.parse(storeviws));
    }
    //   const storedComments = localStorage.getItem('comments');
    // if (storedComments) {
    //   setComments(JSON.parse(storedComments));
    // }
  }, []);


  const likeHandler = (index) => {
    const user_id = user.id;

    // Your API endpoint to store a like
    const apiUrl = `${apibaseUrl}/like`;

    // Data to be sent in the request body
    const data = {
      artwork_id: index,
      user_id: user_id
    };

    axios.post(apiUrl, data, axiosConfig)
      .then(response => {
        // Handle success
        console.log(response.data.data);
        const updatedlikes = [...likes];
        updatedlikes[index] = response.data.data; // Assuming response.data.data contains the updated view count

        // Update the view state with the modified array
        setLikes(updatedlikes);

      })
      .catch(error => {
        // Handle error
        console.error('Error storing like:', error);
      });
  };



  const viewHandler = (index) => {
    const user_id = user.id;

    // Your API endpoint to store a like
    const apiUrl = `${apibaseUrl}/view`;

    // Data to be sent in the request body
    const data = {
      artwork_id: index,
      user_id: user_id
    };

    axios.post(apiUrl, data, axiosConfig)
      .then(response => {
        // Handle success
        // console.log(response.data.data);
        // Handle success
        const updatedViews = [...view];
        updatedViews[index] = response.data.data; // Assuming response.data.data contains the updated view count

        // Update the view state with the modified array
        setView(updatedViews);

      })
      .catch(error => {
        // Handle error
        console.error('Error storing like:', error);
      });

  };


  const openModal = (index) => {
    setIsOpen(true);
    setSelectedIndex(index);
    fetchCommentsForArtwork(index);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };


  const handleAddComment = async () => {
    const data = {
      artwork_id: selectedIndex,
      user_id: user.id,
      comment: inputValue,
    };

    try {
      const response = await axios.post(`${apibaseUrl}/comment`, data, axiosConfig);

      if (response.status === 200 && response.data.status) {
        // Assuming the comment was added successfully
        console.log('Newly added comment:', response.data.data);

        // Fetch updated comments for the specific artwork
        fetchCommentsForArtwork(data.artwork_id);

        setInputValue('');
      } else {
        console.error('Failed to upload comment');
      }
    } catch (error) {
      console.error('Error uploading comment:', error);
    }
  };

  // Function to fetch comments for a specific artwork
  const fetchCommentsForArtwork = async (artworkId) => {
    try {
      const response = await axios.get(`${apibaseUrl}/comment-list/${artworkId}`, axiosConfig);
      setComments(response.data.data || []);
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  };







  return (
    <>
      {images.map((item, index) => (
        <div className="col-lg-4" key={item.id}>
          <div className="imgbox">
            <i
              className="fa fa-eye view"
              aria-hidden="true"
              onClick={() => handleImageClick(item.id)}
            >
              <span className="space">{view[item.id] || item.views?.length}</span>
            </i>
            <img
              className="imgbo"
              src={`https://sweetdevelopers.com/artist/storage/ArtworkImage/${item.image}`}
              alt={item.title}
            />
            <div className="imgtitle">
              <h4 className="page-title-1" style={{ color: "white" }}>
                {item.user?.username || item.title}
              </h4>
              <div className="row d-flex">
                <div className="coll-6 text-left">
                  <i
                    className="fa fa-thumbs-up like"
                    aria-hidden="true"
                    onClick={() => likeHandler(item.id)}
                  >{''}
                    <span className="space">{likes[item.id] || item.likes?.length}</span>
                  </i>
                </div>
                <div className="coll-6 text-right">
                  <i
                    className="fa fa-comment like"
                    aria-hidden="true"
                    onClick={() => openModal(item.id)}
                  >{''}
                    <span className="space"> {(Array.isArray(comments) ? comments.filter(comment => comment.artwork_id === item.id)?.length : 0) || item.comments?.length}</span>
                  </i>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      {selectedImageIndex !== null && (
        <Lightbox
          open={true}
          close={closeLightbox}
          slides={generateSlidesFromCurrentImage()}
          showThumbnails={false}
          showPrevNext={true}
          onClose={closeLightbox}
          onClickPrev={goToPrevious}
          onClickNext={goToNext}
        />
      )}
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        className="Modal"
        overlayClassName="Overlay"
      >
        <div className="row">
          <div className="col-md-6">
            Comments
          </div>
          <div className="col-md-6 text-right">
            <i className="fa fa-close close" onClick={closeModal}></i>
          </div>
        </div>
        <div className="scrollable-div">
          {/* Display both existing and new comments */}
          {comments.length > 0 ? (
            <div className="text-center">
              <ul className="text-left" style={{ padding: '0' }}>
                {comments.map((comment, commentIndex) => (
                  <li className="comment" key={commentIndex}>

                    <span style={{ color: 'black' }}>{comment.comment}</span><br />
                    <strong>{comment.user.name}</strong>



                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div className="text-center">
              <p>No Comments</p>
            </div>
          )}

        </div>
        <div>
          {/* Input for adding comments */}
          <input
            className="akls"
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Enter your comment"
          />
          <button type="button" className="saikoihsaoP" onClick={handleAddComment}>
            Submit
          </button>
        </div>
      </Modal>
    </>
  );
}
