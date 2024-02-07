import React, { useState, useEffect } from "react";
import "../assets/styles/core.css";
import logo from "../assets/images/logo.png";
import heroImg from "../assets/images/rsc.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Team from "../components/Team";
import Testimonial from "../components/Testimonial";
import bgImg from "../assets/images/why.png";
import Hcard1 from "../assets/images/Hcard1.png.png";
import Hcard2 from "../assets/images/Hcard2.png";
import { SlCalender } from "react-icons/sl";
import { FaRegClock } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { GoArrowUpRight } from "react-icons/go";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa6";
import "aos/dist/aos.css";
import AOS from "aos";

function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  const targetDate = "Febrauary 15, 2024 12:00:00";
  const [countdown, setCountdown] = useState({
    days: "28",
    hours: "12",
    minutes: "30",
    seconds: "50",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const eventDate = new Date(targetDate).getTime();
      const timeRemaining = eventDate - now;

      const days = String(
        Math.floor(timeRemaining / (1000 * 60 * 60 * 24))
      ).padStart(2, "0");
      const hours = String(
        Math.floor((timeRemaining / (1000 * 60 * 60)) % 24)
      ).padStart(2, "0");
      const minutes = String(
        Math.floor((timeRemaining / 1000 / 60) % 60)
      ).padStart(2, "0");
      const seconds = String(Math.floor((timeRemaining / 1000) % 60)).padStart(
        2,
        "0"
      );

      setCountdown({ days, hours, minutes, seconds });
    }, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Navbar active={"Home"} />


      <div style={{overflow: "hidden"}}>
      <section className="hero-wrapper position-relative">
        <img src={heroImg} className="img-fluid w-100" alt="Hero Image" />
        <div className="hero-overlay d-flex align-items-center justify-content-around">
          <div
            className="social-icon display-6 p-5 text-white text-center fw-bolder"
            data-aos="fade-up"
            data-aos-duration="2800"
          >
            <FaFacebook />
            
            <RiInstagramFill />
            <FaYoutube />
          </div>
          <div className="d-flex flex-column justify-content-end">
            <div style={{ fontFamily: "Oswald" }}>
              <h2
                className="custom-text display-5 p-5 text-white text-center fw-bolder mt-4"
                data-aos="fade-up"
                data-aos-duration="2800"
              >
                Parampara is like an umbilical cord that connects dancers to the
                beginnings of their art form.
               
                <span className="d-flex justify-content-end">
                  -Poornima Gururaj
                </span>
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* Cards */}

      {/* <section className="container-12" style={{backgroundColor: "#E8E5E7" }}> */}
      {/* change based on client */}
      {/*<div className='d-flex justify-content-center align-items-center p-5'>
                    <p className='text-warning mb-5 fs-1 text-center fw-bold'>
                         We will be out with something super exciting soon.. 
                    </p> 
                </div>*/}
