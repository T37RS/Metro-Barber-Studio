import React from 'react';
import Header from '../components/Header';
import Services from '../components/Services';
import Gallery from '../components/Gallery';
import BookingForm from '../components/BookingForm';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div className="home">
            <Header />
            <div className="intro">
                <h1>Welcome to Metro Barber Studio</h1>
                <p>Your urban escape for style and grooming.</p>
            </div>
            <Services />
            <Gallery />
            <BookingForm />
            <Footer />
        </div>
    );
};

export default Home;