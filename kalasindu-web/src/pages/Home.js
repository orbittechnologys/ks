import React, { useState, useEffect } from "react";
import "../assets/styles/core.css";
import heroImg from "../assets/images/rsc.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Team from "../components/Team";
import Testimonial from "../components/Testimonial";
import bgImg from "../assets/images/why.png";
import AOS from "aos";
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
      <section className="hero-wrapper position-relative">
        <img src={heroImg} className="img-fluid w-100" alt="Hero Image" />
        <div className="hero-overlay d-flex align-items-center justify-content-around">
          <div
            className="display-5 p-4 text-white text-center fw-bolder"
            data-aos="fade-up"
            data-aos-duration="2800"
          >
            <FaFacebook />
            <br />
            <RiInstagramFill />
            <FaYoutube />
          </div>
          <div className="d-flex flex-column justify-content-end">
            <div>
              <h2
                className="display-4 p-3 text-white text-center fw-bolder"
                data-aos="fade-up"
                data-aos-duration="2800"
              >
                Parampara is like an umbilical cord that connects dancers to the
                beginnings of their art form.
                <br></br>-Poornima Gururaj
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section style={{ height: "45em", backgroundColor: "#E8E5E7" }}>
        <div className="d-flex justify-content-center align-items-center p-5 ">
          <h1 className="fw-bolder display-4">What's New?</h1>
        </div>

        {/* change based on client */}
        {/*<div className='d-flex justify-content-center align-items-center p-5'>
                    <p className='text-warning mb-5 fs-1 text-center fw-bold'>
                         We will be out with something super exciting soon.. 
                    </p> 
                </div>*/}

        <div className="d-flex justify-content-around align-item-center">
          <div
            className=""
            style={{ width: "32em", height: "28em", position: "relative" }}
          >
            <div>
              <img
                className="rounded-top img-fluid"
                src={Hcard1}
                style={{ width: "32em", height: "13.4375em" }}
              ></img>
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

                <div className="d-flex justify-content-start ">
                  <FaRegClock className="mt-1" />{" "}
                  <p className="ms-2">6:00 PM</p>
                </div>

                <div className="d-flex justify-content-start ">
                  <IoLocationOutline className="mt-1" />{" "}
                  <p className="ms-2">JSS auditorium, Jayanagar, Bangalore</p>
                </div>
                <div className="d-flex justify-content-between align-item-center">
                  <a
                    href="http://localhost:3000/events"
                    className="fw-bold"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    more info <GoArrowUpRight />
                  </a>
                  <p className="fw-bold">FREE</p>
                </div>
              </div>
            </div>
          </div>
          <div
            className=""
            style={{ width: "32em", height: "28em", position: "relative" }}
          >
            <div>
              <img
                className="rounded-top img-fluid"
                src={Hcard2}
                style={{ width: "32em", height: "13.4375em" }}
              ></img>
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

                <div className="d-flex justify-content-start ">
                  <FaRegClock className="mt-1" />{" "}
                  <p className="ms-2">6:00 PM</p>
                </div>

                <div className="d-flex justify-content-start ">
                  <IoLocationOutline className="mt-1" />{" "}
                  <p className="ms-2">JSS auditorium, Jayanagar, Bangalore</p>
                </div>
                <div className="d-flex justify-content-between align-item-center">
                  <a
                    href="http://localhost:3000/events"
                    className="fw-bold"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    more info <GoArrowUpRight />
                  </a>
                  <p className="fw-bold">FREE</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- why --> */}
      <section
        className="p-5"
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "rgba(36, 17, 10, 1)",
          height: "100vh",
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
                style={{ border: "none" }}
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
                      <p>
                        From a young age,students nare taught to embrace the
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
        style={{
          backgroundColor: "rgba(36, 17, 10, 1)",
          height: "100vh",
          paddingTop: "8.5em",
        }}
      >
        <div className="container p-3 align-middle">
          <h2
            className="text-center mt-4"
            style={{ color: "rgba(197, 158, 112, 1)" }}
          >
            Glimpse of Kalasindhu
          </h2>
          <div
            className="d-flex justify-content-center mt-5"
            data-aos="fade-up"
            data-aos-duration="1400"
          >
            <iframe
              width="1026"
              height="522"
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
        style={{ backgroundColor: "rgba(92, 61, 50, 1)", paddingTop: "8.5em" }}
      >
        <div class="container p-5 map d-flex justify-content-center">
          <div class="">
            <h2 class="text-center text-white">Come visit us</h2>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.610553407524!2d77.55541367472718!3d12.932733715729922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3e2615f2180b%3A0x36301a3a3787ae2a!2sKalasindhu%20Academy%20for%20Dance%20and%20Related%20Arts!5e0!3m2!1sen!2sin!4v1690896701490!5m2!1sen!2sin"
              width="600"
              height="450"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              className="text-center"
            ></iframe>

            {/* <div class="col-lg-4">
                            <div class="contact-wrapper p-4"
                                style={{ backgroundColor: " rgba(197, 158, 112, 1)", borderRadius: "18px" }}>
                                <h2 class="text-center ">Contact Us</h2>
                                <form action="#" method="post">
                                    <div class="form-group">
                                        <label class="mb-1 mt-1" for="name">Name</label>
                                        <input type="text" class="form-control" id="name" name="name" required />
                                    </div>
                                    <div class="form-group">
                                        <label class="mb-1 mt-1" for="email">Email</label>
                                        <input type="email" class="form-control" id="email" name="email" required />
                                    </div>
                                    <div class="form-group">
                                        <label class="mb-1 mt-1" for="phone">Phone Number</label>
                                        <input type="tel" class="form-control" id="phone" name="phone" required />
                                    </div>
                                    <div class="form-group">
                                        <label class="mb-1 mt-1" for="message">Message</label>
                                        <textarea class="form-control" id="message" name="message" rows="4"
                                            required></textarea>
                                    </div>
                                    <div class="d-flex justify-content-center mt-4">

                                        <button type="submit" class="btn btn-outline-light">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div> */}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Home;
