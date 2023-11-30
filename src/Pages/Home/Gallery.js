import React, { useEffect, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Modal from 'react-modal';
import { useUser } from "../Account/UserContext";
import { apibaseUrl } from "../../Component/Apibaseurl";
import axios from "axios";

export default function MGallery({ image }) {
  const { user,token } = useUser();
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [likes, setLikes] = useState();
  const [view, setView] = useState(Array(image.length).fill(0));
  const [isOpen, setIsOpen] = useState(false);
  const [comments, setComments] = useState(Array.from({ length: image.length }, () => []));
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
      prevIndex === 0 ? image.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === image.length - 1 ? 0 : prevIndex + 1
    );
  };

  const generateSlidesFromCurrentImage = () => {
    if (selectedImageIndex !== null && image.length > 0) {
      const startIndex = selectedImageIndex;
      const slicedImages = [...image.slice(startIndex), ...image.slice(0, startIndex)];
      return slicedImages.map((item) => ({
        src: `https://sweetdevelopers.com/artist/storage/ArtworkImage/${item.image}`,
      }));
    }
    return [];
  };
  useEffect(() => {
    // Retrieve likes data from local storage when the component mounts
    const storedLikes = localStorage.getItem('likes');
    if (storedLikes) {
      setLikes(JSON.parse(storedLikes));
    }
    const storeviws = localStorage.getItem('views');
    if (storeviws) {
      setView(JSON.parse(storeviws));
    }
    const storedComments = localStorage.getItem('comments');
  if (storedComments) {
    setComments(JSON.parse(storedComments));
  }
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
  
      // Making a POST request to store the like using Axios
      axios.post(apiUrl, data,axiosConfig)
        .then(response => {
          // Handle success, if needed
          console.log('Like stored successfully!', response.data);
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

  const handleAddComment = () => {
    if (inputValue.trim() !== '' && selectedIndex !== null) {
      const updatedComments = [...comments];
      updatedComments[selectedIndex] = [
        ...updatedComments[selectedIndex],
        inputValue,
      ];
      setComments(updatedComments);
      setInputValue('');
      localStorage.setItem('comments', JSON.stringify(updatedComments));
    }
  };

  return (
    <>
      {image.map((item, index) => (
        <div className="col-lg-4" key={item.id}>
          <div className="imgbox">
            <i
              className="fa fa-eye view"
              aria-hidden="true"
              onClick={() => handleImageClick(index)}
            >
              <span className="space">{item.views}</span>
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
                    <span className="space"> {item?.likes.length}</span>
                  </i>
                </div>
                <div className="coll-6 text-right">
                  <i
                    className="fa fa-comment like"
                    aria-hidden="true"
                    onClick={() => openModal(index)}
                  >{''}
                    <span className="space">  {item.comments}</span>
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
        <div className="text-center">
          {comments[selectedIndex] && comments[selectedIndex].length > 0 ? (
            <div className="text-center">
              <ul className="text-left" style={{ padding: '0' }}>
                {comments[selectedIndex].map((comment, index) => (
                  <li className='commentchat' key={index}>


                   <span style={{lineHeight:'30px',  color:'black'}}>{comment}</span> <br />
                 <strong>{user?.name}</strong>   

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
        </div>
     <div>
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
