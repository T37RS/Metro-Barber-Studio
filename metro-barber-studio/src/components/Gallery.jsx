import React from 'react';
import './Gallery.css'; // Assuming you will create a Gallery.css for specific styles

const Gallery = () => {
    const images = [
        // Add image URLs here
        'image1.jpg',
        'image2.jpg',
        'image3.jpg',
        'image4.jpg',
        'image5.jpg',
    ];

    return (
        <div className="gallery">
            <h2 className="gallery-title">Our Work</h2>
            <div className="gallery-grid">
                {images.map((image, index) => (
                    <div key={index} className="gallery-item">
                        <img src={image} alt={`Barber work ${index + 1}`} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;