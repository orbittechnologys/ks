// src/PhotoAlbum.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import performance1 from '../assets/Gallery_images/p11.jpg';
import performance2 from '../assets/Gallery_images/p2.jpg';
import performance3 from '../assets/Gallery_images/p3.jpg';
import performance4 from '../assets/Gallery_images/p4.jpg';
import performance5 from '../assets/Gallery_images/p5.jpg';
import performance6 from '../assets/Gallery_images/p6.jpg';
import performance7 from '../assets/Gallery_images/p7.jpg';
import performance8 from '../assets/Gallery_images/p8.jpg';
import performance9 from '../assets/Gallery_images/p9.jpg';
import performance10 from '../assets/Gallery_images/p10.jpg';
import performance11 from '../assets/Gallery_images/p1.jpg';
import performance12 from '../assets/Gallery_images/p12.jpg';

const photos2=[
  performance1,
  performance2,
  performance3,
  performance4,
  performance5,
  performance6,
  performance7,
  performance8,
  performance9,
  performance10,
  performance11,
  performance12,
];

const PhotoAlbum2 = () => {
  return (
    <Container>
        <h2 style={{fontFamily:'Oswald', marginBottom:'40px'}}>Performances</h2>
          <p style={{fontFamily:'Open Sans', marginBottom:'40px'}}>Take a peak into an array of performances our Kalasindhu Ensemble has given so far. 
Kalasindhu Ensemble has been extremely blessed to have had oppertunities to present Margams , thematic productions, Dance dramas such as 'Shiva-Shive' , 'Guhyam' 'Shivotsavam' and many more at prestigious and nation renowned and recognised platforms..</p>
      <Row>
        {photos2.map((photo, index) => (
          <Col key={index} md={4} className="mb-4">
            <img src={photo} alt={`Photo ${index + 1}`} className="img-fluid" />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PhotoAlbum2;
