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
      <header>valstock</header>
      <ImageGallery allImages={allImages} />
      {/* <section className="hero-section">
        <h1 className="main-text">Join our stock community!</h1>
        <p>Download free photos and videos powered by the best photographers</p>
        <form action="/" method="GET" className="login-form">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            required
            placeholder="Enter username here..."
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter password here..."
          ></input>
        </form>
      </section> */}
    </div>
  );
}

export default App;
