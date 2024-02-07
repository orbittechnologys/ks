import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import eduImg1 from "../assets/images/edu-1.png";
import eduImg2 from "../assets/images/edu-2.png";
import eduImg3 from "../assets/images/eduction1.png";
import Footer from "../components/Footer";
import "aos/dist/aos.css";
import AOS from "aos";

function Education() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <><div className="">
               <Navbar />

    </div>
<div className="">
    <div style={{ backgroundColor: "#E8E5E7", overflow: "hidden" }} >
           <div className="  text-center mt-5" >
            <div className="row">
              <div className="col-lg-6">
              <h1
              className="fw-bolder mt-5"
               data-aos="fade-down"
                 data-aos-easing="linear"
                 data-aos-duration="1500"
                 style={{ fontSize: "64px", color: "black" ,fontFamily:'Oswald'}}
               >
                 Education at Kalasindhu
               </h1>
               <p
                 className="text-dark mt-5"
                 style={{ fontSize: "20px" ,fontFamily:'Open Sans'}}
                 data-aos="fade-up"
                 data-aos-easing="linear"
                 data-aos-duration="1500"
               >
                 At Kalasindhu, a comprehensive and integrated approach to
                 education is offered. Music and sankrit is taught along with
                 dance, so students understand the lyrics and meaning of the
                 items they perform.
                 The dedicated space, designed for all ages, sex ,skill ,fosters
                 creativity in a serene ambiance.
               </p>
               <a
                 className="btn btn-lg btn-dark rounded fw-bolder mt-5"
                 style={{
                   width: "198px",
                   background: "black",
                   color: "#FCB541",
                 }}
               >
                 Enquire
               </a>
              </div>
              <div className="col-lg-6 mt-5 ">
              <img
                 src={eduImg1}
                //  height={528}
                 alt="Hero Image"
                 data-aos="fade-right"
                 data-aos-easing="linear"
                 data-aos-duration="1500"
                 className="img-fluid "
                 
               />
              </div>
            </div>

           </div>
         <div style={{ backgroundColor: "#080808" }}>
          <div className="row mt-5 mb-4 p-5">
          <div className="col-lg-6 text-center">
            <img
                src={eduImg2}
                height={550}
                alt="Hero Image"
                data-aos="fade-right"
                data-aos-easing="linear"
                data-aos-duration="1500"
                className="img-fluid"
              />
            </div>
            <div className="col-lg-6">
              <h1
                className="text-white fw-bolder "
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
                style={{ fontSize: "64px" ,fontFamily:'Oswald'}}
              >
                Curriculum
              </h1>

              <ol
                className="text-white"
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1500"
                style={{ fontSize: "20px", marginTop: "20px",fontFamily:'Open Sans' }}
              >
                <li className="mt-3">
                  The curriculum includes meticulous instruction in hand
                  gestures, facial expressions, adavus, and a traditional
                  Bharatanatyam repertoire.
                </li>
                <li  className="mt-3">
                  Dance training goes beyond technique, incorporating
                  flexibility and cardio fitness.
                </li>
                <li  className="mt-3">
                  Music and Sanskrit are taught from basics along with what is
                  needed for dance.
                </li>
                <li  className="mt-3">
                  Advanced training includes rangapravesha, in-depth exploration
                  of Tala and Abhinaya, and opportunities for composing and
                  choreographing dance pieces.
                </li>
              </ol>
              <a
                className="btn btn-lg rounded text-dark fw-bolder"
                style={{
                  width: "206px",
                  background: "#FCB541",
                  marginTop: "50px",
                }}
              >
                Enquire
              </a>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row mt-5 mb-4">
            <div className="col-lg-6">
              <h1
                className="fw-bolder mt-5"
                style={{ fontSize: "64px", color: "black",fontFamily:'Oswald' }}
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                Added benefits
              </h1>
              <ol
                className="mt-4"
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  fontFamily:'Open Sans'
                }}
                data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500"
              >
                <li>
                  The curriculum includes meticulous instruction in hand
                  gestures, facial expressions, adavus, and a traditional
                  Bharatanatyam repertoire.
                </li>
                <li className="mt-3">
                  Dance training goes beyond technique, incorporating
                  flexibility and cardio fitness.
                </li>
                <li className="mt-3">
                  Music and Sanskrit are taught from basics along with what is
                  needed for dance.
                </li>
                <li className="mt-3">
                  Advanced training includes rangapravesha, in-depth exploration
                  of Tala and Abhinaya, and opportunities for composing and
                  choreographing dance pieces.
                </li>
              </ol>

              <a
                className="btn btn-lg btn-dark rounded  fw-bolder mt-4"
                style={{ width: "198px", color: "#FCB541" }}
              >
                Enquire
              </a>
            </div>
            <div className="col-lg-6 d-flex justify-content-center align-items-center mt-5">
              <img src={eduImg3} height={550} alt="Hero Image" className="img-fluid" data-aos="fade-right" data-aos-easing="linear" data-aos-duration="1500"/>
            </div>
          </div>
        </div>
        <div style={{ backgroundColor: "#003D1B"}}>
         <div className="row mt-5 p-5">
            <div className="col-lg-12">
             <h1
                className="fw-bolder"
                style={{
                  color: "#E8E5E7",
                  fontSize: "64px",
                  fontWeight: "600",
                  fontFamily:'Oswald'
                }}
                data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500"
              >
                Admissions and schedule
              </h1>

              <p data-aos="fade-up" data-aos-easing="linear" data-aos-duration="2000"
                className="text-white mt-5"
                style={{ fontSize: "25px", fontWeight: "500",fontFamily:'Open Sans' }}
              >
                For beginners aged 7 and above, Kalasindhu provides a welcoming
                entry point. Enrollment is available in May, June, and October.
              </p>
              <p data-aos="fade-up" data-aos-easing="linear" data-aos-duration="2500"
                className=" text-white mt-3"
                style={{ fontSize: "25px", fontWeight: "500",fontFamily:'Open Sans' }}
              >
                Classes are held on Mondays, Wednesdays,  from 5:00 to 8 pm
                COVERING 4 batches each focusing on different levels of
                learning.
              </p>
              <p data-aos="fade-up" data-aos-easing="linear" data-aos-duration="3000"
                className=" text-white mt-3"
                style={{ fontSize: "25px", fontWeight: "500",fontFamily:'Open Sans' }}
              >
                New beginners batches will be conducted on the weekends.
              </p>
              <a
                className="btn btn-lg  rounded "
                style={{
                  width: "254px",
                  background: "#FCB541",
                  marginTop: "50px",
                  fontWeight:'800'
                }}
              >
                Enquire Now
              </a>
            </div>
          </div>
        </div>
          <Footer />

           </div>
