import React from "react";
import "./ImageModal.css";

import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const ImageModal = (props) => {
  const author = props.selectedImage.attributes["author"].value;

  // ALL THIS FOR RANDOM DATE;
  const maxDate = Date.now();
  const timestamp = Math.floor(Math.random() * maxDate);
  const uploadDate = new Date(timestamp).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  // const uploadYear = `${
  //   weekday[uploadDate.getDay()]
  // } ${uploadDate.getFullYear()}`;

  const closeHandler = () => {
    props.setShowImageModal(false);
    document.querySelector("body").style.overflowY = "scroll";
  };

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") props.setShowImageModal(false);
  });

  // const navClickHandler = (type) => {
  //   let selectedIndex = props.selectedImage.attributes.index.value;
  //   console.log(props.selectedImage.attributes.index.value); // WORK ON THIS FOR MODAL NAVIGATION
  //   if (type === "left") {
  //     if (selectedIndex === 0) {
  //       selectedIndex = props.images.length();
  //     } else {
  //       selectedIndex -= 1;
  //     }
  //     console.log(`selectedIndex: ${selectedIndex}`);
  //   }
  // };

  return (
    <div className="modal-container">
      <div className="modal-options">
        <button className="btn-inv">Add to album +</button>
        <button className="btn">Download</button>
      </div>
      <div>
        {/* <IoIosArrowBack
          className="nav-arrow"
          onClick={() => navClickHandler("left")}
        />
        <IoIosArrowForward className="nav-arrow" /> */}
        <img className="modal-image" src={props.selectedImage.src} alt="" />
      </div>
      <div className="modal-image-info">
        <p className="label">Uploaded by</p>
        <p className="author">{author}</p>
        <p className="info">{uploadDate}</p>
        <button className="btn-inv" id="close-modal" onClick={closeHandler}>
          Go back
        </button>
      </div>
      <div className="backdrop"></div>
    </div>
  );
};

export default ImageModal;
