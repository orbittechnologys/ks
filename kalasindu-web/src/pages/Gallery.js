import React from 'react';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { HashLink as Link } from 'react-router-hash-link';

function Gallery() {
  return (
    <>
      <Navbar />
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-around', height:"100vh", marginTop:"120px" }}>
        <div>
          <Link smooth to="#section1"><img src={require("../assets/images/GM1.png")} alt="Image 1" /></Link>
        </div>
        <div>
          <Link smooth to="#section2"><img src={require("../assets/images/GM2.png")} alt="Image 2" /></Link>  
        </div>
        <div>
          <Link smooth to="#section3"><img src={require("../assets/images/GM3.png")} alt="Image 3" /></Link>
        </div>
        <div>
          <Link smooth to="#section4"><img src={require("../assets/images/GM4.png")} alt="Image 4" /></Link>
        </div>
      </div>
<pre></pre>
<pre></pre>
<pre></pre>
<pre></pre>
<pre></pre>
<pre></pre>
<pre></pre>
<pre></pre>
<pre></pre>
<pre></pre>
<pre></pre>
<pre></pre>
<pre></pre>
<pre></pre>
<pre></pre>
<pre></pre>
<pre></pre>
<pre></pre>
<pre></pre>
<pre></pre>
<pre></pre>
<pre></pre>
<pre></pre>
<pre></pre>
<pre></pre>
<pre></pre>
<pre></pre>
<pre></pre>
<pre></pre>
<pre></pre>
<pre></pre>
<pre></pre>
<pre></pre>
<pre></pre>
<pre></pre>
<pre></pre>
<pre></pre>
<pre></pre>
<pre></pre>
<pre></pre>
<pre></pre>
<pre></pre>
<pre></pre>
<pre></pre>
<pre></pre>
<pre></pre>
<pre></pre>
<pre></pre>
<pre></pre>
<pre></pre>
<pre></pre>
<pre></pre>
<pre></pre>
<pre></pre>
<pre></pre>
<pre></pre>
<pre></pre>
<pre></pre>
<pre></pre>
<pre></pre>
<pre></pre>
<pre></pre>
<pre></pre>
<pre></pre>
<pre></pre>
<pre></pre>
<pre></pre>
<pre></pre>
<pre></pre>
<pre></pre>
<pre></pre>
<pre></pre>
<pre></pre>
<pre></pre>
<pre></pre>
<pre></pre>
<pre></pre>
<pre></pre>
<pre></pre>
<pre></pre>
<pre></pre>
<pre></pre>
<pre></pre>
<pre></pre>
<pre></pre>
<pre></pre>
<pre></pre>
<pre></pre>
<pre></pre>
<pre></pre>
<pre></pre>
<pre></pre>
<pre></pre>
<pre></pre>
<pre></pre>
<pre></pre>
<pre></pre>
<pre></pre>
<pre></pre>
      <div id="section1">
        <h2>Section 1</h2>
        <p>This is Section 1</p>
      </div>

      <div id="section2">
        <h2>Section 2</h2>
        <p>This is Section 2</p>
      </div>

      <div id="section3">
        <h2>Section 3</h2>
        <p>This is Section 3</p>
      </div>

      <div id="section4">
        <h2>Section 4</h2>
        <p>This is Section 4</p>
      </div>
    </div>
    </>
  );
}

export default Gallery;
