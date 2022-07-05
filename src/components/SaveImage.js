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
          <span className="save-option">Create new album</span>
          <span className="save-option">Add to existing</span>
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
          <button className="btn">Cancel</button>
          <button className="btn-inv">Save</button>
        </div>
      </div>
    </div>
  );
};

export default SaveImage;
