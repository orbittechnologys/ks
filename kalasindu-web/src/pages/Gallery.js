import React, { useState } from "react";
import PhotoAlbum from "../components/PhotoAlbum";
import PhotoAlbum1 from "../components/PhotoAlbum1";
import PhotoAlbum2 from "../components/PhotoAlbum2";
import PhotoAlbum3 from "../components/PhotoAlbum3";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { HashLink as Link } from "react-router-hash-link";

function Gallery() {
  const [hovered1, setHovered1] = useState(false);
  const [hovered2, setHovered2] = useState(false);
  const [hovered3, setHovered3] = useState(false);
  const [hovered4, setHovered4] = useState(false);

  const handleHover1 = () => {
    setHovered1(true);
  };

  const handleLeave1 = () => {
    setHovered1(false);
  };

  const handleHover2 = () => {
    setHovered2(true);
  };

  const handleLeave2 = () => {
    setHovered2(false);
  };

  const handleHover3 = () => {
    setHovered3(true);
  };

  const handleLeave3 = () => {
    setHovered3(false);
  };

  const handleHover4 = () => {
    setHovered4(true);
  };

  const handleLeave4 = () => {
    setHovered4(false);
  };

  return (
    <>
      <div style={{ backgroundColor: 'black' }}>
        <Navbar />
        <div>
          <div
            style={{
              height: "100vh",
              border: "2px solid black",
              backgroundColor: "black",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                marginTop: "180px",
              }}
            >
              <div style={{ position: "relative", overflow: "hidden", zIndex: 1 }}
                onMouseEnter={handleHover1}
                onMouseLeave={handleLeave1}
              >
                <Link smooth to="#section1">
                  <div
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      color: hovered1 ? "yellow" : "white",
                      fontSize: "50px",
                      textAlign: "center",
                      cursor: "pointer",
                      fontFamily: 'Oswald',
                      transition: "color 0.2s",
                      zIndex: 2,
                    }}
                  >
                    Rangarpane
                  </div>
                  <img
                    src={require("../assets/images/GM1.png")}
                    alt="Image 1"
                    style={{
                      width: "100%",
                      transform: hovered1 ? "scale(1.1)" : "scale(1)",
                      transition: "transform 0.2s",
                    }}
                  />
                </Link>
              </div>

              <div style={{ position: "relative", overflow: "hidden", zIndex: 1 }}
                onMouseEnter={handleHover2}
                onMouseLeave={handleLeave2}
              >
                <Link smooth to="#section2">
                  <div
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      color: hovered2 ? "yellow" : "white",
                      fontSize: "50px",
                      textAlign: "center",
                      cursor: "pointer",
                      fontFamily: 'Oswald',
                      transition: "color 0.2s",
                      zIndex: 2,
                    }}
                  >
                    Festivals
                  </div>
                  <img
                    src={require("../assets/images/GM2.png")}
                    alt="Image 2"
                    style={{
                      width: "100%",
                      transform: hovered2 ? "scale(1.1)" : "scale(1)",
                      transition: "transform 0.2s",
                    }}
                  />
                </Link>
              </div>

              <div style={{ position: "relative", overflow: "hidden", zIndex: 1 }}
                onMouseEnter={handleHover3}
                onMouseLeave={handleLeave3}
              >
                <Link smooth to="#section3">
                  <div
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      color: hovered3 ? "yellow" : "white",
                      fontSize: "50px",
                      textAlign: "center",
                      cursor: "pointer",
                      fontFamily: 'Oswald',
                      transition: "color 0.2s",
                      zIndex: 2,
                    }}
                  >
                    Performance
                  </div>
                  <img
                    src={require("../assets/images/GM3.png")}
                    alt="Image 3"
                    style={{
                      width: "100%",
                      transform: hovered3 ? "scale(1.1)" : "scale(1)",
                      transition: "transform 0.2s",
                    }}
                  />
                </Link>
              </div>

              <div style={{ position: "relative", overflow: "hidden", zIndex: 1 }}
                onMouseEnter={handleHover4}
                onMouseLeave={handleLeave4}
              >
                <Link smooth to="#section4">
                  <div
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      color: hovered4 ? "yellow" : "white",
                      fontSize: "50px",
                      textAlign: "center",
                      cursor: "pointer",
                      fontFamily: 'Oswald',
                      transition: "color 0.2s",
                      zIndex: 2,
                    }}
                  >
                    Events
                  </div>
                  <img
                    src={require("../assets/images/GM4.png")}
                    alt="Image 4"
                    style={{
                      width: "100%",
                      transform: hovered4 ? "scale(1.1)" : "scale(1)",
                      transition: "transform 0.2s",
                    }}
                  />
                </Link>
              </div>
            </div>
          </div>

          <div id="section1" style={{ textAlign: 'center', color: 'white', backgroundColor: 'black', marginTop: '50px' }}>
            <PhotoAlbum />
          </div>

          <div id="section2" style={{ textAlign: 'center', color: 'white', backgroundColor: 'black', marginTop: '50px' }}>
            <PhotoAlbum1 />
          </div>

          <div id="section3" style={{ textAlign: 'center', color: 'white', backgroundColor: 'black', marginTop: '50px' }}>
            <PhotoAlbum2 />
          </div>

          <div id="section4" style={{ textAlign: 'center', color: 'white', backgroundColor: 'black', marginTop: '50px', marginBottom: '80px' }}>
            <PhotoAlbum3 />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Gallery;
