import React,{useEffect} from 'react'
// import AboutHero from '../components/AboutHero'
// import AboutDesc from '../components/AboutDesc'
import ScrollTextImage from '../components/AboutHero';
import Footer from '../components/Footer'
import AboutDescr from '../components/AboutDescr'
import Navbar from '../components/Navbar'
import AOS from 'aos';
import 'aos/dist/aos.css';


function About() {
  useEffect(() => {
    AOS.init();
}, []);
  return (
    <>
    <Navbar  />
    <ScrollTextImage />
    {/*<AboutHero />*/}
    {/* <AboutDesc /> */}
    <AboutDescr />
    <Footer />
    </>
    )
}

export default About