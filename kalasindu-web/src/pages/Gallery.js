import React from "react";
import PhotoAlbum from "../components/PhotoAlbum"
import PhotoAlbum1 from "../components/PhotoAlbum1";
import PhotoAlbum2 from "../components/PhotoAlbum2";
import PhotoAlbum3 from "../components/PhotoAlbum3";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { HashLink as Link } from "react-router-hash-link";


function Gallery() {
  return (
    <>
    <div style={{backgroundColor:'black'}}>
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
            <div style={{ position: "relative" }}>
              <Link smooth to="#section1">
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    color: "white",
                    fontSize: "50px",
                    textAlign: "center",
                    cursor: "pointer",
                  }}
                >
                  Rangarpane
                </div>
                <img
                  src={require("../assets/images/GM1.png")}
                  alt="Image 1"
                  style={{ width: "100%", transition: "transform 0.2s" }}
                />
              </Link>
            </div>

            <div style={{ position: "relative" }}>
              <Link smooth to="#section2">
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    color: "white",
                    fontSize: "50px",
                    textAlign: "center",
                    cursor: "pointer",
                  }}
                >
                  Festivals
                </div>
                <img
                  src={require("../assets/images/GM2.png")}
                  alt="Image 1"
                  style={{ width: "100%", transition: "transform 0.2s" }}
                />
              </Link>
            </div>

            <div style={{ position: "relative" }}>
              <Link smooth to="#section3">
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    color: "white",
                    fontSize: "50px",
                    textAlign: "center",
                    cursor: "pointer",
                  }}
                >
                  Performance
                </div>
                <img
                  src={require("../assets/images/GM3.png")}
                  alt="Image 1"
                  style={{ width: "100%", transition: "transform 0.2s" }}
                />
              </Link>
            </div>

            <div style={{ position: "relative" }}>
              <Link smooth to="#section4">
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    color: "white",
                    fontSize: "50px",
                    textAlign: "center",
                    cursor: "pointer",
                  }}
                >
                  Events
                </div>
                <img
                  src={require("../assets/images/GM4.png")}
                  alt="Image 1"
                  style={{ width: "100%", transition: "transform 0.2s" }}
                />
              </Link>
            </div>
          </div>
        </div>
        
        <div id="section1" style={{textAlign:'center', color:'white', backgroundColor:'black', marginTop:'50px'}}>
          <PhotoAlbum />
        </div>

        <div id="section2" style={{textAlign:'center', color:'white', backgroundColor:'black', marginTop:'50px'}}>
        <PhotoAlbum1 />
        </div>

        <div id="section3" style={{textAlign:'center', color:'white', backgroundColor:'black', marginTop:'50px'}}>
        <PhotoAlbum2 />
        </div>

        <div id="section4" style={{textAlign:'center', color:'white', backgroundColor:'black', marginTop:'50px', marginBottom:'80px'}}>
        <PhotoAlbum3 />
        </div>
      </div>
      <Footer />
      </div>
    </>
  );
}

export default Gallery;
