import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function MGallery({ image }) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
  };

  return (
    <>
      {image.map((item, index) => (
        <div className="col-lg-4" key={item.id}>
          <div className="imgbox">
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
                  <i className="fa fa-thumbs-up like" aria-hidden="true">
                    {" "}
                    1
                  </i>
                </div>
                <div className="coll-6 text-right">
                  <i
                    className="fa fa-eye like"
                    aria-hidden="true"
                    onClick={() => handleImageClick(index)}
                  >
                    {" "}
                    1
                  </i>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      {selectedImageIndex !== null && (
        <Lightbox
          selectedIndex={selectedImageIndex}
          open={true}
          close={closeLightbox}
          slides={[
            {
              src: `https://sweetdevelopers.com/artist/storage/ArtworkImage/${image[selectedImageIndex].image}`,
            },
          ]}
        />
      )}
    </>
  );
}
