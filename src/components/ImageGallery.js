import React, { Fragment, useState } from "react";
import "./ImageGallery.css";
import { Link } from "react-router-dom";

const ImageGallery = (props) => {
  // SET THE CLICKED IMAGE TO SHOW UP IN THE IMAGE MODAL
  const imageClickHandler = (e) => {
    console.log();
    props.setSelectedImage(e.target);
    localStorage.setItem("selectedImage", e.target.src);
    localStorage.setItem("selectedID", e.target.id);
    localStorage.setItem("selectedAuthor", e.target.attributes.author.value);
  };

  return (
    <Fragment>
      <div className="gallery-container">
        {props.allImages.map((image, index) => {
          return (
            <Link
              to={image.id}
              className="image-container"
              onClick={imageClickHandler}
              key={image.id}
            >
              <img
                className="image"
                src={image.download_url}
                alt={image.author}
                author={image.author}
                id={image.id}
              />
            </Link>
          );
        })}
      </div>
    </Fragment>
  );
};

export default ImageGallery;
