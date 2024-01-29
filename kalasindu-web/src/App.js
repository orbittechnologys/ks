import React from "react"; 
import { Routes, Route, BrowserRouter } from "react-router-dom";  
import Home from "./pages/Home";
import Team from "./components/Team";
import Testimonial from "./components/Testimonial";
import About from "./pages/About";
import Support from "./pages/Support";
import Events from "./pages/Events";
import Education from "./pages/Education";
import Collaborate from "./pages/Collaborate";
import Gallery from "./pages/Gallery";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />  
        <Route exact path="/about" element={<About />} />
        <Route exact path="/events" element={<Events />} />  
        <Route exact path="/education" element={<Education />} />
        <Route exact path="/collaborate" element={<Collaborate />} />
        <Route exact path="/gallery" element={<Gallery />} /> //* Gallery
        <Route exact path="/support" element={<Support />} />
      </Routes>
    </BrowserRouter>
  );
}
