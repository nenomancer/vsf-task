import React from "react";
import "./ImageModal.css";
import { MdClose } from "react-icons/md";

const ImageModal = (props) => {
  const author = props.selectedImage.attributes["author"].value;
  const closeHandler = () => {
    props.setShowImageModal(false);
    document.querySelector("body").style.overflowY = "scroll";
  };
  return (
    <div className="modal-container">
      <div className="modal-options">
        <button className="btn-inv">Add to album</button>
        <button className="btn">Download</button>
      </div>
      <MdClose className="close-button" onClick={closeHandler} />
      <img className="modal-image" src={props.selectedImage.src} alt="" />
      <div className="modal-image-info">
        <p className="label">Uploaded by</p>
        <p className="author">{author}</p>
        <p>width x height</p>
        <button className="btn-inv">Go back</button>
      </div>
    </div>
  );
};

export default ImageModal;
