import React from 'react';
import './Services.css';

const Services = () => {
    const servicesList = [
        { name: 'Haircut', description: 'Classic cuts, fades, and styles tailored to your look.' },
        { name: 'Shave', description: 'Traditional straight razor shaves for a smooth finish.' },
        { name: 'Beard Trim', description: 'Expert beard shaping and grooming services.' },
        { name: 'Coloring', description: 'Hair coloring services to refresh your style.' },
        { name: 'Styling', description: 'Professional styling for special occasions.' },
    ];

    return (
        <div className="services-container">
            <h1>Our Services</h1>
            <div className="services-list">
                {servicesList.map((service, index) => (
                    <div key={index} className="service-item">
                        <h2>{service.name}</h2>
                        <p>{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;