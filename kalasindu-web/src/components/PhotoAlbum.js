// src/PhotoAlbum.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const photos = [
  'https://cdn.pixabay.com/photo/2024/01/18/00/36/boat-8515980_640.jpg',
  'https://cdn.pixabay.com/photo/2024/01/18/00/36/boat-8515980_640.jpg',
  'https://cdn.pixabay.com/photo/2024/01/18/00/36/boat-8515980_640.jpg',
  'https://cdn.pixabay.com/photo/2024/01/18/00/36/boat-8515980_640.jpg',
  'https://cdn.pixabay.com/photo/2024/01/18/00/36/boat-8515980_640.jpg',
  'https://cdn.pixabay.com/photo/2024/01/18/00/36/boat-8515980_640.jpg',
  'https://cdn.pixabay.com/photo/2024/01/18/00/36/boat-8515980_640.jpg',
  'https://cdn.pixabay.com/photo/2024/01/18/00/36/boat-8515980_640.jpg',
  'https://cdn.pixabay.com/photo/2024/01/18/00/36/boat-8515980_640.jpg',
  'https://cdn.pixabay.com/photo/2024/01/18/00/36/boat-8515980_640.jpg',
  'https://cdn.pixabay.com/photo/2024/01/18/00/36/boat-8515980_640.jpg',
  'https://cdn.pixabay.com/photo/2024/01/18/00/36/boat-8515980_640.jpg',
  
  // Add more image URLs as needed
];

const PhotoAlbum = () => {
  return (
    <Container>
        <h2>Rangarpane</h2>
          <p>A first stepping stone for a student of Dance. Rangarpane at Kalasindhu is more about the entire processof training a students Body and mind with atmost focus and dedication and a time to build a rapport with their Guru . It is an offering and a commitment  to the stage and the Art that they are going  perform for the rest of their lives .  Guru Poornima Gururaja Choreographs a new Mārgam for every student preparing for a Rangārpane and customises for every student for them to feel more innately connected .</p>
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
