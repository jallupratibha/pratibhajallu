import React, { useEffect } from 'react';
import '../styles/BackgroundAnimation.css';

const BackgroundAnimation = () => {
  // Randomize positions for each dot
  const randomizeStyles = () => {
    const root = document.documentElement;
    for (let i = 0; i < 100; i++) {
      root.style.setProperty(`--random-x-${i}`, Math.random()); // Random horizontal position
      root.style.setProperty(`--random-delay-${i}`, Math.random()); // Random delay
    }
  };

  useEffect(() => {
    randomizeStyles();
  }, []);

  return (
    <div className="background-animation">
      {[...Array(100)].map((_, index) => (
        <div
          key={index}
          className="dot"
          style={{
            '--random-x': `var(--random-x-${index})`,
            '--random-delay': `var(--random-delay-${index})`,
          }}
        ></div>
      ))}
    </div>
  );
};

export default BackgroundAnimation;