</div>
    </>
    // <div style={{ backgroundColor: "#E8E5E7" }}>
    //   <Navbar />
    //   <section style={{ marginTop: "90px", height: "652px" }}>
    //     <div className="container ">
    //       <div className="mt-5 d-flex justify-content-between">
    //         <div className="col-lg-6 mt-5">
    //           <h1
    //             className="fw-bolder mt-4"
    //             data-aos="fade-down"
    //             data-aos-easing="linear"
    //             data-aos-duration="1500"
    //             style={{ fontSize: "64px", color: "black" ,fontFamily:'Oswald'}}
    //           >
    //             Education at Kalasindhu
    //           </h1>
    //           <p
    //             className="text-dark mt-5"
    //             style={{ fontSize: "20px" ,fontFamily:'Open Sans'}}
    //             data-aos="fade-up"
    //             data-aos-easing="linear"
    //             data-aos-duration="1500"
    //           >
    //             At Kalasindhu, a comprehensive and integrated approach to
    //             education is offered. Music and sankrit is taught along with
    //             dance, so students understand the lyrics and meaning of the
    //             items they perform. <br />
    //             <br />
    //             The dedicated space, designed for all ages, sex ,skill ,fosters
    //             creativity in a serene ambiance.
    //           </p>
    //           <a
    //             className="btn btn-lg btn-dark rounded fw-bolder mt-5"
    //             style={{
    //               width: "198px",
    //               background: "black",
    //               color: "#FCB541",
    //             }}
    //           >
    //             Enquire
    //           </a>
    //         </div>
    //         <div className="mt-5">
    //           <img
    //             src={eduImg1}
    //             height={528}
    //             alt="Hero Image"
    //             data-aos="fade-right"
    //             data-aos-easing="linear"
    //             data-aos-duration="1500"
    //           />
    //         </div>
    //       </div>
    //     </div>
    //   </section>

    //   <section style={{ backgroundColor: "#080808", height: "652px" }}>
    //     <div className="container">
    //       <div className="row mt-5 mb-4 p-5">
    //         <div className="col-lg-6 d-flex justify-content-between align-items-center">
    //           <img
    //             src={eduImg2}
    //             height={550}
    //             alt="Hero Image"
    //             data-aos="fade-right"
    //             data-aos-easing="linear"
    //             data-aos-duration="1500"
    //           />
    //         </div>
    //         <div className="col-lg-6">
    //           <h1
    //             className="text-white fw-bolder "
    //             data-aos="fade-down"
    //             data-aos-easing="linear"
    //             data-aos-duration="1500"
    //             style={{ fontSize: "64px" ,fontFamily:'Oswald'}}
    //           >
    //             Curriculum
    //           </h1>

    //           <ol
    //             className="text-white"
    //             data-aos="fade-up"
    //             data-aos-easing="linear"
    //             data-aos-duration="1500"
    //             style={{ fontSize: "20px", marginTop: "20px",fontFamily:'Open Sans' }}
    //           >
    //             <li>
    //               The curriculum includes meticulous instruction in hand
    //               gestures, facial expressions, adavus, and a traditional
    //               Bharatanatyam repertoire.
    //             </li>
    //             <li>
    //               Dance training goes beyond technique, incorporating
    //               flexibility and cardio fitness.
    //             </li>
    //             <li>
    //               Music and Sanskrit are taught from basics along with what is
    //               needed for dance.
    //             </li>
    //             <li>
    //               Advanced training includes rangapravesha, in-depth exploration
    //               of Tala and Abhinaya, and opportunities for composing and
    //               choreographing dance pieces.
    //             </li>
    //           </ol>
    //           <a
    //             className="btn btn-lg rounded text-dark fw-bolder"
    //             style={{
    //               width: "206px",
    //               background: "#FCB541",
    //               marginTop: "50px",
    //             }}
    //           >
    //             Enquire
    //           </a>
    //         </div>
    //       </div>
    //     </div>
    //   </section>

    //   <section style={{ height: "652px" }}>
    //     <div className="container">
    //       <div className="row mt-5 mb-4">
    //         <div className="col-lg-6">
    //           <h1
    //             className="fw-bolder mt-5"
    //             style={{ fontSize: "64px", color: "black",fontFamily:'Oswald' }}
    //             data-aos="fade-down"
    //             data-aos-easing="linear"
    //             data-aos-duration="1500"
    //           >
    //             Added benefits
    //           </h1>
    //           <ol
    //             className="mt-4"
    //             style={{
    //               fontSize: "20px",
    //               fontWeight: "600",
    //               fontFamily:'Open Sans'
    //             }}
    //             data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500"
    //           >
    //             <li>
    //               The curriculum includes meticulous instruction in hand
    //               gestures, facial expressions, adavus, and a traditional
    //               Bharatanatyam repertoire.
    //             </li>
    //             <li className="mt-3">
    //               Dance training goes beyond technique, incorporating
    //               flexibility and cardio fitness.
    //             </li>
    //             <li className="mt-3">
    //               Music and Sanskrit are taught from basics along with what is
    //               needed for dance.
    //             </li>
    //             <li className="mt-3">
    //               Advanced training includes rangapravesha, in-depth exploration
    //               of Tala and Abhinaya, and opportunities for composing and
    //               choreographing dance pieces.
    //             </li>
    //           </ol>

    //           <a
    //             className="btn btn-lg btn-dark rounded  fw-bolder mt-4"
    //             style={{ width: "198px", color: "#FCB541" }}
    //           >
    //             Enquire
    //           </a>
    //         </div>
    //         <div className="col-lg-6 d-flex justify-content-center align-items-center">
    //           <img src={eduImg3} height={550} alt="Hero Image" data-aos="fade-right" data-aos-easing="linear" data-aos-duration="1500"/>
    //         </div>
    //       </div>
    //     </div>
    //   </section>

    //   <section style={{ backgroundColor: "#003D1B", height: "652px" }}>
    //     <div className="container">
    //       <div className="row mt-5 p-5">
    //         <div className="col-lg-12">
    //           <h1
    //             className="fw-bolder"
    //             style={{
    //               color: "#E8E5E7",
    //               fontSize: "64px",
    //               fontWeight: "600",
    //               fontFamily:'Oswald'
    //             }}
    //             data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500"
    //           >
    //             Admissions and schedule
    //           </h1>

    //           <p data-aos="fade-up" data-aos-easing="linear" data-aos-duration="2000"
    //             className="text-white mt-5"
    //             style={{ fontSize: "25px", fontWeight: "500",fontFamily:'Open Sans' }}
    //           >
    //             For beginners aged 7 and above, Kalasindhu provides a welcoming
    //             entry point. Enrollment is available in May, June, and October.
    //           </p>
    //           <p data-aos="fade-up" data-aos-easing="linear" data-aos-duration="2500"
    //             className=" text-white mt-3"
    //             style={{ fontSize: "25px", fontWeight: "500",fontFamily:'Open Sans' }}
    //           >
    //             Classes are held on Mondays, Wednesdays,  from 5:00 to 8 pm
    //             COVERING 4 batches each focusing on different levels of
    //             learning.
    //           </p>
    //           <p data-aos="fade-up" data-aos-easing="linear" data-aos-duration="3000"
    //             className=" text-white mt-3"
    //             style={{ fontSize: "25px", fontWeight: "500",fontFamily:'Open Sans' }}
    //           >
    //             New beginners batches will be conducted on the weekends.
    //           </p>
    //           <a
    //             className="btn btn-lg  rounded "
    //             style={{
    //               width: "254px",
    //               background: "#FCB541",
    //               marginTop: "50px",
    //               fontWeight:'800'
    //             }}
    //           >
    //             Enquire Now
    //           </a>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    //   <Footer />
    // </div>
  );
}

export default Education;
