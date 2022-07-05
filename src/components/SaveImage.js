import React from "react";
import "./SaveImage.css";

const SaveImage = (props) => {
  const inputChangeHandler = (e) => {
    console.log(e.target.value);
  };

  return (
    <div className="new-album-container">
      <div className="form-container">
        <div className="top-section">
          <div className="save-option selected" >Create new album</div>
          <div className="save-option">Add to existing</div>
        </div>
        <div className="mid-section">
          <input
            className="album-title"
            type="text"
            onChange={inputChangeHandler}
            defaultValue="Enter title here"
          ></input>
        </div>
        <div className="bot-section">
          <button className="btn" onClick={() => props.setShowSaveImage(false)}>
            Cancel
          </button>
          <button className="btn-inv">Save</button>
        </div>
      </div>
    </div>
  );
};

export default SaveImage;
