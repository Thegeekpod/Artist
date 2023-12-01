import React, { useEffect, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Modal from 'react-modal';
import { useUser } from "../Account/UserContext";
import { apiProxybaseUrl, apibaseUrl } from "../../Component/Apibaseurl";
import axios from "axios";

export default function MGallery({ image }) {
  const { user,token } = useUser();
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
        src: `https://sweetdevelopers.com/artist/storage/ArtworkImage/${item.images}`,
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

 
    const likeHandler = (artwork_id) => {
      const user_id = user.id;
  
      // Your API endpoint to store a like
      const apiUrl = `${apibaseUrl}/like`;
  
      // Data to be sent in the request body
      const data = {
        artwork_id: artwork_id,
        user_id: user_id
      };
      
      axios.post(apiUrl, data,axiosConfig)
        .then(response => {
          // Handle success
          console.log(response.data.data);
    if (response.data.data === "Liked successfully") {
              
          // Assume you have a state variable 'likes' and a function 'setLikes' to update it
          const updatedLikes = { ...likes };
    
          // Increment the likes by 1 for the specified artwork_id
          if (updatedLikes.hasOwnProperty(artwork_id)) {
              updatedLikes[artwork_id]++;
          } else {
              updatedLikes[artwork_id] = 1; // If the artwork_id doesn't exist, initialize it to 1
          }
          
          // Update the likes state with the modified object
          setLikes(updatedLikes);
    } else if (response.data.data === "Unliked successfully") {
               
          // Assume you have a state variable 'likes' and a function 'setLikes' to update it
    const updatedLikes = { ...likes };
    
    // Increment the likes by 1 for the specified artwork_id
    if (updatedLikes.hasOwnProperty(artwork_id)) {
        updatedLikes[artwork_id]--;
    } else {
        updatedLikes[artwork_id] = 0; // If the artwork_id doesn't exist, initialize it to 1
    }
    
    // Update the likes state with the modified object
    setLikes(updatedLikes);
    } else {
      // Handle other cases or errors
    }
          // Handle success, if needed
          console.log('Like stored successfully!', response.data.status.data);

        })
        .catch(error => {
          // Handle error
          console.error('Error storing like:', error);
        });
    };



  const viewHandler = (index) => {
    const newViews = [...view];
    const lastViewTime = localStorage.getItem(`lastViewTime_${index}`);
    const currentTime = Date.now();
    const oneHour = 60 * 60 * 1000; // milliseconds in an hour

    if (!lastViewTime || currentTime - parseInt(lastViewTime) >= oneHour) {
      // If there's no previous view or if one hour has passed since the last view
      newViews[index] += 1;
      setView(newViews);
      localStorage.setItem('views', JSON.stringify(newViews));

      localStorage.setItem(`lastViewTime_${index}`, currentTime);
    } else {
      // User has already viewed within the last hour
      console.log("You can only view once per hour.");
      // You might want to show a message to the user indicating they can't view again yet.
    }

  };


  const openModal = (index) => {
    setIsOpen(true);
    setSelectedIndex(index);
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
  
        // Log the comment data received from the response
        console.log('Newly added comment:', response.data.data);
  
        // Update comment count in state for the corresponding artwork
        const updatedImage = images.map((item, index) => {
          if (index === selectedIndex) {
            return {
              ...item,
              comments: [...(item.comments || []), { user_id: user.id, comment: inputValue }],
              comment_count: (item.comment_count || 0) + 1,
            };
          }
          return item;
        });
  
        setImages(updatedImage); // Update image state with new comment count
  
        // Update comments state
        setComments({
          ...comments,
          [selectedIndex]: [...(comments[selectedIndex] || []), { user_id: user.id, comment: inputValue }],
        });
  
        setInputValue('');
      } else {
        console.error('Failed to upload comment');
      }
    } catch (error) {
      console.error('Error uploading comment:', error);
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
              onClick={() => handleImageClick(index)}
            >
              <span className="space">{view[index] || item.views?.length}</span>
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
                    <span className="space">{likes[item.id] ?? item.likes?.length}</span>
                  </i>
                </div>
                <div className="coll-6 text-right">
                  <i
                    className="fa fa-comment like"
                    aria-hidden="true"
                    onClick={() => openModal(item.id)}
                  >{''}
                   <span className="space">{(item.comments ? item.comments.length : 0) + (comments[index] ? comments[index].length : 0)}</span>
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
          {comments[selectedIndex] && comments[selectedIndex].length > 0 ? (
            <div className="text-center">
              <ul className="text-left" style={{ padding: '0' }}>
                {/* Render existing comments */}
                {comments[selectedIndex].map((comment, commentIndex) => (
                  <li className="comment" key={commentIndex}>
                    <span>{comment.comment}</span>
                    <strong>{comment.user_id}</strong>
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
