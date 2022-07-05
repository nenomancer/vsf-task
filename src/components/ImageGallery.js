import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./ImageGallery.css";

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

  // DEFINE ARRAYS FOR IMAGES IN SAME COLUMN
  const firstCol = [];
  const secondCol = [];
  const thirdCol = [];
  const length = props.allImages.length;

  // SPLIT ALL IMAGES INTO THREE ARRAYS BASED ON ID
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
      <header className="header">
        {/* SITE LOGO  */}
        <a href="/" className="logo">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="128.594"
            height="26"
            viewBox="0 0 128.594 26"
          >
            <path
              id="Site_Logo"
              data-name="Site Logo"
              d="M17.781,19.773c0-3.5,2.209-5.279,5.226-5.711l4.257-.646c.753-.108,1.67-.431,1.67-1.4,0-1.993-1.885-2.1-3.125-2.1a2.557,2.557,0,0,0-2.91,2.479h-4.58c.593-5.442,4.419-6.2,8.082-6.2,2.533,0,7.167.754,7.167,5.172v9.7c0,2.1.485,2.587,1.023,2.8v.647H29.473a8.574,8.574,0,0,1-.431-2.1A7.237,7.237,0,0,1,23.223,25C20.529,25,17.781,23.492,17.781,19.773Zm7.974-2.963c-1.778.323-3.233.754-3.233,2.694a2.057,2.057,0,0,0,2.209,2.156c2.1,0,4.2-1.347,4.2-3.5V15.84C28.449,16.217,27.695,16.487,25.755,16.81Zm95.283,7.726L116.159,16.6l-1.89,1.821v6.117h-4.88V0h4.88V13.162L120.42,6.77h5.773l-6.7,6.529,7.457,11.237Zm-25.514-.67a8.116,8.116,0,0,1-2.836-1.874,8.5,8.5,0,0,1-1.821-2.869,9.937,9.937,0,0,1-.652-3.659,11.832,11.832,0,0,1,.6-3.832,8.63,8.63,0,0,1,1.769-3.058,8.089,8.089,0,0,1,2.852-2.01,9.684,9.684,0,0,1,3.849-.722,11.164,11.164,0,0,1,3.041.412,8.137,8.137,0,0,1,2.611,1.255,6.481,6.481,0,0,1,2.7,5.068h-4.776a3.272,3.272,0,0,0-3.608-3.058,3.432,3.432,0,0,0-1.959.533A4.231,4.231,0,0,0,96,11.426a5.925,5.925,0,0,0-.7,1.856,10.038,10.038,0,0,0-.207,2.01,9.645,9.645,0,0,0,.207,1.959,6.02,6.02,0,0,0,.67,1.8,3.844,3.844,0,0,0,1.255,1.323,3.444,3.444,0,0,0,1.924.516,3.576,3.576,0,0,0,2.7-.979,4.642,4.642,0,0,0,1.186-2.629h4.707a8.046,8.046,0,0,1-2.749,5.395,8.871,8.871,0,0,1-5.808,1.856A9.728,9.728,0,0,1,95.524,23.866Zm-19.364.016a8.1,8.1,0,0,1-2.885-1.873,8.3,8.3,0,0,1-1.856-2.938,10.749,10.749,0,0,1-.653-3.848,10.9,10.9,0,0,1,.653-3.866A8.134,8.134,0,0,1,76.16,6.512a10.155,10.155,0,0,1,3.78-.67,10.3,10.3,0,0,1,3.8.67A8.094,8.094,0,0,1,88.5,11.357a10.9,10.9,0,0,1,.653,3.866,10.749,10.749,0,0,1-.653,3.848,8.337,8.337,0,0,1-1.855,2.938,8.091,8.091,0,0,1-2.9,1.873,10.526,10.526,0,0,1-3.8.653A10.379,10.379,0,0,1,76.16,23.882Zm1.719-13.865a3.951,3.951,0,0,0-1.323,1.289,5.334,5.334,0,0,0-.706,1.822,10.707,10.707,0,0,0-.205,2.1A10.438,10.438,0,0,0,75.85,17.3a5.527,5.527,0,0,0,.706,1.822,3.735,3.735,0,0,0,1.323,1.289,4.031,4.031,0,0,0,2.061.481,4.134,4.134,0,0,0,2.08-.481,3.709,3.709,0,0,0,1.339-1.289,5.547,5.547,0,0,0,.706-1.822,10.438,10.438,0,0,0,.205-2.078,10.707,10.707,0,0,0-.205-2.1,5.352,5.352,0,0,0-.706-1.822,3.92,3.92,0,0,0-1.339-1.289,4.026,4.026,0,0,0-2.08-.5A3.926,3.926,0,0,0,77.879,10.017ZM65.524,24.381a5.076,5.076,0,0,1-1.786-.6,3.184,3.184,0,0,1-1.22-1.272,4.55,4.55,0,0,1-.446-2.164V9.862H59.116V6.6h2.956V1.272h4.88V6.6h3.574V9.862H66.951v8.8a2.392,2.392,0,0,0,.412,1.65,2.391,2.391,0,0,0,1.65.412c.275,0,.538-.012.79-.034a6.727,6.727,0,0,0,.722-.1v3.78a11.8,11.8,0,0,1-1.374.138q-.757.034-1.478.034A14.317,14.317,0,0,1,65.524,24.381Zm-29.155.155V.451h4.741V24.536Zm-29.9,0L0,6.7H5.281L9,19.849h.053L12.878,6.7h5.011L11.424,24.536Zm41.86-.31A7.979,7.979,0,0,1,45.7,23.195a5.894,5.894,0,0,1-1.89-1.906A5.969,5.969,0,0,1,43,18.317h4.639a2.674,2.674,0,0,0,.327,1.356,2.861,2.861,0,0,0,.842.928,3.612,3.612,0,0,0,1.185.532,5.549,5.549,0,0,0,1.391.172,5.224,5.224,0,0,0,1.083-.12,3.684,3.684,0,0,0,1.031-.378,2.351,2.351,0,0,0,.773-.688,1.806,1.806,0,0,0,.309-1.083q0-1.1-1.461-1.649a29.268,29.268,0,0,0-4.072-1.1q-1.065-.239-2.079-.566a7.106,7.106,0,0,1-1.8-.859,4.169,4.169,0,0,1-1.272-1.341,3.8,3.8,0,0,1-.481-1.976,5.343,5.343,0,0,1,.671-2.818,4.937,4.937,0,0,1,1.769-1.735A7.755,7.755,0,0,1,48.326,6.1a15.174,15.174,0,0,1,2.818-.258,14.057,14.057,0,0,1,2.8.274,7.46,7.46,0,0,1,2.423.928A5.586,5.586,0,0,1,58.137,8.78a5.838,5.838,0,0,1,.841,2.731H54.34A2.134,2.134,0,0,0,53.275,9.6a4.882,4.882,0,0,0-2.267-.5,8.263,8.263,0,0,0-.895.052,2.979,2.979,0,0,0-.876.223,1.811,1.811,0,0,0-.671.5,1.319,1.319,0,0,0-.274.877,1.335,1.335,0,0,0,.481,1.065,3.693,3.693,0,0,0,1.254.67,15.535,15.535,0,0,0,1.769.464q1,.205,2.028.446a20.953,20.953,0,0,1,2.079.584,6.833,6.833,0,0,1,1.8.911,4.392,4.392,0,0,1,1.271,1.409,4.127,4.127,0,0,1,.481,2.078,5.4,5.4,0,0,1-2.543,4.846,7.527,7.527,0,0,1-2.594,1.013,15.148,15.148,0,0,1-2.973.292A14.726,14.726,0,0,1,48.326,24.226Z"
              transform="translate(0.713 0.5)"
              fill="#fff"
              stroke="rgba(0,0,0,0)"
              strokeWidth="1"
            />
          </svg>
        </a>
        <button className="btn">My albums</button>
      </header>
      <div className="gallery-container">
        {/* RENDER ALL IMAGES  */}
        <div className="column">
          {firstCol.map((image) => {
            return (
              <div className="image-container" key={image.id}>
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
                    onClick={imageClickHandler}
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
