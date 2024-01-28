import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import CountdownCard from '../components/CountdownCard'
import '../assets/styles/core.css'
import eveImg from '../assets/images/Desktop - 7.png'
import eveImg2 from '../assets/images/Desktop - 6.png'
import eveImg3 from '../assets/images/Desktop - 5.png'
import eveImg4 from '../assets/images/desktop-4.png'
import Footer from '../components/Footer'
import AboutR from '../assets/images/AboutR.png'
import AboutR1 from '../assets/images/bg-f.png'
import { FaArrowRightLong } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import { FaRegClock } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { FaIndianRupeeSign } from "react-icons/fa6";
import 'bootstrap/dist/css/bootstrap.min.css';

function Events() {
     // Set your countdown values (days, hours, minutes, seconds)
  const countdownValues = {
    days: 28,
    hours: 12,
    minutes: 30,
    seconds: 50,
  };

  const [showCard, setShowCard] = useState(false);

  const handleButtonClick = () => {
    setShowCard(!showCard);
  };
  const backgroundImageStyle = {
    backgroundImage: `url(${AboutR1})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'Right',
    backdropFilter: 'blur(8px)',
    opacity: '0.7',
  };

    return (
        <>
            <div style={{ backgroundColor: 'rgb(0, 0, 0)' }}>
                <Navbar />
              <div className='bg-dark text-white' style={backgroundImageStyle}>
                <div className="p-5 d-flex justify-content-around ">
                {/* class left */}
                    <div >
                        <div>
                            <h1 className='font-weight-bold display-2'>Upcoming Events</h1>
                            <div className='d-flex mt-5'>
                                <h4 className='display-6'>05 <br/> sep</h4>
                                <h4 className='ms-5 display-6 mt-3'>Nirantara Narmada <FaArrowRightLong className='ms-3'/></h4>
                            </div>
                            <div className='d-flex mt-5'>
                                <h4 className='display-6'>20 <br/> sep</h4>
                                <h4 className='ms-5 display-6 mt-3' onClick={handleButtonClick}>Ganesh uttsav <FaArrowRightLong className='ms-3'/></h4>
                            </div>
                        </div>
                    </div>
                {/* class right*/}
                    <div>
                    <img src={AboutR} className="img-fluid" alt="About R" style={{maxWidth: "312px", maxHeight: "424px"}}></img>
                    </div>
                </div>
                {/* counter value*/}
                    <div>
                    <CountdownCard {...countdownValues}/>
                    </div>
              </div>

              {/* Card section */}
                {showCard && (
                <div className="card p-5 text-white bg-dark" style={{ width: '620px', height: '600px' }}>
                  <h3 className='d-flex justify-content-center align-items-center mt-4'>Events Details</h3>
                  <div className='d-flex-column justify-content-center align-items-center mt-3'>
                            <div className="d-flex justify-content-start ">
                            <SlCalender className="mt-1"/> <p className="ms-2">Sunday, 5th Sept, 2023</p> 
                            </div>

                            <div className="d-flex justify-content-start ">
                            <FaRegClock className="mt-1"/> <p className="ms-2">6:00 PM</p>
                            </div>

                            <div className="d-flex justify-content-start ">
                            <IoLocationOutline className="mt-1"/> <p className="ms-2">JSS auditorium, Jayanagar, Bangalore</p>
                            </div>

                            <div className="d-flex justify-content-start ">
                            <FaIndianRupeeSign className="mt-1"/> <p className="ms-2">Free</p>
                            </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur. Neque dictum risus commodo vehicula. Mattis suspendisse sed etiam in aliquam sit. Integer pharetra tristique cursus eu mauris et in purus ut. Urna erat nunc ullamcorper molestie ultrices eget.</p>
                    <button
                    style={{
                        width: '413px',
                        height: '60px',
                        backgroundColor: '#FCB541',
                        // color: '#ffffff', 
                        borderRadius: '10px', 
                        border: 'none',
                        fontSize: '16px',  
                        fontWeight: 'bold',
                        marginTop:'25px'
                    }}
                    variant="contained"
                    color="primary"
                    >
                    Join Whatsapp group for updates
                    </button>
                </div>
                )}  

              {/* Events baground */}
                <section className='hero-wrapper position-relative'>
                    <img src={eveImg} className='img-fluid w-100' alt='Hero Image'  />
                    <div className='hero-overlay d-flex align-items-center justify-content-center'></div>
                </section>
                <section className='hero-wrapper position-relative mb-4'>
                    <img src={eveImg2} className='img-fluid w-100' alt='Hero Image' />
                    <div className='hero-overlay d-flex align-items-center justify-content-center'></div>
                </section>
                <section className='hero-wrapper position-relative mt-4'>
                    <img src={eveImg3} className='img-fluid w-100' alt='Hero Image' />
                    <div className='hero-overlay d-flex align-items-center justify-content-center'></div>
                </section>
                <section>
                    <div style={{ backgroundColor: '#330A0A' }}>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-lg-6'>
                                    <h1 className='text-white display-5 fw-bolder mt-5'>Workshops and other events</h1>
                                    <p className='text-white fs-4'>
                                        In memory of her beloved guru Narmada ,<span>Nirantara narmada</span> came into existence Lorem ipsum dolor sit amet consectetur. Neque dictum risus commodo vehicula. Mattis suspendisse sed etiam in aliquam sit. Integer pharetra tristique cursus eu mauris et in purus ut.
                                    </p>
                                    <a className="btn btn-md btn-warning rounded">Connect with us</a>
                                </div>
                                <div className='col-lg-6 d-flex justify-content-center align-items-center'>
                                    <img src={eveImg4} height={500} alt='Hero Image'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>

        </>

    )
}

export default Events