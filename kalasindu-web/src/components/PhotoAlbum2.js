// src/PhotoAlbum.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const photos = [
  'https://cdn.pixabay.com/photo/2023/12/27/22/23/horse-8472924_640.jpg',
  'https://cdn.pixabay.com/photo/2023/12/27/22/23/horse-8472924_640.jpg',
  'https://cdn.pixabay.com/photo/2023/12/27/22/23/horse-8472924_640.jpg',
  'https://cdn.pixabay.com/photo/2023/12/27/22/23/horse-8472924_640.jpg',
  'https://cdn.pixabay.com/photo/2023/12/27/22/23/horse-8472924_640.jpg',
  'https://cdn.pixabay.com/photo/2023/12/27/22/23/horse-8472924_640.jpg',
  'https://cdn.pixabay.com/photo/2023/12/27/22/23/horse-8472924_640.jpg',
  'https://cdn.pixabay.com/photo/2023/12/27/22/23/horse-8472924_640.jpg',
  'https://cdn.pixabay.com/photo/2023/12/27/22/23/horse-8472924_640.jpg',
  'https://cdn.pixabay.com/photo/2023/12/27/22/23/horse-8472924_640.jpg',
  'https://cdn.pixabay.com/photo/2023/12/27/22/23/horse-8472924_640.jpg',
  'https://cdn.pixabay.com/photo/2023/12/27/22/23/horse-8472924_640.jpg',
  
  // Add more image URLs as needed
];

const PhotoAlbum2 = () => {
  return (
    <Container>
        <h2>Performances</h2>
          <p>Take a peak into an array of performances our Kalasindhu Ensemble has given so far. 
Kalasindhu Ensemble has been extremely blessed to have had oppertunities to present Margams , thematic productions, Dance dramas such as 'Shiva-Shive' , 'Guhyam' 'Shivotsavam' and many more at prestigious and nation renowned and recognised platforms..</p>
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

export default PhotoAlbum2;
