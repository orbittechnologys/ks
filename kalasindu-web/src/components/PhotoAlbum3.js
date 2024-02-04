// src/PhotoAlbum.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import events1 from '../assets/Gallery_images/e1.jpg';
import events2 from '../assets/Gallery_images/p4.jpg';
import events3 from '../assets/Gallery_images/p3.jpg';
import events4 from '../assets/Gallery_images/e4.jpg';
import events5 from '../assets/Gallery_images/e5.jpg';
import events6 from '../assets/Gallery_images/e6.jpg';
import events7 from '../assets/Gallery_images/e7.jpg';
import events8 from '../assets/Gallery_images/e8.jpg';
import events9 from '../assets/Gallery_images/e9.jpg';
import events10 from '../assets/Gallery_images/e10.jpg';
import events11 from '../assets/Gallery_images/e11.jpg';
import events12 from '../assets/Gallery_images/e12.jpg';

const photos3=[
  events1,
  events2,
  events3,
  events4,
  events5,
  events6,
  events7,
  events8,
  events9,
  events10,
  events11,
  events12,
];

const PhotoAlbum3 = () => {
  return (
    <Container>
        <h2 style={{fontFamily:'Oswald', marginBottom:'40px'}}>Events</h2>
          <p style={{fontFamily:'Open Sans', marginBottom:'40px'}}>Kalasindhu hosts engaging webinars, seminars, and workshops, showcasing renowned artists and scholars, fostering cultural appreciation and unity. Take a look at some of these educating events  conducted at Kalasindhu ever since it's establishment in 2009.</p>
      <Row>
      {photos3.map((photo, index) => (
          <Col key={index} md={4} className="mb-4">
            <img src={photo} alt={`Photo ${index + 1}`} className="img-fluid" />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PhotoAlbum3;
