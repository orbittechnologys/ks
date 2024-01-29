import React from 'react';
import '../assets/styles/Gallery.css';
import Navbar from '../components/Navbar'
import { Link } from 'react-scroll';

const Gallery = () => {
  const galleryItems = [
    { id: 1, imageUrl: require('../assets/images/GM1.png'), text: 'Rangarpane' },
    { id: 2, imageUrl: require('../assets/images/GM2.png'), text: 'Festivals' },
    { id: 3, imageUrl: require('../assets/images/GM3.png'), text: 'Performance' },
    { id: 4, imageUrl: require('../assets/images/GM4.png'), text: 'Events' },
  ];

  const handleClick = (id) => {
    // Handle click logic, e.g., scroll to the section with id
    // You can use react-scroll library for smooth scrolling
  };

  return (
    <>
    <Navbar />
    <div className="container mt-5">
      <div className="row">
        {galleryItems.map((item) => (
          <div key={item.id} className="col-md-3 mb-4">
            <div className="gallery-item">
              <img
                src={item.imageUrl}
                alt={item.text}
                className="img-fluid"
              />
              <div className="overlay">
                <p className="text-overlay">{item.text}</p>
              </div>
              <Link
                to={`section-${item.id}`}
                smooth={true}
                onClick={() => handleClick(item.id)}
              >
                <div className="click-overlay"></div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Gallery;