import React from "react";
import "./ImageModal.css";
import { MdClose } from "react-icons/md";

const ImageModal = (props) => {
  const author = props.selectedImage.attributes["author"].value;
  const closeHandler = () => {
    props.setShowImageModal(false);
  };
  return (
    <div className="modal-container">
      <MdClose className="close-button" onClick={closeHandler} />
      <img className="modal-image" src={props.selectedImage.src} alt="" />
      <div className="modal-image-info">
        <p className="author">{author}</p>
        <p>width x height</p>
      </div>
    </div>
  );
};

export default ImageModal;