<section>
  <h1 className="fw-bolder text-center my-5 display-4" style={{ fontFamily: "Oswald" }}>
    What's New?
  </h1>

  <div className="container-fluid d-flex justify-content-center">
    <div className="row">
      <div className="col-lg-6 col-md-12 mb-4" style={{ maxWidth: "28rem", position: "relative", fontFamily: "Open Sans" }} data-aos="fade-right" data-aos-duration="2800">
        {/* Card 1 */}
        <div className="card-wrapper">
          <div>
            <img className="rounded-top img-fluid" src={Hcard1}></img>
          </div>
          <div className="circle-date ">
            <p className="circle-date-text ">
              25 th <br />
              Sept
            </p>
          </div>
          <div className="p-3 mb-2 bg-white text-dark rounded">
            <h3 className="fw-bold">Nirantara Narmada</h3>
            <p className="fw-bold">Artist: Smt. Ramavaidyanathan</p>
            <div>
              <div className="d-flex justify-content-start">
                <SlCalender className="mt-1" />{" "}
                <p className="ms-2 mb-2">Sunday, 5th Sept, 2023</p>
              </div>
              <div className="d-flex justify-content-start">
                <FaRegClock className="mt-1" />{" "}
                <p className="ms-2">6:00 PM</p>
              </div>
              <div className="d-flex justify-content-start">
                <IoLocationOutline className="mt-1" />{" "}
                <p className="ms-2">JSS auditorium, Jayanagar, Bangalore</p>
              </div>
              <div className="d-flex justify-content-between align-item-center">
                <a href="http://localhost:3000/events" className="fw-bold" style={{ textDecoration: "none", color: "black" }}>
                  more info <GoArrowUpRight />
                </a>
                <p className="fw-bold">FREE</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-6 col-md-12 mb-4" style={{ maxWidth: "28rem", position: "relative", fontFamily: "Open Sans" }} data-aos="fade-left" data-aos-duration="2800">
        {/* Card 2 */}
        <div className="card-wrapper">
          <div>
            <img className="rounded-top img-fluid" src={Hcard2}></img>
          </div>
          <div className="circle-date">
            <p className="circle-date-text">
              25 th <br />
              Sept
            </p>
          </div>
          <div className="p-3 mb-2 bg-white text-dark rounded">
            <h3 className="fw-bold">Nirantara Narmada</h3>
            <p className="fw-bold">Artist: Smt. Ramavaidyanathan</p>
            <div>
              <div className="d-flex justify-content-start">
                <SlCalender className="mt-1" />{" "}
                <p className="ms-2 mb-2">Sunday, 5th Sept, 2023</p>
              </div>
              <div className="d-flex justify-content-start">
                <FaRegClock className="mt-1" />{" "}
                <p className="ms-2">6:00 PM</p>
              </div>
              <div className="d-flex justify-content-start">
                <IoLocationOutline className="mt-1" />{" "}
                <p className="ms-2">JSS auditorium, Jayanagar, Bangalore</p>
              </div>
              <div className="d-flex justify-content-between align-item-center">
                <a href="http://localhost:3000/events" className="fw-bold" style={{ textDecoration: "none", color: "black" }}>
                  more info <GoArrowUpRight />
                </a>
                <p className="fw-bold">FREE</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* <!-- why --> */}
      <section
        className="container-fluid"
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "rgba(36, 17, 10, 1)",
          
        }}
      >
        <div className="container p-5">
          <div className="row">
            <div className="col-lg-6 d-flex justify-content-center align-items-center">
              <div>
                <p
                  className="display-6 text-white "
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  style={{ fontFamily: "Oswald" }}
                >
                  Why choose Kalasindhu Academy?
                </p>
                <div>
                  <a
                    className="btn btn-md  rounded py-2 px-4"
                    style={{ backgroundColor: "#FCB541" }}
                  >
                    Know more about us
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-6  mt-3">
              <div
                className="accordion"
                style={{ border: "none", fontFamily: "Open Sans" }}
                id="accordionExample"
              >
                <div
                  className="accordion-item"
                  data-aos="zoom-in"
                  style={{ border: "none" }}
                  data-aos-duration="1000"
                >
                  <h2
                    className="accordion-header"
                    style={{ border: "none" }}
                    id="headingOne"
                  >
                    <button
                      className="accordion-button "
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      <span className="fs-5 me-2">01</span> Theoretical
                      Knowledge
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    style={{ border: "none" }}
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <p style={{ fontFamily: "Open Sans" }}>
                        From a young age,students are taught to embrace the
                        fusion of practical knowledge and theory in dance.they
                        are immersed in studying dance texts, crafting their own
                        narratives, and continuously expanding her understanding
                        of various literary works and texts.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="accordion-item" style={{ border: "none" }}>
                  <h2
                    className="accordion-header"
                    id="headingTwo"
                    data-aos="zoom-in"
                    data-aos-duration="1200"
                  >
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      <span className="fs-5 me-2">02</span> Practicals
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <p>
                        Bharatanatyam, a comprehensive art form, encompasses
                        nritta(pure dance and movement vocabulary), and
                        abhinaya(expressions and enactment of emotions), all
                        intricately taught with meticulousness and thoroughness,
                        ensuring attention to every minute detail.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="accordion-item" style={{ border: "none" }}>
                  <h2
                    className="accordion-header"
                    id="headingThree"
                    data-aos="zoom-in"
                    data-aos-duration="1200"
                  >
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      <span className="fs-5 me-2">03</span> Lifestyle Knowledge
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <p>
                        Kalasindhu instills discipline in students' lives by
                        emphasizing decorum in classNameand practice, fostering
                        a respectful understanding of their bodies through yoga,
                        exercises, and regular guidance counseling. The focus is
                        on building a healthy relationship with oneself,
                        promoting personal growth and well-being.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="accordion-item" style={{ border: "none" }}>
                  <h2
                    className="accordion-header"
                    id="headingFour"
                    data-aos="zoom-in"
                    data-aos-duration="1200"
                  >
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      <span className="fs-5 me-2">04</span> Music and Sanskrit
                    </button>
                  </h2>
                  <div
                    id="collapseFour"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFour"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <p>
                        Kalasindhu nurtures the connection between dance, music,
                        and literature, emphasizing the importance of Sanskrit
                        and musicality in enhancing Nritya. By integrating these
                        elements into the curriculum, students develop a
                        profound understanding of expression and cultivate their
                        ability to showcase it through dance.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="accordion-item" style={{ border: "none" }}>
                  <h2
                    className="accordion-header"
                    id="headingFive"
                    data-aos="zoom-in"
                    data-aos-duration="1200"
                  >
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFive"
                      aria-expanded="false"
                      aria-controls="collapseFive"
                    >
                      <span className="fs-5 me-2">05</span> Guru Shishya
                      Parampara
                    </button>
                  </h2>
                  <div
                    id="collapseFive"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFive"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <p>
                        Illustrative Tanjavur style of Bharatanatyam is a
                        unifying force in the pedagogy at Kalasindhu. Rooted in
                        the paramparic tradition, we adhere to authentic dance
                        repertoire and training methods, instilling a sense of
                        reverence for our gurus and their lineage, thus
                        preserving and honoring our rich heritage.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Team />
      <Testimonial />

      {/* <!-- video --> */}
      <section
        className="container-fluid"
        style={{
          backgroundColor: "rgb(14, 14, 14)",
          paddingTop: "5.5em",
        }}
      >
        <div className="container p-3 align-middle">
          <h2
            className="text-center mt-4"
            style={{
              color: "rgba(197, 158, 112, 1)",
              fontSize: "48px",
              fontFamily: "Oswald",
            }}
          >
            Glimpse of Kalasindhu 
          </h2>
          <div
            className="d-flex justify-content-center mt-5"
            data-aos="fade-up"
            data-aos-duration="1400"
          >
            <iframe
              width="700"
              height="322"
              src="https://www.youtube.com/embed/jG2AciJ3zHY?si=IXTvnkZw4Z3v4W_l"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
              className="align-middle"
            ></iframe>
          </div>
        </div>
      </section>

      {/* <!-- contact --> */}
      <section
        style={{
          backgroundColor: "#330A0A",
          paddingTop: "8em",
          paddingBottom: "4em",
        }}
      >
        <h1
          className="text-center custom-text1 mb-4"
          style={{ color: "#C59E70", fontFamily: "Oswald", fontSize: "48px" }}
        >
          Pick one way to get in touch..
        </h1>
        <div className="container-fluid p-5 map d-flex flex-column flex-lg-row justify-content-between">
          <div className="mb-5 mb-lg-0">
            <div className="">
              <ul className="list-unstyled footer-link mt-4 display-2">
                <li>
                  <a
                    href="tel:+919900579347"
                    className="text-white text-decoration-none"
                  >
                    <i className="bi bi-telephone me-2"></i> Whatsapp us or call
                    us at 9900579347{" "}
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:Kalasindhu@gmail.com"
                    className="text-white text-decoration-none"
                  >
                    <i className="bi bi-envelope me-2"></i> If you are old
                    school, then email us at Kalasindhu@gmail.com{" "}
                  </a>
                </li>
                <li>
                  <a href=" " className="text-white text-decoration-none">
                    <i className="bi bi-instagram me-2"></i>Social media lover ?
                    Stalk our page and DM us at Kalasindhu Academy{" "}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.610553407524!2d77.55541367472718!3d12.932733715729922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3e2615f2180b%3A0x36301a3a3787ae2a!2sKalasindhu%20Academy%20for%20Dance%20and%20Related%20Arts!5e0!3m2!1sen!2sin!4v1690896701490!5m2!1sen!2sin"
              width="465"
              height="319"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              className="text-center rounded"
            ></iframe>
            <p
              className="text-left text-white mt-3"
              style={{ maxWidth: "100%", width: "465px" }}
            >
              Come visit us at this location. We are open on Mondays,
              Wednesdays, and Fridays from 5 pm to 8 pm and on weekends.
            </p>
          </div>
        </div>

        <div className="container-fluid">
          <div
            className="d-flex flex-column flex-lg-row justify-content-around align-items-center"
            style={{
              maxWidth: "1341px",
              margin: "0 auto",
              backgroundColor: "#FCB541",
              borderRadius: "15px",
              marginTop: "40px",
              padding: "20px", // Add padding for better spacing
            }}
          >
            <div className="mb-lg-3">
              <b className="fs-4 fs-lg-2" style={{ fontSize: "36px" }}>
                Kalasindhu Community
              </b>
              <p className="fs-5 fs-lg-3" style={{ fontSize: "20px" }}>
                Join our Whatsapp community and never miss any update on our
                workshops or events
              </p>
            </div>
            <div className="d-flex align-items-center">
              <a
                href="#"
                className="fs-4 fs-lg-3"
                style={{
                  fontSize: "18px",
                  padding: "10px 30px", // Default padding
                  fontWeight: "500",
                  backgroundColor: "#0E0E0E",
                  color: "#FCB541",
                  borderRadius: "15px",
                  textDecoration: "none",
                }}
              >
                Join Whatsapp Group
              </a>
            </div>
          </div>
        </div>
      </section>
      </div>

      <Footer />
    </>
  );
}

export default Home;