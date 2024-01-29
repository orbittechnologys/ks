import React, { useRef } from "react";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/core";
import "../assets/styles/core.css";
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import testi from "../assets/images/testimonial.png";

const Testimonial = () => {
  const splideRef = useRef(null);

  return (
    <section
      style={{
        backgroundColor: "rgba(19, 51, 17, 1)",
        height: "100vh",
        paddingTop: "8.5em",
      }}
    >
      <div className="row">
        <div className="col-lg-5">
          <div className="test-card-left mb-4 mt-4">
            <div className="p-4">
              <p
                className="fw-bolder fs-2"
                style={{ color: "rgba(148, 176, 116, 1)" }}
              >
                TESTIMONIALS
              </p>
              <p className="fs-1 text-white fw-bolder">
                What people have to say about Kalasindhu
              </p>
            </div>
            <img src={testi} className="img-fluid w-100" />
          </div>
        </div>
        <div className="col-lg-7">
          <Splide
            options={{
              type: "loop",
              perPage: 3,
              focus: "center",
            }}
            ref={splideRef}
          >
            <SplideSlide className="me-3">
              <div className="text-white test-card p-3 m-5 ">
                <span className="text-white custom-font mb-0 mt-0 display-1">
                  "
                </span>
                <h1 className="mt-0 mb-2">Life skills</h1>
                <p>
                  {" "}
                  Aside from teaching dance, I like Mam's emphasis on disciple
                  and life skills. I like how she encourages all children to
                  learn. Every year, we look forward to Navarasa Navaratri and
                  Niranthara Narmada in Kalasindhu. The annual day, which began
                  this year, adds to the appeal of seeing all of the children
                  perform on one stage. -Veena ( Parent)
                </p>
              </div>
            </SplideSlide>

            <SplideSlide className="me-3">
              <div className="text-white test-card p-3 m-5 ">
                <span className="text-white custom-font mb-0 mt-0 display-1">
                  "
                </span>
                <h1 className="mt-0 mb-2">Life skills</h1>
                <p>
                  {" "}
                  Aside from teaching dance, I like Mam's emphasis on disciple
                  and life skills. I like how she encourages all children to
                  learn. Every year, we look forward to Navarasa Navaratri and
                  Niranthara Narmada in Kalasindhu. The annual day, which began
                  this year, adds to the appeal of seeing all of the children
                  perform on one stage. -Veena ( Parent)
                </p>
              </div>
            </SplideSlide>

            <SplideSlide className="me-3">
              <div className="text-white test-card p-3 m-5 ">
                <span className="text-white custom-font mb-0 mt-0 display-1">
                  "
                </span>
                <h1 className="mt-0 mb-2">Life skills</h1>
                <p>
                  {" "}
                  Aside from teaching dance, I like Mam's emphasis on disciple
                  and life skills. I like how she encourages all children to
                  learn. Every year, we look forward to Navarasa Navaratri and
                  Niranthara Narmada in Kalasindhu. The annual day, which began
                  this year, adds to the appeal of seeing all of the children
                  perform on one stage. -Veena ( Parent)
                </p>
              </div>
            </SplideSlide>

            <SplideSlide className="me-3">
              <div className="text-white test-card p-3 m-5 ">
                <span className="text-white custom-font mb-0 mt-0 display-1">
                  "
                </span>
                <h1 className="mt-0 mb-2">Life skills</h1>
                <p>
                  {" "}
                  Aside from teaching dance, I like Mam's emphasis on disciple
                  and life skills. I like how she encourages all children to
                  learn. Every year, we look forward to Navarasa Navaratri and
                  Niranthara Narmada in Kalasindhu. The annual day, which began
                  this year, adds to the appeal of seeing all of the children
                  perform on one stage. -Veena ( Parent)
                </p>
              </div>
            </SplideSlide>

            <SplideSlide className="me-3">
              <div className="text-white test-card p-3 m-5 ">
                <span className="text-white custom-font mb-0 mt-0 display-1">
                  "
                </span>
                <h1 className="mt-0 mb-2">Life skills</h1>
                <p>
                  {" "}
                  Aside from teaching dance, I like Mam's emphasis on disciple
                  and life skills. I like how she encourages all children to
                  learn. Every year, we look forward to Navarasa Navaratri and
                  Niranthara Narmada in Kalasindhu. The annual day, which began
                  this year, adds to the appeal of seeing all of the children
                  perform on one stage. -Veena ( Parent)
                </p>
              </div>
            </SplideSlide>
          </Splide>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
