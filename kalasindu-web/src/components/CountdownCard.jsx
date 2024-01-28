import React, { useState, useEffect } from 'react';

const CountdownCard = ({ days, hours, minutes, seconds }) => {
  const [timeLeft, setTimeLeft] = useState({
    days,
    hours,
    minutes,
    seconds,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime.seconds > 0) {
          return { ...prevTime, seconds: prevTime.seconds - 1 };
        } else if (prevTime.minutes > 0) {
          return { ...prevTime, minutes: prevTime.minutes - 1, seconds: 59 };
        } else if (prevTime.hours > 0) {
          return { ...prevTime, hours: prevTime.hours - 1, minutes: 59, seconds: 59 };
        } else if (prevTime.days > 0) {
          return { ...prevTime, days: prevTime.days - 1, hours: 23, minutes: 59, seconds: 59 };
        } else {
          clearInterval(interval);
          return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }
      });
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []); // Empty dependency array to run the effect only once

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-evenly',
        width: '525px',
        height: '105px',
        backgroundColor: '#FCB541',
        padding: '15px',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        marginLeft: '1220px',
      }}
    >
      <div style={{ textAlign: 'center' }}>
        <span style={{ fontSize: '32px', fontWeight: 'bold', color:'#000000' }}>{timeLeft.days}</span><br/>
        <span style={{ fontSize: '18px', color: '#000000' }}>days</span>
      </div>
      <div style={{ textAlign: 'center' }}>
        <span style={{ fontSize: '32px', fontWeight: 'bold', color:'#000000' }}>{timeLeft.hours}</span><br/>
        <span style={{ fontSize: '18px', color: '#000000' }}>hours</span>
      </div>
      <div style={{ textAlign: 'center' }}>
        <span style={{ fontSize: '32px', fontWeight: 'bold', color:'#000000' }}>{timeLeft.minutes}</span><br/>
        <span style={{ fontSize: '18px', color: '#000000' }}>minutes</span>
      </div>
      <div style={{ textAlign: 'center' }}>
        <span style={{ fontSize: '32px', fontWeight: 'bold', color:'#000000' }}>{timeLeft.seconds}</span><br/>
        <span style={{ fontSize: '18px', color: '#000000' }}>seconds</span>
      </div>
    </div>
  );
};

export default CountdownCard;