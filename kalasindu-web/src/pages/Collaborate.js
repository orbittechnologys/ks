import React from 'react'
import Navbar from '../components/Navbar'
import colImg1 from '../assets/images/Collaboration.png'
import colImg2 from '../assets/images/collab.png'
import Footer from '../components/Footer'

function Collaborate() {
    return (
        <>
            <Navbar />
            <section className='hero-wrapper position-relative'>
                <img src={colImg1} className='img-fluid w-100' alt='Hero Image' />
                <div className='hero-overlay d-flex align-items-center justify-content-center'></div>
            </section>

            <section>
                <div style={{ backgroundColor: '#000' }}>
                    <div className='container'>
                        <div className='row p-5'>

                            <div className='col-lg-6 d-flex justify-content-between align-items-center'>
                                <img src={colImg2} height={400} alt='Hero Image' />
                            </div>
                            <div className='col-lg-6'>
                                <h1 className='text-white display-5 fw-bolder mt-5'>Kalasindhu is Looking for ....</h1>
                                <p className='text-white fs-4'>
                                    Dancers, muscicians, photographers and anyone else who is bursting with ideas and who would like to share and contribute to the creative space.
                                </p>
                                <a className="btn btn-md btn-warning rounded fw-bold">Let's Collaborate</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div style={{ backgroundColor: '#003D1B' }}>
                    <div className='container'>
                        <div className='row p-5'>

                            <div className='col-lg-6 d-flex justify-content-center align-items-center'>
                                <img src={colImg2} height={300} alt='Hero Image' />
                            </div>
                            <div className='col-lg-6'>
                                <h1 className='text-white display-5 fw-bolder mt-5'>Rent the space</h1>
                                <p className='text-white fs-4'>
                                    Dancers, muscicians, photographers and anyone else who is bursting with ideas and who would like to share and contribute to the creative space.
                                </p>
                                <a className="btn btn-md btn-warning rounded fw-bold">Let's Collaborate</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div style={{ backgroundColor: '#330A0A' }}>
                    <div className='container'>
                        <div className='row p-5'>
                            <div className='col-lg-6'>
                                <h1 className='text-white display-5 fw-bolder mt-5'>Showcase your art</h1>
                                <p className='text-white fs-4'>
                                    Dancers, muscicians, photographers and anyone else who is bursting with ideas and who would like to share and contribute to the creative space.                                     </p>
                                <a className="btn btn-md btn-warning rounded fw-bold">Let's Collaborate</a>
                            </div>
                            <div className='col-lg-6 d-flex justify-content-center align-items-center'>
                                <img src={colImg2} height={300} alt='Hero Image' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Collaborate