import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import CountdownCard from '../components/CountdownCard'
import '../assets/styles/core.css'
import EventsG1 from '../assets/images/eventsImage1.png'
import EventsG2 from '../assets/images/EventsImage2.png'
import eveImg from '../assets/images/Events1.png'
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

  const sectionStyle = {
    position: 'relative',
    textAlign: 'center',
    height: '652px',
  };

  const imgStyle = {
    width: '100%',
    height: '652px',
  };

  const contentStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontSize:'30px',
    color:'white'
  };
    return (
        <>
            <div style={{ backgroundColor: 'rgb(0, 0, 0)' }}>
                <Navbar />
              <div className='bg-dark text-white mt-5' style={backgroundImageStyle}>
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
            <div className='d-flex justify-content-end'>
                <div className="card p-5 text-white bg-dark " style={{ width: '620px', height: '600px' }}>
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
            </div>
                )}  

              {/* Events baground */}

                <div style={sectionStyle}>
                    <img src={eveImg} alt="Your Image Description" style={imgStyle} />
                    <div style={contentStyle}>
                        <h1 className='display-1 mb-5' style={{fontWeight:'700'}}>Festivals of Kalasindhu</h1>
                        <p>Lorem ipsum dolor sit amet consectetur. Odio elementum dignissim purus maecenas bibendum urna viverra odio. Amet id felis condimentum eget fringilla tempor et nunc ipsum..</p>
                    </div>
                </div>

                {/* <section className='hero-wrapper position-relative mb-4'>
                    <img src={eveImg2} className='img-fluid w-100' alt='Hero Image' />
                    <div className='hero-overlay d-flex align-items-center justify-content-center'></div>
                </section> */}
                <div style={{display:'flex', flexDirection:'column', justifyContent:'end', alignItems:'end', color:'#94B074',background:'#003D1B', width:'100%'}}>
                <h1 style={{fontSize:'80px', marginRight:'70px', marginTop:'20px'}}>Navarasa Navaratri</h1>
                </div>
                
                <div className='d-flex justify-content-between' style={{backgroundColor:'#003D1B'}}>
                    <div>
                        <section style={{position:'relative', width:'100%', overflow:'hidden'}}>
                            <div className='scroll text1' >
                                <div style={{color:'#FCB541', fontSize:'5em', background:'#003D1B', whiteSpace:'nowrap', fontWeight:'900', animation:'animate 40s linear infinite', width:'250px', height:'600px'}}>
                                <marquee  style={{height:'700px',width:'800px', transform:'rotate(-90deg) translateY(50px) translateX(-10px)'}}>
                                Navaratri <span>Navarasa</span> Navaratri <span>Navarasa</span> Navaratri <span>Navarasa</span> Navaratri <span>Navarasa</span> Navaratri <span>Navarasa</span> <span>Navarasa</span> Navaratri <span>Navarasa</span> Navaratri
                                </marquee>
                                </div>
                            </div>
                        </section>
                    </div>    
                        <div className='text-light' style={{width:'512px', height:'408px', fontFamily:'serif'}}>
                            <div style={{marginBottom:'50px'}}>
                            <h3>Why we celebrate ?</h3>
                            <p>Lorem ipsum dolor sit amet consectetur. Neque dictum risus commodo vehicula. Mattis suspendisse sed etiam in aliquam sit. Integer pharetra tristique cursus eu mauris et in purus ut. </p>
                            </div>
                            <div style={{marginBottom:'50px'}}>
                            <h3>How we celebrate ?</h3>
                            <p>Lorem ipsum dolor sit amet consectetur. Neque dictum risus commodo vehicula. Mattis suspendisse sed etiam in aliquam sit. Integer pharetra tristique cursus eu mauris et in purus ut. </p>
                            </div>
                            <div style={{marginBottom:'50px'}}>
                            <h3>When we celebrate ?</h3>
                            <p>Lorem ipsum dolor sit amet consectetur. Neque dictum risus commodo vehicula. Mattis suspendisse sed etiam in aliquam sit. Integer pharetra tristique cursus eu mauris et in purus ut. </p>
                            </div>
                        </div>

                        <div>
                            <div>
                                <img src={EventsG1} style={{height:'600px'}}/>
                            </div>
                        </div>
                    
                </div>

                {/* <section className='hero-wrapper position-relative mt-4'>
                    <img src={eveImg3} className='img-fluid w-100' alt='Hero Image' />
                    <div className='hero-overlay d-flex align-items-center justify-content-center'></div>
                </section> */}

                <div className='d-flex justify-content-between' style={{height:'650px', background:'#003D1B'}}>

                    <div>
                        <img src={EventsG2} style={{height:'400px'}}/>
                    </div>

                    <div style={{width:'799px', height:'152px'}}>
                        <h1 style={{fontSize:'80px', color:'#94B074'}}>Navarasa Navaratri</h1>
                        <p style={{fontSize:'22px', color:'wheat', marginTop:'50px'}}>In memory of her beloved guru Narmada , <span style={{color:'#FFBC11'}}> Nirantara narmada</span>  came into existence Lorem ipsum dolor sit amet consectetur. Neque dictum risus commodo vehicula. Mattis suspendisse sed etiam in aliquam sit. Integer pharetra tristique cursus eu mauris et in purus ut.
                        </p>
                    </div>

                    <section style={{position:'relative', width:'20%', overflow:'hidden'}}>
                            <div className='scroll text1' >
                                <div style={{color:'#FCB541', fontSize:'5em', background:'#003D1B', whiteSpace:'nowrap', fontWeight:'900', animation:'animate 40s linear infinite', width:'250px', height:'600px'}}>
                                <marquee  style={{height:'700px',width:'700px', transform:'rotate(90deg) translateY(450px) translateX(-10px)'}}>
                                Navaratri <span>Navarasa</span> Navaratri <span>Navarasa</span> Navaratri <span>Navarasa</span> Navaratri <span>Navarasa</span> Navaratri <span>Navarasa</span> <span>Navarasa</span> Navaratri <span>Navarasa</span> Navaratri
                                </marquee>
                                </div>
                            </div>
                        </section>

                </div>

                <section>
                    <div style={{ backgroundColor: '#330A0A' }}>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-lg-6'>
                                    <h1 className='text-white display-5 fw-bolder mt-5'>Workshops and other events</h1>
                                    <p className='text-white fs-4 mt-4'>
                                        In memory of her beloved guru Narmada ,<span>Nirantara narmada</span> came into existence Lorem ipsum dolor sit amet consectetur. Neque dictum risus commodo vehicula. Mattis suspendisse sed etiam in aliquam sit. Integer pharetra tristique cursus eu mauris et in purus ut.
                                    </p>
                                    <a className="btn btn-md rounded" style={{width:'248px', height:'60px', background:'#FCB541', alignItems:'center', fontSize:'20px', marginTop:'20px', fontWeight:'700'}}>Connect with us</a>
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