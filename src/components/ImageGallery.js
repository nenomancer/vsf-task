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

  const firstCol = [];
  const secondCol = [];
  const thirdCol = [];
  const length = props.allImages.length;

  for (let i = 0; i < length; i++) {
    if (i < length / 3) {
      firstCol.push(props.allImages[i]);
    } else if (i < (length / 3) * 2) {
      secondCol.push(props.allImages[i]);
    } else {
      thirdCol.push(props.allImages[i]);
    }
  }
  return (
    <Fragment>
      <div className="gallery-container">
        {/* RENDER ALL IMAGES  */}
        <div className="column">
          {firstCol.map((image) => {
            return (
              <div
                className="image-container"
                onClick={imageClickHandler}
                key={image.id}
              >
                {/* ADD TO ALBUM BUTTON */}
                <div
                  className="add-to-album"
                  onClick={() => props.setShowSaveImage(true)}
                >
                  Add to album
                </div>
                {/* RENDER EACH IMAGE AS A LINK ELEMENT (REACT ROUTER) */}
                <Link to={image.id} className="image-container">
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
        <div className="column">
          {secondCol.map((image) => {
            return (
              <div
                className="image-container"
                onClick={imageClickHandler}
                key={image.id}
              >
                {/* ADD TO ALBUM BUTTON */}
                <div
                  className="add-to-album"
                  onClick={() => props.setShowSaveImage(true)}
                >
                  Add to album
                </div>
                {/* RENDER EACH IMAGE AS A LINK ELEMENT (REACT ROUTER) */}
                <Link to={image.id} className="image-container">
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
        <div className="column">
          {thirdCol.map((image) => {
            return (
              <div
                className="image-container"
                onClick={imageClickHandler}
                key={image.id}
              >
                {/* ADD TO ALBUM BUTTON */}
                <div
                  className="add-to-album"
                  onClick={() => props.setShowSaveImage(true)}
                >
                  Add to album
                </div>
                {/* RENDER EACH IMAGE AS A LINK ELEMENT (REACT ROUTER) */}
                <Link to={image.id} className="image-container">
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
        {/* {props.allImages.map((image) => {})} */}
      </div>
    </Fragment>
  );
};

export default ImageGallery;
