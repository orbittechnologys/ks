// src/PhotoAlbum1.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import festival1 from '../assets/Gallery_images/00100lPORTRAIT_00100_BURST20190929190729707_COVER.jpg';
import festival2 from '../assets/Gallery_images/00100lPORTRAIT_00100_BURST20191002193312275_COVER.jpg';
import festival3 from '../assets/Gallery_images/1686985130724.jpg';
import festival4 from '../assets/Gallery_images/1686985130867.jpg';
import festival5 from '../assets/Gallery_images/1690370652205.jpg';
import festival6 from '../assets/Gallery_images/1690370652231.jpg';
import festival7 from '../assets/Gallery_images/1690370652258.jpg';
import festival8 from '../assets/Gallery_images/1690370652313.jpg';
import festival9 from '../assets/Gallery_images/1690370652395.jpg';
import festival10 from '../assets/Gallery_images/1690370652620.jpg';
import festival11 from '../assets/Gallery_images/1690370653121.jpg';
import festival12 from '../assets/Gallery_images/Nirantara Narmada 2020 418-01.jpeg';

const photos = [
  festival1,
  festival2,
  festival3,
  festival4,
  festival5,
  festival6,
  festival7,
  festival8,
  festival9,
  festival10,
  festival11,
  festival12,
];

const PhotoAlbum1 = () => {
  return (
    <Container>
        <h2 style={{fontFamily:'Oswald', marginBottom:'40px'}}>Festivals</h2>
          <p style={{fontFamily:'Open Sans', marginBottom:'40px'}}>Guru Poornima Gururaja's vision for Kalasindhu has not just been to teach students and perform but also to curate festivals and platforms where artists from all walks of life and from all around the globe are invited to perform and give Students of Art and Rasikas a deeper insight into their journey in Arts .  With that moral ground Kalasindhu currently curates 2 major festivals- Nirantara Narmada & Navarasa Navarathri</p>
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
