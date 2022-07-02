import { useEffect, useState } from "react";
import ImageGallery from "./components/ImageGallery";
import "./App.css";

function App() {
  const [allImages, setAllImages] = useState([]);

  const fetchImages = () => {
    try {
      return fetch(`https://picsum.photos/v2/list/`, {
        method: "GET",
      })
        .then((response) => response.json())
        .then((data) => setAllImages(data));
    } catch (err) {
      console.log(err);
      return err;
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div className="App">
      <header className="header">
        <div className="logo">valstock</div>
        <div className="my-albums">My albums</div>
      </header>
      <ImageGallery allImages={allImages} />
    </div>
  );
}

export default App;
