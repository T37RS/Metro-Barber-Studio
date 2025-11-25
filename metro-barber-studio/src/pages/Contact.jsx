import React from 'react';

const Contact = () => {
    return (
        <div className="contact-container">
            <h1>Contact Us</h1>
            <p>We'd love to hear from you! Reach out to us through the form below or visit us at our studio.</p>
            <div className="contact-info">
                <h2>Metro Barber Studio</h2>
                <p>123 Urban St, City, State, 12345</p>
                <p>Email: info@metrobarberstudio.com</p>
                <p>Phone: (123) 456-7890</p>
            </div>
            <form className="contact-form">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" required></textarea>

                <button type="submit">Send Message</button>
            </form>
        </div>
    );
};

export default Contact;