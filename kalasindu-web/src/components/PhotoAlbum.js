// src/PhotoAlbum.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import r1 from '../assets/Gallery_images/r1.jpg';
import r2 from '../assets/Gallery_images/r5.jpg';
import r3 from '../assets/Gallery_images/r8.jpg';
import r4 from '../assets/Gallery_images/r6.jpg';
import r5 from '../assets/Gallery_images/r2.jpg';
import r6 from '../assets/Gallery_images/r9.jpg';
import r7 from '../assets/Gallery_images/r7.jpg';
import r8 from '../assets/Gallery_images/r13.jpg';
import r9 from '../assets/Gallery_images/r4.jpg';
import r10 from '../assets/Gallery_images/r10.jpg';
import r11 from '../assets/Gallery_images/r11.jpg';
import r12 from '../assets/Gallery_images/r12.jpg';

const photos=[
  r1,
  r2,
  r3,
  r4,
  r5,
  r6,
  r7,
  r8,
  r9,
  r10,
  r11,
  r12,
];

const PhotoAlbum = () => {
  return (
    <Container>
        <h2 style={{fontFamily:'Oswald', marginBottom:'40px'}} className='mt-5'>Rangarpane</h2>
          <p style={{fontFamily:'Open Sans', marginBottom:'40px'}}>A first stepping stone for a student of Dance. Rangarpane at Kalasindhu is more about the entire processof training a students Body and mind with atmost focus and dedication and a time to build a rapport with their Guru . It is an offering and a commitment  to the stage and the Art that they are going  perform for the rest of their lives .  Guru Poornima Gururaja Choreographs a new Mārgam for every student preparing for a Rangārpane and customises for every student for them to feel more innately connected .</p>
      <Row>
        {photos.map((photo, index) => (
          <Col key={index} md={4} className="mb-4">
            <img src={photo} alt={`Photo ${index + 1}`} className="img-fluid" />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PhotoAlbum;
