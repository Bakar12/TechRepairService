import React from 'react';
import HeroSection from '../components/HeroSection'; // Importing the HeroSection component
import ServiceHighlight from '../components/ServiceHighlight'; // Importing the ServiceHighlight component
import Testimonials from '../components/Testimonials'; // Importing the Testimonials component
import ContactForm from '../components/ContactForm'; // Importing the ContactForm component

const HomePage = () => {
    return (
        <div>
            <HeroSection />
            <ServiceHighlight /> 
            <Testimonials /> 
            <ContactForm /> 
        </div>
    );
};

export default HomePage;
