import React from 'react';
import abt from "../assets/images/abt.png";
// import '../assets/styles/core.css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import abtImg from '../assets/images/abt2.png'

const AboutSlider = () => {
    const splideOptions = {
        direction: 'ttb', // Vertical direction
        height: '500px',
        width:'100%', // Set the height of the slider
        wheel: true,
        arrows: false // Enable mouse wheel scrolling
    };

    return (
        <>
            <section className="abtHero-wrapper mt-0">
                <Splide options={splideOptions} ref={(splide) => (window.splide = splide)}>
                    <SplideSlide>
                        <div className="image-overlay">
                            <img src={abt} alt="" className="img-fluid mt-0 w-100" />
                            <h1 className="choreographer-text">FOUNDER - DIRECTOR</h1>
                        </div>
                        <div className="container">
                            <div className="text-center mt-3 mb-0">
                                <h3 className="fw-bolder">Poornima Gururaja</h3>
                                <p>
                                    Poornima Gururaja is an exponent of the Pandanallur/Tanjore School of dance, a disciple of Guru
                                    Smt. Narmada who trained under the legendary Guru Sri Kittappa Pillai of Tanjore. She is the
                                    founder and artistic director of the Pallavi School performing arts, based in Boston. She founded
                                    the Kalasindhu Academy of Dance and Related Arts in 2009. Poornima Gururaja holds an MBA from
                                    Brandeis University, USA and has worked as a marketing professional at Hewlett Packard.
                                </p>
                            </div>
                        </div>
                    </SplideSlide>

                    <SplideSlide>
                        <div class="image-overlay">
                            <img src={abt} alt="" srcset="" class="img-fluid mt-0 w-100" />
                            <h1 class="choreographer-text">TEACHER</h1>
                        </div>
                        <div class="container">
                            <div class="text-center mt-3 mb-0">
                                <h3 class="fw-bolder">Poornima Gururaja</h3>
                                <p>Poornima Gururaja is an exponent of the Pandanallur/Tanjore School of dance, a
                                    disciple of Guru
                                    Smt. Narmada who trained under the legendary Guru Sri Kittappa Pillai of
                                    Tanjore. She is the
                                    founder and artistic director of the Pallavi School performing arts, based in
                                    Boston. She
                                    founded
                                    the Kalasindhu Academy of Dance and Related Arts in 2009. Poornima Gururaja
                                    holds an MBA from
                                    Brandeis University, USA and has worked as a marketing professional at Hewlett
                                    Packard.
                                </p>
                            </div>
                        </div>
                    </SplideSlide>

                    <SplideSlide>
                        <div class="image-overlay">
                            <img src={abt} alt="" srcset="" class="img-fluid mt-0 w-100" />
                            <h1 class="choreographer-text">CHOREOGRAHER</h1>
                        </div>
                        <div class="container">
                            <div class="text-center mt-3">
                                <h3 class="fw-bolder">Poornima Gururaja</h3>
                                <p>Poornima Gururaja is an exponent of the Pandanallur/Tanjore School of dance, a
                                    disciple of Guru
                                    Smt. Narmada who trained under the legendary Guru Sri Kittappa Pillai of
                                    Tanjore. She is the
                                    founder and artistic director of the Pallavi School performing arts, based in
                                    Boston. She
                                    founded
                                    the Kalasindhu Academy of Dance and Related Arts in 2009. Poornima Gururaja
                                    holds an MBA from
                                    Brandeis University, USA and has worked as a marketing professional at Hewlett
                                    Packard.
                                </p>
                            </div>
                        </div>
                    </SplideSlide>

                    <SplideSlide>
                        <div class="image-overlay">
                            <img src={abt} alt="" srcset="" class="img-fluid mt-0 w-100" />
                            <h1 class="choreographer-text">NATTUVANAR</h1>
                        </div>
                        <div class="container">
                            <div class="text-center mt-3">
                                <h3 class="fw-bolder">Poornima Gururaja</h3>
                                <p>Poornima Gururaja is an exponent of the Pandanallur/Tanjore School of dance, a
                                    disciple of Guru
                                    Smt. Narmada who trained under the legendary Guru Sri Kittappa Pillai of
                                    Tanjore. She is the
                                    founder and artistic director of the Pallavi School performing arts, based in
                                    Boston. She
                                    founded
                                    the Kalasindhu Academy of Dance and Related Arts in 2009. Poornima Gururaja
                                    holds an MBA from
                                    Brandeis University, USA and has worked as a marketing professional at Hewlett
                                    Packard.
                                </p>
                            </div>
                        </div>
                    </SplideSlide>

                    <SplideSlide>
                        <div class="image-overlay">
                            <div class="image-overlay">
                                <img src={abt} alt="" srcset="" class="img-fluid mt-0 w-100" />
                                <h1 class="choreographer-text">ORGANISER</h1>
                            </div>
                            <div class="container">
                                <div class="text-center mt-3">
                                    <h3 class="fw-bolder">Poornima Gururaja</h3>
                                    <p>Poornima Gururaja is an exponent of the Pandanallur/Tanjore School of dance, a
                                        disciple of Guru
                                        Smt. Narmada who trained under the legendary Guru Sri Kittappa Pillai of
                                        Tanjore. She is the
                                        founder and artistic director of the Pallavi School performing arts, based in
                                        Boston. She
                                        founded
                                        the Kalasindhu Academy of Dance and Related Arts in 2009. Poornima Gururaja
                                        holds an MBA from
                                        Brandeis University, USA and has worked as a marketing professional at Hewlett
                                        Packard.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </SplideSlide>
                </Splide>
            </section>
        </>


            );
};

            export default AboutSlider;
