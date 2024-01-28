import React from 'react'
import Navbar from '../components/Navbar'
import eduImg1 from '../assets/images/edu-1.png'
import eduImg2 from '../assets/images/edu-2.png'
import eduImg3 from '../assets/images/edu-3.png'
import Footer from '../components/Footer'

function Education() {
    return (
        <div style={{ backgroundColor: '#E8E5E7'}}>
            <Navbar />
            <section >
                <div className='container'>
                    <div className='row mt-5'>
                        <div className='col-lg-6'>
                            <h1 className='text-dark fw-bolder display-5'>Education at Kalasindhu</h1>
                            <p className='fs-4 text-dark fw-bold'>
                                At Kalasindhu, a comprehensive and integrated approach to education is offered. Music and sankrit is taught along with dance, so students understand the lyrics and meaning of the items they perform.
                                The dedicated space, designed for all ages, sex ,skill ,fosters creativity in a serene ambiance.
                            </p>
                            <a className="btn btn-lg btn-dark rounded text-warning fw-bolder">Enquire</a>

                        </div>
                        <div className='col-lg-6 d-flex justify-content-center align-items-center'>
                            <img src={eduImg1} height={400} alt='Hero Image' />
                        </div>
                    </div>
                </div>
            </section>

            <section style={{ backgroundColor: '#000' }}>
                <div className='container'>
                    <div className='row mt-5 mb-4 p-5'>
                        <div className='col-lg-6 d-flex justify-content-between align-items-center'>
                            <img src={eduImg2} height={500}  alt='Hero Image' />

                        </div>
                        <div className='col-lg-6'>
                        <h1 className='text-white fw-bolder display-5'>Curriculum</h1>

                            <ol className='fs-4 fw-bold text-white'>
                                <li>The curriculum includes meticulous instruction in hand gestures, facial expressions, adavus, and a traditional Bharatanatyam repertoire.</li>
                                <li>Dance training goes beyond technique, incorporating flexibility and cardio fitness.</li>
                                <li>Music and Sanskrit are taught from basics along with what is needed for dance.</li>
                                <li>Advanced training includes rangapravesha, in-depth exploration of Tala and Abhinaya, and opportunities for composing and choreographing dance pieces.</li>
                            </ol>
                            <a className="btn btn-lg btn-warning rounded text-dark fw-bolder">Enquire</a>

                        </div>
                    </div>
                </div>
            </section>

            <section >
                <div className='container'>
                    <div className='row mt-5 mb-4'>
                        <div className='col-lg-6'>
                            <h1 className='text-dark fw-bolder display-5'>Added benefits</h1>
                            <ol className='fs-4 fw-bold'>
    <li>The curriculum includes meticulous instruction in hand gestures, facial expressions, adavus, and a traditional Bharatanatyam repertoire.</li>
    <li>Dance training goes beyond technique, incorporating flexibility and cardio fitness.</li>
    <li>Music and Sanskrit are taught from basics along with what is needed for dance.</li>
    <li>Advanced training includes rangapravesha, in-depth exploration of Tala and Abhinaya, and opportunities for composing and choreographing dance pieces.</li>
</ol>

                            <a className="btn btn-lg btn-dark rounded text-warning fw-bolder">Enquire</a>

                        </div>
                        <div className='col-lg-6 d-flex justify-content-center align-items-center'>
                            <img src={eduImg3} height={500} alt='Hero Image' />
                        </div>
                    </div>
                </div>
            </section>

            <section style={{ backgroundColor: '#003D1B' }}>
                <div className='container'>
                    <div className='row mt-5 p-5'> 
                        <div className='col-lg-12'>
                        <h1 className='text-white fw-bolder display-5'>Admissions and schedule</h1>

                           <p className='fs-4 text-white fw-bold'>
                           For beginners aged 7 and above, Kalasindhu provides a welcoming entry point. Enrollment is available in May, June, and October.
                           </p>
                           <p className='fs-4 text-white fw-bold'>
                           Classes are held on Mondays, Wednesdays,  from 5:00 to 8 pm COVERING 4 batches each focusing on different levels of learning.
                           </p>
                           <p className='fs-4 text-white fw-bold'>
                           New beginners batches will be conducted on the weekends. 
                           </p>
                            <a className="btn btn-lg btn-warning rounded text-dark fw-bolder">Enquire Now</a>

                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Education