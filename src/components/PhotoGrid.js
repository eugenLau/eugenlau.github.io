import React from 'react';
import '../styles/PhotoGrid.css'; // Import the CSS file

// Dynamically import all images from the assets/images directory
const importAll = (r) => {
    return r.keys().map(r);
};

const images = importAll(require.context('../assets/images', false, /\.(png|jpe?g|svg)$/));

const PhotoGrid = () => {
    return (
        <div className="photo-grid">
            {images.map((image, index) => (
                <div key={index} className="photo-item">
                    <img src={image} alt={`Photo ${index + 1}`} />
                </div>
            ))}
        </div>
    );
};

export default PhotoGrid;
