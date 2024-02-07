import React, { useEffect } from "react";
import "../assets/styles/core.css";
import supImg from "../assets/images/Manthana.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
function Support() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Navbar />

      <section className='hero-wrapper position-relative' style={{height:'960px'}}>
        <img src={supImg} className='img-fluid w-100' alt='Hero Image'  />
        <div className='hero-overlay text-center d-flex flex-column justify-content-center align-items-center text-white'>
          <h3 style={{fontSize:'48px', fontFamily:'Oswald'}}data-aos="fade-down" data-aos-duration="2800">Support Us</h3>
          <a
                className="btn btn-lg  rounded  mt-4"
                style={{
                  width: "286px",
                  background: "#FCB541",
                  color: "black",
                  fontWeight:'600'
                }}
              >
              Learn how to support us
              </a>
        </div>
      </section>


      <section className='p-4 mt-5' style={{fontFamily:'Open Sans'}}>
        <div className="container p-4 mt-5 shadow-sm mb-5">
          <div
            className="text-center mt-3"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h3 className="fw-bolder">By sponsoring us</h3>
            <p className="text-center">
              Poornima Gururaja is an exponent of the Pandanallur/Tanjore School
              of dance, a disciple of Guru Smt. Narmada who trained under the
              legendary Guru Sri Kittappa Pillai of Tanjore.She is the founder
              and artistic director of the Pallavi School performing arts, based
              in Boston.She founded the Kalasindhu Academy of Dance and Related
              Arts in 2009.Poornima Gururaja holds an MBA from Brandeis
              University, USA and has worked as a marketing professional at
              Hewlett Packard.
            </p>
          </div>

          <div
            className="text-center mt-3"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h3 className="fw-bolder">By Donating</h3>
            <p>
              Poornima Gururaja is an exponent of the Pandanallur/Tanjore School
              of dance, a disciple of Guru Smt. Narmada who trained under the
              legendary Guru Sri Kittappa Pillai of Tanjore.She is the founder
              and artistic director of the Pallavi School performing arts, based
              in Boston.She founded the Kalasindhu Academy of Dance and Related
              Arts in 2009.Poornima Gururaja holds an MBA from Brandeis
              University, USA and has worked as a marketing professional at
              Hewlett Packard.
            </p>
          </div>

          <div
            className="text-center mt-3"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h3 className="fw-bolder">By Following us on social media </h3>
            <p>
              Poornima Gururaja is an exponent of the Pandanallur/Tanjore School
              of dance, a disciple of Guru Smt. Narmada who trained under the
              legendary Guru Sri Kittappa Pillai of Tanjore.She is the founder
              and artistic director of the Pallavi School performing arts, based
              in Boston.She founded the Kalasindhu Academy of Dance and Related
              Arts in 2009.Poornima Gururaja holds an MBA from Brandeis
              University, USA and has worked as a marketing professional at
              Hewlett Packard.
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-md-4 col-sm-6">
              <div
                className="social-icon text-center"
                data-aos="zoom-in"
                data-aos-duration="1000"
              >
                <i className="bi bi-facebook fs-1 text-primary"></i>
                <p>Facebook</p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div
                className="social-icon  text-center"
                data-aos="zoom-in"
                data-aos-duration="1400"
              >
                <i className="bi bi-instagram fs-1"></i>
                <p>Instagram</p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div
                className="social-icon  text-center text-danger"
                data-aos="zoom-in"
                data-aos-duration="1800"
              >
                <i className="bi bi-youtube fs-1"></i>
                <p>YouTube</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Support;
