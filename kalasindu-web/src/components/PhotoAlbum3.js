// src/PhotoAlbum.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const photos = [
  'https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_640.jpg',
  'https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_640.jpg',
  'https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_640.jpg',
  'https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_640.jpg',
  'https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_640.jpg',
  'https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_640.jpg',
  'https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_640.jpg',
  'https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_640.jpg',
  'https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_640.jpg',
  'https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_640.jpg',
  'https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_640.jpg',
  'https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_640.jpg',

  // Add more image URLs as needed
];

const PhotoAlbum3 = () => {
  return (
    <Container>
        <h2>Events</h2>
          <p>Kalasindhu hosts engaging webinars, seminars, and workshops, showcasing renowned artists and scholars, fostering cultural appreciation and unity. Take a look at some of these educating events  conducted at Kalasindhu ever since it's establishment in 2009.</p>
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

export default PhotoAlbum3;
