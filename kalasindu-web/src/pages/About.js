import React,{useEffect} from 'react'
import AboutHero from '../components/AboutHero'
import AboutDesc from '../components/AboutDesc'
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
    <AboutHero />
    {/* <AboutDesc /> */}
    <AboutDescr />
    <Footer />
    </>
    )
}

export default About