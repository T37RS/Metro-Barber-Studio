import React from 'react';

const Services = () => {
    const servicesList = [
        { name: 'Haircut', description: 'Classic and modern cuts tailored to your style.' },
        { name: 'Shave', description: 'Traditional straight razor shaves for a smooth finish.' },
        { name: 'Beard Trim', description: 'Precision trimming and shaping for your beard.' },
        { name: 'Coloring', description: 'Hair coloring services to refresh your look.' },
        { name: 'Styling', description: 'Expert styling for any occasion.' },
    ];

    return (
        <div className="services-container">
            <h2>Our Services</h2>
            <ul className="services-list">
                {servicesList.map((service, index) => (
                    <li key={index} className="service-item">
                        <h3>{service.name}</h3>
                        <p>{service.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Services;