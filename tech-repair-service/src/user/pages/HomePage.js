import React from 'react';
import HeroSection from '../components/HeroSection';
import ServiceHighlight from '../components/ServiceHighlight';
import Testimonials from '../components/Testimonials';
import ContactForm from '../components/ContactForm';
import Statistics from '../components/Statistics';
import BlogPreview from '../components/BlogPreview';
import NewsletterSignup from '../components/NewsletterSignup';
import {motion} from 'framer-motion';

const HomePage = () => {
    return (
        <div>
            <HeroSection/>
            <ServiceHighlight/>
            <motion.div
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                viewport={{once: true}}
                transition={{duration: 1}}
            >
                <Statistics/>
            </motion.div>
            <motion.div
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                viewport={{once: true}}
                transition={{duration: 1}}
            >
                <Testimonials/>
            </motion.div>
            <motion.div
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                viewport={{once: true}}
                transition={{duration: 1}}
                style={{marginTop: '50px'}} // Add a top margin to increase the gap
            >
                <BlogPreview/>
            </motion.div>
            <motion.div
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                viewport={{once: true}}
                transition={{duration: 1}}
            >
                <NewsletterSignup/>
            </motion.div>
            <motion.div
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                viewport={{once: true}}
                transition={{duration: 1}}
            >
                <ContactForm/>
            </motion.div>
        </div>
    );
};

export default HomePage;
