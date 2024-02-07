import React, { useRef } from "react";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/core";
import "../assets/styles/core.css";
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import t1 from "../assets/images/t1.png";
import t2 from "../assets/images/t2.png";
import t3 from "../assets/images/t3.png";
import t4 from "../assets/images/t4.png";
import t5 from "../assets/images/t5.png";
import t6 from "../assets/images/t6.png";
import t7 from "../assets/images/t7.png";

const Team = () => {
  const splideRef = useRef(null);

  return (
    <section className="container-fluid" style={{ backgroundColor: "rgb(0, 0, 0)" }}>
      <div className="container p-5">
        <h2
          className="text-center custom-text mt-4 mb-4"
          style={{ color: "rgba(197, 158, 112, 1)", fontFamily:'Oswald', fontSize:'48px' }}
        >
        Glimse of Kalasindhu
        </h2>
        <Splide
          options={{
            type: "loop",
            drag: "free",
            focus: "center",
            perPage: 3,
            rewind: true,
            autoplay: true, // Enable continuous auto-scrolling
            interval: 2000, // Set the interval time in milliseconds (e.g., 3000ms = 3 seconds)
          }}
          ref={splideRef}
        >
          <SplideSlide className="me-3 mb-4 ml-5">
            <img
              src={t1}
              alt="Slide 1"
              height="250"
              style={{ borderRadius: "16px" }}
            />
            <figcaption
              className="figcaption text-white fw-bolder text-bold pb-3 ml-3"
              style={{ fontSize: "26px", background: "none", marginLeft:'20px' }}
            >
              Nagalakshmi
              <p className="mb-0" style={{ fontSize: "16px" }}>
                Sanskrit Teacher
              </p>
            </figcaption>
            <div
              className="small-desc text-dark mt-0 mb-0 px-4 py-5 "
              style={{ transition: "all 1s ease-out" }}
            >
              <h4>Dr. Nagalakshmi </h4>
              <p>
                Dr. Nagalakshmi S is a highly accomplished individual with an
                M.A. and Ph.D. in Sanskrit. Currently serving as an assistant
                professor at CHRIST (Deemed to be University), she possesses a
                commendable 16 years of teaching experience. Dr. Nagalakshmi has
                actively participated and ...
              </p>
              <div className="text-center mt-0 mb-0">
                <a
                  href="#"
                  style={{ cursor: "pointer" }}
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal7"
                  className="text-decoration-none text-center text-dark fw-bolder"
                >
                  Know more
                </a>
              </div>
            </div>
          </SplideSlide>

          <SplideSlide className="me-3 mb-4 ml-5">
            <img
              src={t2}
              alt="Slide 1"
              height="250"
              style={{ borderRadius: "16px" }}
            />
            <figcaption
              className="figcaption text-white fw-bolder text-bold pb-3 ml-3"
              style={{ fontSize: "26px", background: "none", marginLeft:'20px' }}
            >
              Uday kumar
              <p className="mb-0" style={{ fontSize: "16px" }}>
                Assistant faculty
              </p>
            </figcaption>
            <div
              className="small-desc text-dark mt-0 mb-0 px-4 py-5 "
              style={{ transition: "all 1s ease-out" }}
            >
              <h4>Uday kumar </h4>
              <p>
                Chi Udaykumar P is a seasoned dance teacher and performer who
                has been an assistant faculty at Kalasindhu Academy for the past
                12 years. He trained under esteemed teachers like Smt Aarthi
                Suresh, Smt Sandhya and Shri Kiran Sumbramanyam, and Shri P
                Praveen Kumar, completing his ....
              </p>
              <div className="text-center mt-0 mb-0">
                <a
                  href="#"
                  style={{ cursor: "pointer" }}
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal2"
                  className="text-decoration-none text-center text-dark fw-bolder"
                >
                  Know more
                </a>
              </div>
            </div>
          </SplideSlide>

          <SplideSlide className="me-3 mb-4 ml-5">
            <img
              src={t7}
              alt="Slide 1"
              height="250"
              style={{ borderRadius: "16px" }}
            />
            <figcaption
              className="figcaption text-white fw-bolder text-bold pb-3 ml-3"
              style={{ fontSize: "26px", background: "none",marginLeft:'20px' }}
            >
              Deepthi S
              <p className="mb-0" style={{ fontSize: "16px" }}>
                Assistant faculty
              </p>
            </figcaption>
            <div
              className="small-desc text-dark mt-0 mb-0 px-4 py-5 "
              style={{ transition: "all 1s ease-out" }}
            >
              <h4>Deepthi S </h4>
              <p>
                She is a passionate Bharatanatyam dancer with over 20 years of
                experience. Under the guidance of Guru Smt Poornima Gururaja at
                Kalasindhu Academy, she has mastered the intricate movements and
                expressive storytelling of Bharatanatyam. With a Vidwat
                certification in ....
              </p>
              <div className="text-center mt-0 mb-0">
                <a
                  href="#"
                  style={{ cursor: "pointer" }}
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal3"
                  className="text-decoration-none text-center text-dark fw-bolder"
                >
                  Know more
                </a>
              </div>
            </div>
          </SplideSlide>

          <SplideSlide className="me-3 mb-4 ml-5">
            <img
              src={t3}
              alt="Slide 1"
              height="250"
              style={{ borderRadius: "16px" }}
            />
            <figcaption
              className="figcaption text-white fw-bolder text-bold pb-3 ml-3"
              style={{ fontSize: "26px", background: "none",marginLeft:'20px' }}
            >
              Lavanthi S
              <p className="mb-0" style={{ fontSize: "16px" }}>
                Assistant faculty
              </p>
            </figcaption>
            <div
              className="small-desc text-dark mt-0 mb-0 px-4 py-5 "
              style={{ transition: "all 1s ease-out" }}
            >
              <h4>Lavanthi S </h4>
              <p>
                She is a skilled choreographer, performer, and theatre artist
                trained under Poornima Gururaja at Kalasindhu for 16 years. With
                accomplishments including clearing state examswith distinctions 
                receiving the CCRT Scholarship, and performing on national
                platforms, she brings with...
              </p>
              <div className="text-center mt-0 mb-0">
                <a
                  href="#"
                  style={{ cursor: "pointer" }}
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal4"
                  className="text-decoration-none text-center text-dark fw-bolder"
                >
                  Know more
                </a>
              </div>
            </div>
          </SplideSlide>

          <SplideSlide className="me-3 mb-4 ml-5">
            <img
              src={t4}
              alt="Slide 1"
              height="250"
              style={{ borderRadius: "16px" }}
            />
            <figcaption
              className="figcaption text-white fw-bolder text-bold pb-3 ml-3"
              style={{ fontSize: "26px", background: "none",marginLeft:'20px' }}
            >
              Anagha kumar
              <p className="mb-0" style={{ fontSize: "16px" }}>
                Assistant faculty
              </p>
            </figcaption>
            <div
              className="small-desc text-dark mt-0 mb-0 px-4 py-5 "
              style={{ transition: "all 1s ease-out" }}
            >
              <h4>Anagha kumar</h4>
              <p>
                Anagha Kumar is currently pursuing a BSc in Yogic Sciences.
                Under the guidance of Guru Poornima Gururaj for 12 years, she
                has honed her skills in Bharatanatyam. Anagha has participated
                in workshops, performed at various venues, and is now a faculty
                member at Kalasindhu. She finds...
              </p>
              <div className="text-center mt-0 mb-0">
                <a
                  href="#"
                  style={{ cursor: "pointer" }}
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal5"
                  className="text-decoration-none text-center text-dark fw-bolder"
                >
                  Know more
                </a>
              </div>
            </div>
          </SplideSlide>

          <SplideSlide className="me-3 mb-4 ml-5">
            <img
              src={t5}
              alt="Slide 1"
              height="250"
              style={{ borderRadius: "16px" }}
            />
            <figcaption
              className="figcaption text-white fw-bolder text-bold pb-3 ml-3"
              style={{ fontSize: "26px", background: "none",marginLeft:'20px' }}
            >
              Samvitha
              <p className="mb-0" style={{ fontSize: "16px" }}>
                Assistant faculty
              </p>
            </figcaption>
            <div
              className="small-desc text-dark mt-0 mb-0 px-4 py-5 "
              style={{ transition: "all 1s ease-out" }}
            >
              <h4>Samvitha </h4>
              <p>
                Samvitha Dev is a dedicated and passionate Bharatanatyam dancer,
                with a journey spanning 10 years. Having completed her
                Rangapravesha in 2022 under the guidance of her Guru, she has
                now embarked on the fulfilling path of teaching dance at
                Kalasindhu. With enthusiasm and ...
              </p>
              <div className="text-center mt-0 mb-0">
                <a
                  href="#"
                  style={{ cursor: "pointer" }}
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal6"
                  className="text-decoration-none text-center text-dark fw-bolder"
                >
                  Know more
                </a>
              </div>
            </div>
          </SplideSlide>

          <SplideSlide className="me-3 mb-4 ml-5">
            <img
              src={t6}
              alt="Slide 1"
              height="250"
              style={{ borderRadius: "16px" }}
            />
            <figcaption
              className="figcaption text-white fw-bolder text-bold pb-3 ml-3"
              style={{ fontSize: "26px", background: "none",marginLeft:'20px' }}
            >
              Gowri
              <p className="mb-0" style={{ fontSize: "16px" }}>
                Music Teacher
              </p>
            </figcaption>
            <div
              className="small-desc text-dark mt-0 mb-0 px-4 py-5 "
              style={{ transition: "all 1s ease-out" }}
            >
              <h4>Gowri</h4>
              <p>
                Gowri Vishwanath is a highly experienced music faculty with 40
                years of teaching experience. She started learning Carnatic
                music at the age of 4 from her father and went on to study under
                renowned musicians like Narasimha Murthy, Jayashree
                Parthasarathy, and ......
              </p>
              <div className="text-center mt-0 mb-0">
                <a
                  href="#"
                  style={{ cursor: "pointer" }}
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  className="text-decoration-none text-center text-dark fw-bolder"
                >
                  Know more
                </a>
              </div>
            </div>
          </SplideSlide>
        </Splide>
      </div>
      {/* <!-- Modal1 --> */}
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        >
        <div class="modal-dialog">
          <div
            class="modal-content"
            style={{ backgroundColor: "rgba(197, 158, 112, 1)" }}
          >
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Our Team
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <h4>Gowri Vishwanath</h4>
              <p>
                Gowri Vishwanath is a highly experienced music faculty with 40
                years of teaching experience. She started learning Carnatic
                music at the age of 4 from her father and went on to study under
                renowned musicians like Narasimha Murthy, Jayashree
                Parthasarathy.
              </p>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-sm btn-dark"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Modal2 --> */}
      <div
        class="modal fade"
        id="exampleModal2"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div
            class="modal-content"
            style={{ backgroundColor: "rgba(197, 158, 112, 1)" }}
          >
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Our Team
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <h4>Uday kumar </h4>
              <p>
              Chi Udaykumar P is a seasoned dance teacher and performer who has been an assistant faculty at Kalasindhu Academy for the past 12 years. He trained under esteemed teachers like Smt Aarthi Suresh, Smt Sandhya and Shri Kiran Sumbramanyam, and Shri P Praveen Kumar
              </p>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-sm btn-dark"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Modal3 --> */}
      <div
        class="modal fade"
        id="exampleModal3"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div
            class="modal-content"
            style={{ backgroundColor: "rgba(197, 158, 112, 1)" }}
          >
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Our Team
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <h4>Deepthi S</h4>
              <p>
              She is a passionate Bharatanatyam dancer with over 20 years of experience. Under the guidance of Guru Smt Poornima Gururaja at Kalasindhu Academy, she has mastered the intricate movements and expressive storytelling of Bharatanatyam.
              </p>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-sm btn-dark"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Modal4 --> */}
      <div
        class="modal fade"
        id="exampleModal4"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div
            class="modal-content"
            style={{ backgroundColor: "rgba(197, 158, 112, 1)" }}
          >
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Our Team
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <h4>Lavanthi S </h4>
              <p>
              She is a skilled choreographer, performer, and theatre artist
              trained under Poornima Gururaja at Kalasindhu for 16 years. With
              accomplishments including clearing state examswith distinctions 
              receiving the CCRT Scholarship, and performing on national
              platforms
              </p>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-sm btn-dark"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Modal5 --> */}
      <div
        class="modal fade"
        id="exampleModal5"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div
            class="modal-content"
            style={{ backgroundColor: "rgba(197, 158, 112, 1)" }}
          >
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Our Team
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <h4>Anagha kumar</h4>
              <p>
              Anagha Kumar is currently pursuing a BSc in Yogic Sciences.
              Under the guidance of Guru Poornima Gururaj for 12 years, she
              has honed her skills in Bharatanatyam. Anagha has participated
              in workshops, performed at various venues, and is now a faculty
              member at Kalasindhu
              </p>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-sm btn-dark"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Modal6 --> */}
      <div
        class="modal fade"
        id="exampleModal6"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div
            class="modal-content"
            style={{ backgroundColor: "rgba(197, 158, 112, 1)" }}
          >
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Our Team
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <h4>Samvitha</h4>
              <p>
              Samvitha Dev is a dedicated and passionate Bharatanatyam dancer,
              with a journey spanning 10 years. Having completed her
              Rangapravesha in 2022 under the guidance of her Guru, she has
              now embarked on the fulfilling path of teaching dance at
              Kalasindhu
              </p>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-sm btn-dark"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Modal7 --> */}
      <div
        class="modal fade"
        id="exampleModal7"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div
            class="modal-content"
            style={{ backgroundColor: "rgba(197, 158, 112, 1)" }}
          >
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Our Team
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <h4>Dr. Nagalakshmi</h4>
              <p>
              Dr. Nagalakshmi S is a highly accomplished individual with an
              M.A. and Ph.D. in Sanskrit. Currently serving as an assistant
              professor at CHRIST (Deemed to be University), she possesses a
              commendable 16 years of teaching experience
              </p>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-sm btn-dark"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
