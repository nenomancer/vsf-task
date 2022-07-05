import React, { Fragment, useState } from "react";
import "./ImageGallery.css";
import { Link } from "react-router-dom";

const ImageGallery = (props) => {
  // SET THE CLICKED IMAGE TO SHOW UP IN THE IMAGE MODAL
  const imageClickHandler = (e) => {
    // SET CLICKED IMAGE AS SELECTED IMAGE
    props.setSelectedImage(e.target);
    // SAVE IMAGE INFO TO LOCAL STORAGE
    localStorage.setItem("selectedImage", e.target.src);
    localStorage.setItem("selectedID", e.target.id);
    localStorage.setItem("selectedAuthor", e.target.attributes.author.value);
  };

  return (
    <Fragment>
      <div className="gallery-container">
        {/* RENDER ALL IMAGES  */}
        {props.allImages.map((image) => {
          return (
            <div className="image-container" onClick={imageClickHandler}>
              {/* ADD TO ALBUM BUTTON */}
              <div
                className="add-to-album"
                onClick={() => console.log("clicked")}
              >
                Add to album
              </div>
              {/* RENDER EACH IMAGE AS A LINK ELEMENT (REACT ROUTER) */}
              <Link to={image.id} className="image-container" key={image.id}>
                <img
                  className="image"
                  src={image.download_url}
                  alt={image.author}
                  author={image.author}
                  id={image.id}
                />
              </Link>
            </div>
          );
        })}
      </div>
    </Fragment>
  );
};

export default ImageGallery;
