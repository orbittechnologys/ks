// src/PhotoAlbum1.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const photos = [
    'https://cdn.pixabay.com/photo/2023/10/24/21/15/nature-8339115_640.jpg',
    'https://cdn.pixabay.com/photo/2023/10/24/21/15/nature-8339115_640.jpg',
    'https://cdn.pixabay.com/photo/2023/10/24/21/15/nature-8339115_640.jpg',
    'https://cdn.pixabay.com/photo/2023/10/24/21/15/nature-8339115_640.jpg',
    'https://cdn.pixabay.com/photo/2023/10/24/21/15/nature-8339115_640.jpg',
    'https://cdn.pixabay.com/photo/2023/10/24/21/15/nature-8339115_640.jpg',
    'https://cdn.pixabay.com/photo/2023/10/24/21/15/nature-8339115_640.jpg',
    'https://cdn.pixabay.com/photo/2023/10/24/21/15/nature-8339115_640.jpg',
    'https://cdn.pixabay.com/photo/2023/10/24/21/15/nature-8339115_640.jpg',
    'https://cdn.pixabay.com/photo/2023/10/24/21/15/nature-8339115_640.jpg',
    'https://cdn.pixabay.com/photo/2023/10/24/21/15/nature-8339115_640.jpg',
    'https://cdn.pixabay.com/photo/2023/10/24/21/15/nature-8339115_640.jpg',
  
  // Add more image URLs as needed
];

const PhotoAlbum1 = () => {
  return (
    <Container>
        <h2>Festivals</h2>
          <p>Guru Poornima Gururaja's vision for Kalasindhu has not just been to teach students and perform but also to curate festivals and platforms where artists from all walks of life and from all around the globe are invited to perform and give Students of Art and Rasikas a deeper insight into their journey in Arts .  With that moral ground Kalasindhu currently curates 2 major festivals- Nirantara Narmada & Navarasa Navarathri</p>
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

export default PhotoAlbum1;
