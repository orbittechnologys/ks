import React, { useState, useEffect } from 'react';
import abtImage from '../assets/images/abt.png';

const ScrollTextImage = () => {
  const [displayTextIndex, setDisplayTextIndex] = useState(0);

  const textArray = [
    "Founder-Director",
    "Teacher",
    "Choreographer",
    "Nattuvanar",
    "Organizer"
  ];

  useEffect(() => {
    const textChangeInterval = setInterval(() => {
      setDisplayTextIndex(prevIndex => (prevIndex + 1) % textArray.length);
    }, 3000);

    return () => {
      clearInterval(textChangeInterval);
    };
  }, [textArray.length]);

  return (
    <div style={{ position: 'relative', height: '500px', overflow: 'hidden', marginTop:"80px" }}>
      <div style={{ width: '100%', height: '100%', position: 'relative' }}>
        <img src={abtImage} alt="ABT" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            textAlign: 'center',
            width: '100%',
            animation: 'fade-up 1s ease-out',
          }}
        >
          <h1 style={{ fontSize: '90px', fontWeight: 700, color: 'white' }}>{textArray[displayTextIndex]}</h1>
        </div>
      </div>
      <div style={{ textAlign: 'center', marginTop: '20px', backgroundColor:'black'}}>
        <h1>Poornima Gururaja</h1>
        <p>
          Poornima Gururaja's choreographies are renowned for their critical acclaim, authenticity, vibrant colors, and inherent appeal to children. Her productions are based on authentic sources, ensuring a rich and genuine representation of the art form. With her meticulous attention to detail and creative vision, Poornima's choreographies are filled with splendor, capturing the essence of prosperity and captivating the hearts of audiences, especially children.
        </p>
      </div>
      <style>
        {`
          @keyframes fade-up {
            from {
              opacity: 0;
              transform: translateY(50px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </div>
  );
};

export default ScrollTextImage;
