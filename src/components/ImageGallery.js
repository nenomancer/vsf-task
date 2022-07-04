import React, { Fragment, useState } from "react";
import "./ImageGallery.css";
import ImageModal from "./ImageModal";
import { Link } from "react-router-dom";

const ImageGallery = (props) => {
  // SET THE CLICKED IMAGE TO SHOW UP IN THE IMAGE MODAL
  const imageClickHandler = (e) => {
    // console.log(e.target.attributes["author"].value);

    props.setSelectedImage(e.target);
    props.setImageURL(e.target.src);
    // props.setShowImageModal(true);
  };

  return (
    <Fragment>
      <div className="gallery-container">
        {props.allImages.map((image, index) => {
          return (
            <Link
              to={image.download_url}
              className="image-container"
              onClick={imageClickHandler}
              key={image.id}
            >
              <img
                className="image"
                src={image.download_url}
                alt={image.author}
                author={image.author}
              />
            </Link>
          );
        })}
      </div>
    </Fragment>
  );
};

export default ImageGallery;
