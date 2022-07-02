import React, { Fragment, useState } from "react";
import "./ImageGallery.css";
import ImageModal from "./ImageModal";
const ImageGallery = (props) => {
  const [selectedImage, setSelectedImage] = useState();
  const [showImageModal, setShowImageModal] = useState(false);
  const imageClickHandler = (e) => {
    console.log(e.target.src);
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
          return (
            <div
              className={`image-container ${index % 2 === 0 && "tall"}`}
              onClick={imageClickHandler}
              key={image.id}
            >
              <img className="image" src={image.download_url} alt="image" />
            </div>
          );
        })}
      </div>
    </Fragment>
  );
};

export default ImageGallery;
