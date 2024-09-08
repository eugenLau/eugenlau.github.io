// src/components/PhotoGrid.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import '../styles/PhotoGrid.css';

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
                <button onClick={handlePrevious} disabled={startIndex === 0}>
                    <FontAwesomeIcon icon={faArrowLeft} />
                </button>
                <button onClick={handleNext} disabled={startIndex + imagesPerPage >= images.length}>
                    <FontAwesomeIcon icon={faArrowRight} />
                </button>
            </div>
        </div>
    );
};

export default PhotoGrid;
