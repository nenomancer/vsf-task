import React from "react";
import "./ImageModal.css";
import { MdClose } from "react-icons/md";

const ImageModal = (props) => {
  const closeHandler = () => {
    props.setShowImageModal(false);
  };
  return (
    <div className="modal-container">
      <MdClose className="close-button" onClick={closeHandler} />
      <img className="modal-image" src={props.selectedImage.src} alt="" />
      <div className="modal-image-info">
        <span className="author">Author Name and </span>
        <span>width x height</span>
      </div>
    </div>
  );
};

export default ImageModal;
