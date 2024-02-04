import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import colImg1 from "../assets/images/Collobaration1.png";
import colImg2 from "../assets/images/collab.png";
import Footer from "../components/Footer";
import "aos/dist/aos.css";
import AOS from "aos";

function Collaborate() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Navbar />
      <div style={{ backgroundColor: "black" }}>
        <section
          className="hero-wrapper position-relative"
          style={{ marginTop: "80px" }}
        >
          <img src={colImg1} className="img-fluid w-100" alt="Hero Image" />
          <div className="hero-overlay d-flex align-items-center justify-content-around">
            <div className="d-flex flex-column justify-content-end">
              <div>
                <h1
                  data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
                  style={{
                    fontSize: "64px",
                    color: "white",
                    fontWeight: "600",
                    textAlign: "center",
                    marginTop: "90px",
                    fontFamily: "Oswald",
                  }}
                >
                  Do you want to collaborate??
                </h1>
                <p
                  style={{
                    width: "1110px",
                    fontSize: "20px",
                    fontFamily: "Open Sans",
                  }}
                  className="display-5 p-5 text-white text-center fw-bolder"
                  data-aos="fade-up"
                  data-aos-duration="2800"
                >
                  At Kalasindhu, a comprehensive and integrated approach to
                  education is offered. Music and sankrit is taught along with
                  dance, so students understand the lyrics and meaning of the
                  items they perform.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section style={{ backgroundColor: "#000", height: "652px" }}>
          <h1
            className="text-white fw-bolder"
            style={{
              fontSize: "64px",
              fontWeight: "600",
              paddingLeft: "50px",
              fontFamily: "Oswald",
              marginTop: "22px",
            }}
            data-aos="fade-right"
            data-aos-duration="3000"
          >
            Kalasindhu is Looking for ....
          </h1>
          <div className="d-flex justify-content-around align-self-center mt-5">
            <div className="col-lg-6 d-flex justify-content-between align-items-center">
              <img src={colImg2} height={500} alt="Hero Image" />
            </div>
            <div className="col-lg-6">
              <p
                className="text-white"
                style={{ fontSize: "30px", width: "672px",fontFamily:'Open Sans' }}
                data-aos="fade-up"
                data-aos-duration="2800"
              >
                Dancers, muscicians, photographers and anyone else who is
                bursting with ideas and who would like to share and contribute
                to the creative space.
              </p>
              <a
                className="btn btn-lg btn-dark rounded fw-bolder mt-5"
                style={{
                  width: "198px",
                  background: "#FCB541",
                  color: "black",
                }}
              >
                Let's Collaborate
              </a>
            </div>
          </div>
        </section>

        <div
          className="d-flex justify-content-around align-self-center"
          style={{ backgroundColor: "#003D1B", height: "652px" }}
        >
          <div className="d-flex justify-content-between align-items-center">
            <img src={colImg2} height={362} alt="Hero Image" />
          </div>
          <div style={{ marginTop: "140px" }}>
            <h1
              className="text-white fw-bolder"
              style={{ fontSize: "64px", fontWeight: "600", fontFamily: "Oswald" }}
              data-aos="fade-right"
              data-aos-duration="3000"
            >
            Rent the space
            </h1>
            <p
              className="text-white mt-5"
              style={{ fontSize: "30px", width: "672px", fontFamily:'Open Sans' }}
              data-aos="fade-up"
              data-aos-duration="2800"
            >
              Dancers, muscicians, photographers and anyone else who is bursting
              with ideas and who would like to share and contribute to the
              creative space.
            </p>
            <a
              className="btn btn-lg btn-dark rounded fw-bolder mt-5"
              style={{
                width: "198px",
                background: "#FCB541",
                color: "black",
              }}
            >
              Let's Collaborate
            </a>
          </div>
        </div>

        <section>
          <div style={{ backgroundColor: "#330A0A", height: "652px" }}>
            <div className="container">
              <div className="row p-5 ">
                <div className="col-lg-6">
                  <h1
                    className="text-white display-5 fw-bolder mt-5"
                    style={{ fontSize: "64px", fontWeight: "600", fontFamily:'Oswlad' }}
                    data-aos="fade-left"
                    data-aos-duration="3000"
                  >
                    Showcase your art
                  </h1>
                  <p
                    className="text-white"
                    style={{ fontSize: "30px", marginTop: "50px",fontFamily:'Open Sans' }}
                    data-aos="fade-up"
                    data-aos-duration="3000"
                  >
                    Dancers, muscicians, photographers and anyone else who is
                    bursting with ideas and who would like to share and
                    contribute to the creative space.{" "}
                  </p>
                  <a
                    className="btn btn-lg btn-dark rounded fw-bolder mt-5"
                    style={{
                      width: "198px",
                      background: "#FCB541",
                      color: "black",
                    }}
                  >
                    Let's Collaborate
                  </a>
                </div>
                <div className="col-lg-6 d-flex justify-content-center align-items-center">
                  <img src={colImg2} height={362} alt="Hero Image" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Collaborate;
