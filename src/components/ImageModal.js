import React from "react";
import "./ImageModal.css";
import { MdClose } from "react-icons/md";

const ImageModal = (props) => {
  const author = props.selectedImage.attributes["author"].value;
  const closeHandler = () => {
    props.setShowImageModal(false);
    document.querySelector("body").style.overflowY = "scroll";
  };

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") props.setShowImageModal(false);
  });

  return (
    <div className="modal-container">
      <div className="modal-options">
        <button className="btn-inv">Add to album</button>
        <button className="btn">Download</button>
      </div>
      <img className="modal-image" src={props.selectedImage.src} alt="" />
      <div className="modal-image-info">
        <p className="label">Uploaded by</p>
        <p className="author">{author}</p>
        <p className="info">width x height</p>
        <button className="btn-inv" id="close-modal" onClick={closeHandler}>
          Go back
        </button>
      </div>
    </div>
  );
};

export default ImageModal;
