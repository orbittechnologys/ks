import React, { useState, useEffect } from 'react';

const CountdownCard = ({ days, hours, minutes, seconds }) => {
  const storedEndTime = localStorage.getItem('countdownEndTime');
  const storedTimeLeft = JSON.parse(localStorage.getItem('timeLeft'));

  const [endTime, setEndTime] = useState(storedEndTime || null);
  const [timeLeft, setTimeLeft] = useState(storedTimeLeft || { days, hours, minutes, seconds });

  useEffect(() => {
    if (!endTime) {
      const now = new Date().getTime();
      const newEndTime = now + timeLeft.days * 24 * 60 * 60 * 1000 +
        timeLeft.hours * 60 * 60 * 1000 + timeLeft.minutes * 60 * 1000 + timeLeft.seconds * 1000;

      setEndTime(newEndTime);
      localStorage.setItem('countdownEndTime', newEndTime);
    }

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = endTime - now;

      if (distance > 0) {
        setTimeLeft((prevTime) => {
          const seconds = Math.floor((distance % (1000 * 60)) / 1000);
          const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const days = Math.floor(distance / (1000 * 60 * 60 * 24));

          const newTimeLeft = { days, hours, minutes, seconds };
          localStorage.setItem('timeLeft', JSON.stringify(newTimeLeft));

          return newTimeLeft;
        });
      } else {
        clearInterval(interval);
        localStorage.removeItem('countdownEndTime');
        localStorage.removeItem('timeLeft');
        // You can perform any action when the timer expires
      }
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [endTime, timeLeft]);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '525px',
        height: '105px',
        backgroundColor: '#FCB541',
        padding: '15px',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        marginLeft: '1220px',
        marginTop: '20px',
      }}
    >
      <div style={{ textAlign: 'center' }}>
        <span style={{ fontSize: '32px', fontWeight: 'bold', color: '#000000' }}>{timeLeft.days}</span><br />
        <span style={{ fontSize: '18px', color: '#000000' }}>days</span>
      </div>
      <div style={{ textAlign: 'center' }}>
        <span style={{ fontSize: '32px', fontWeight: 'bold', color: '#000000' }}>{timeLeft.hours}</span><br />
        <span style={{ fontSize: '18px', color: '#000000' }}>hours</span>
      </div>
      <div style={{ textAlign: 'center' }}>
        <span style={{ fontSize: '32px', fontWeight: 'bold', color: '#000000' }}>{timeLeft.minutes}</span><br />
        <span style={{ fontSize: '18px', color: '#000000' }}>minutes</span>
      </div>
      <div style={{ textAlign: 'center' }}>
        <span style={{ fontSize: '32px', fontWeight: 'bold', color: '#000000' }}>{timeLeft.seconds}</span><br />
        <span style={{ fontSize: '18px', color: '#000000' }}>seconds</span>
      </div>
    </div>
  );
};

export default CountdownCard;
