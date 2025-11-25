import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Assuming you will create a separate CSS file for header styles

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <h1>Metro Barber Studio</h1>
            </div>
            <nav className="nav">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/gallery">Gallery</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;