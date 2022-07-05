import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ImageGallery from "./components/ImageGallery";
import ImageModal from "./components/ImageModal";
import SaveImage from "./components/SaveImage";
import "./App.css";

function App() {
  const [allImages, setAllImages] = useState([]);
  const [imageURL, setImageURL] = useState("");
  const [selectedImage, setSelectedImage] = useState(0);
  const [showImageModal, setShowImageModal] = useState(false);
  const [showSaveImage, setShowSaveImage] = useState(false);

  // DEFINE FUNCTION TO FETCH IMAGES FROM PICSUM
  const fetchImages = () => {
    try {
      // FETCH EXACTLY 12 IMAGES
      return (
        fetch(`https://picsum.photos/v2/list?limit=12`, {
          method: "GET",
        })
          .then((response) => response.json())
          // SET THE FETCHED IMAGES AS allImages
          .then((data) => setAllImages(data))
      );
    } catch (err) {
      console.log(err);
      return err;
    }
  };

  // FETCH IMAGES ON LOAD
  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div className="App">
      

      {/* SHOW SAVE IMAGE MODAL BASED ON A CONDITION */}
      {showSaveImage && <SaveImage setShowSaveImage={setShowSaveImage} />}

      {/* USE BROWSER ROUTER TO DYNAMICALLY CHANGE URL */}
      <BrowserRouter>
        {/* DEFINE ROUTES  */}
        <Routes>
          {/* RENDER GALLERY AS DEFAULT ROUTE  */}
          <Route
            path="/"
            element={
              <ImageGallery
                allImages={allImages}
                setSelectedImage={setSelectedImage}
                setImageURL={setImageURL}
                setShowSaveImage={setShowSaveImage}
              />
            }
          />
          {/* RENDER IMAGE MODAL WITH IMAGE ID AS PATH */}
          <Route
            path={`${localStorage.getItem("selectedID")}`}
            element={
              <ImageModal
                selectedImage={selectedImage}
                setSelectedImage={setSelectedImage}
                setShowImageModal={setShowImageModal}
                images={allImages}
                setShowSaveImage={setShowSaveImage}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
