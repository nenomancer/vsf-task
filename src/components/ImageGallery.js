import React from "react";
import "./ImageGallery.css";
import ImageModal from "./ImageModal";
const ImageGallery = (props) => {
  return (
    <div className="gallery-container">
      <ImageModal />
      {props.allImages.map((image) => {
        console.log(`IMAGE URL: ${image.download_url}`);
        return (
          <div className="image-container">
            <img
              className="image"
              src={image.download_url}
              key={image.id}
              alt="image"
            />
          </div>
        );
      })}
    </div>
  );
};

export default ImageGallery;
