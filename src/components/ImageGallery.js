import React, { Fragment, useEffect, useState } from "react";
import "./ImageGallery.css";
import ImageModal from "./ImageModal";

const ImageGallery = (props) => {
  const [selectedImage, setSelectedImage] = useState();
  const [showImageModal, setShowImageModal] = useState(false);

  // SET THE CLICKED IMAGE TO SHOW UP IN THE IMAGE MODAL
  const imageClickHandler = (e) => {
    console.log(e.target.attributes["author"].value);
    console.log(e.target);
    // DISABLE SCROLLING ON BODY
    document.querySelector("body").style.overflowY = "hidden";
    setSelectedImage(e.target);
    setShowImageModal(true);
  };

  return (
    <Fragment>
      {showImageModal && (
        <ImageModal
          selectedImage={selectedImage}
          setShowImageModal={setShowImageModal}
        />
      )}
      <div className="gallery-container">
        {props.allImages.map((image, index) => {  
          console.log(`INDEX: ${index}`);
          return (
            <div
              className="image-container"
              onClick={imageClickHandler}
              key={image.id}
            >
              <img
                className="image"
                src={image.download_url}
                alt="image"
                author={image.author}
              />
            </div>
          );
        })}
      </div>
    </Fragment>
  );
};

export default ImageGallery;
