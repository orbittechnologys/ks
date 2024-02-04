import React, { useEffect } from "react";
import "../assets/styles/core.css";
import abtImg from "../assets/images/abt2.png";
import CountUp from "react-countup";
import AOS from "aos";
import "aos/dist/aos.css";

function AboutDescr() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <section className="abt-wrapper ">
        <img src={abtImg} alt="Hero Image" className="img-fluid w-100" />
        <div className="abt-overlay">
          <h1
            className="text-center font-weight-bold "
            style={{ marginTop: "80px", fontSize: "48px",fontFamily:'Oswald' }}
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="2500"
          >
            About Kalasindhu
          </h1>
          <p
            style={{ fontSize: "18px", padding: "55px", lineHeight: "2" ,fontFamily:'Open Sans'}}
            className="text-center text-white"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            Kalasindhu, the esteemed Academy of Dance and Related Arts, is
            passionately committed to the preservation and promotion of Indian
            arts and culture. Nestled in the vibrant city of Banashankari,
            Bangalore, India, this renowned institution serves as a beacon for
            artistic excellence. <br/>
            At Kalasindhu, a comprehensive and integrated
            approach to education is offered, encompassing the rich tapestry of
            classical arts, including dance, music, visual art, and Sanskrit.
            However, it is dance that takes center stage, receiving the utmost
            attention and focus. <br/>
            Within the premises of Kalasindhu, a sprawling
            expanse has been dedicated to cultivating an environment that
            nurtures creativity, catering to individuals of all ages, be it
            children or adults. The space is thoughtfully designed, encompassing
            a serene ambiance that stimulates the artistic spirit.
          </p>
        </div>
      </section>

      <section
        className="stats-section p-5 "
        style={{
          background: "#330A0A",
          borderTopLeftRadius: "40px",
          borderTopRightRadius: "40px",
          color: "#C59E70",
        }}
      >
        <div className="container">
          <div className="row">
            <div
              className="col-md-3"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              <div className="stat-item text-center fs-2">
                <CountUp end={150} duration={5.5} /> +<p>Students</p>
              </div>
            </div>
            <div
              className="col-md-3"
              data-aos="zoom-in"
              data-aos-duration="2400"
            >
              <div className="stat-item text-center fs-2">
                <CountUp end={300} duration={5.5} /> +<p>Performances</p>
              </div>
            </div>
            <div
              className="col-md-3"
              data-aos="zoom-in"
              data-aos-duration="1800"
            >
              <div className="stat-item text-center fs-2">
                <CountUp end={30} duration={5.5} /> +<p>Arangetrums</p>
              </div>
            </div>
            <div
              className="col-md-3"
              data-aos="zoom-in"
              data-aos-duration="2200"
            >
              <div className="stat-item text-center fs-2">
                <CountUp end={20} duration={3.5} /> +<p>Productions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div
          class="abt-desc text-center p-5 "
          style={{ background: "#330A0A", height: "350px", color: "#C59E70" }}
        >
          <h2
            class="fw-bolder"
            data-aos="fade-down"
            data-aos-duration="2700"
            style={{ fontSize: "48px",fontFamily:'Oswald' }}
          >
            Awards
          </h2>
          <p
            style={{ fontWeight: 200, alignItems:'center',padding:'40px', fontSize:'16px',fontFamily:'Open Sans' }}
            data-aos="fade-left"
            data-aos-duration="1700"
          >
            Poornima Gururaja, a highly acclaimed dance artist, has received
            several prestigious awards and recognitions throughout her
            illustrious career. Some of these include the Natya Kala Koushal
            from Sanatana Kalakshetra, Kempegowda Award from Bruhat Bengaluru
            Mahanagara Palike,  Puttashree Award, Nartana Nipuna Award from
            Karnataka Nrutyakala Parishad, and Natya Rathna from Nrutyollasa
            Rochester, among many others. In addition to her accolades, Poornima
            Gururaja holds prominent professional affiliations. She serves as
            the Secretary for Karnataka Nritya Kala Parishad, plays the vital
            role of Festival Coordinator for Delhi INternational arts festival,
            and currently holds the esteemed position of Chairperson of the
            Textbook Committee for dance books in Karnataka. Her involvement in
            these influential roles further underscores her commitment to the
            promotion and preservation of dance.
          </p>
        </div>
      </section>
    </>
  );
}

export default AboutDescr;
