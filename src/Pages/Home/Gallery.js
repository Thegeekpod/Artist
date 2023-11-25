import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function MGallery({ image }) {
  const [open, setOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0); // Initializing with 0 as default index

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
    setOpen(true);
  };

  return (
    <>
       {image.map((item,index) => (
           <div className="col-lg-4 " key={item.id}>
           <div class="imgbox">
           <img className="imgbo" src={`https://sweetdevelopers.com/artist/storage/ArtworkImage/${item.image}`} alt={item.title}  />
 <div className='imgtitle'>
             <h4 class="page-title-1 " style={{color:'white'}}>
              {item.user?.username || item.title}
             </h4>
             <div className="row d-flex">
               
               <div className="coll-6 text-left">
               
               <i class="fa fa-thumbs-up like" aria-hidden="true"> 1</i>
                   
                

               </div>
               <div className="coll-6 text-right">
               <i class="fa fa-eye like" aria-hidden="true" onClick={() => handleImageClick(index)}> 1</i>
               </div>
             </div>
             </div>
           
           </div>
           </div>
          ))}
      <Lightbox
        selectedIndex={selectedImageIndex}
        open={open}
        close={() => setOpen(false)}
        slides={image.map((item) => ({
          src: `https://sweetdevelopers.com/artist/storage/ArtworkImage/${item.image}`,
        }))}
      />
    </>
  );
}
