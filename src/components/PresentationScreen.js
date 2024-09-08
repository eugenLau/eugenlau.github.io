// src/components/PresentationScreen.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import '../styles/PresentationScreen.css'; // Import the CSS file

const PresentationScreen = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    // Trigger the fade-in effect by setting isVisible to true
    setIsVisible(true);

    // Set a timer to navigate to the home page after the fade-in animation
    const timer = setTimeout(() => {
      navigate('/'); // Redirect to the home page
    }, 3000); // Set duration to match the animation (3 seconds here)

    // Cleanup the timer when component unmounts
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className={`presentation-screen ${isVisible ? 'fade-in' : ''}`}>
      <h1>Eugen Lau</h1>
    </div>
  );
};

export default PresentationScreen;
