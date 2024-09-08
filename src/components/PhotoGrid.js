// src/components/PhotoGrid.js
import React, { useState } from 'react';
import '../styles/PhotoGrid.css'; // Import the CSS file

// Dynamically import all images from the assets/images directory
const importAll = (r) => {
    return r.keys().map(r);
};

const images = importAll(require.context('../assets/images', false, /\.(png|jpe?g|svg)$/));

const PhotoGrid = () => {
    const [startIndex, setStartIndex] = useState(0);
    const imagesPerPage = 6;
    
    const handleNext = () => {
        if (startIndex + imagesPerPage < images.length) {
            setStartIndex(startIndex + imagesPerPage);
        }
    };

    const handlePrevious = () => {
        if (startIndex > 0) {
            setStartIndex(startIndex - imagesPerPage);
        }
    };

    return (
        <div className="photo-grid-container">
            <div className="photo-grid">
                {images.slice(startIndex, startIndex + imagesPerPage).map((image, index) => (
                    <div key={index} className="photo-item">
                        <img src={image} alt={`Photo ${index + 1}`} />
                    </div>
                ))}
            </div>
            <div className="navigation">
                <button onClick={handlePrevious} disabled={startIndex === 0}>Previous</button>
                <button onClick={handleNext} disabled={startIndex + imagesPerPage >= images.length}>Next</button>
            </div>
        </div>
    );
};

export default PhotoGrid;
