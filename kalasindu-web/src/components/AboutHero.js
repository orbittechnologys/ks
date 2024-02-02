import React, { useState, useEffect } from "react";
import abtImage from "../assets/images/abt.png";

const ScrollTextImage = () => {
  const [displayTextIndex, setDisplayTextIndex] = useState(0);

  const textArray = [
    "Founder-Director",
    "Teacher",
    "Choreographer",
    "Nattuvanar",
    "Organizer",
  ];

  useEffect(() => {
    const textChangeInterval = setInterval(() => {
      setDisplayTextIndex((prevIndex) => (prevIndex + 1) % textArray.length);
    }, 3000);

    return () => {
      clearInterval(textChangeInterval);
    };
  }, [textArray]);

  return (
    <div
      style={{
        height: "750px",
        position: "relative",
        overflow: "hidden",
        marginTop: "70px",
      }}
    >
      <div
        style={{ width: "100%", height: "500px", position: "relative" }}
        data-aos="fade-up"
        data-aos-duration="2800"
      >
        <img
          src={abtImage}
          alt="ABT"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: "50%",
            transform: "translateX(-50%)",
            textAlign: "center",
          }}
        >
          <h1 style={{ fontSize: "96px", fontWeight: 700, color: "white" }}>
            {textArray[displayTextIndex]}
          </h1>
        </div>
      </div>

      <div
        style={{
          height: "250px",
          width: "1048px",
          background: "white",
          textAlign: "center",
          display: "inline-flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignContent: "center",
          marginLeft: "400px",
        }}
      >
        <h1
          style={{ margin: 0, fontSize: "48px" }}
          data-aos="fade-left"
          data-aos-duration="1700"
        >
          Poornima Gururaja
        </h1>
        <p data-aos="fade-right"
        data-aos-duration="1700">
          Poornima Gururaja is an exponent of the Pandanallur/Tanjore School of
          dance, a disciple of Guru Smt. Narmada who trained under the legendary
          Guru Sri Kittappa Pillai of Tanjore. She is the founder and artistic
          director of the Pallavi School performing arts, based in Boston. She
          founded the Kalasindhu Academy of Dance and Related Arts in 2009.
          Poornima Gururaja holds an MBA from Brandeis University, USA and has
          worked as a marketing professional at Hewlett Packard.
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
