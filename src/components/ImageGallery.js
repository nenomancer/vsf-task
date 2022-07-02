import React from "react";
import "./ImageGallery.css";
const ImageGallery = (props) => {
  return (
    <div className="gallery-container">
      {/* <img src={allImages[0].url} /> */}
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
