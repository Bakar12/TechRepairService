import React from 'react';
import HeroSection from '../components/HeroSection';
import ServiceHighlight from '../components/ServiceHighlight';
import Testimonials from '../components/Testimonials';
import ContactForm from '../components/ContactForm';
import Statistics from '../components/Statistics';
import BlogPreview from '../components/BlogPreview';
import NewsletterSignup from '../components/NewsletterSignup';
import { motion } from 'framer-motion';
import { Container, Row, Col } from 'react-bootstrap';

const HomePage = () => {
    return (
        <div>
            <HeroSection />
            <ServiceHighlight />
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            >
                <Statistics />
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
            >
                <Testimonials />
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.4 }}
                style={{ marginTop: '50px' }}
            >
                <BlogPreview />
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.6 }}
            >
                <NewsletterSignup />
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.8 }}
            >
                <ContactForm />
            </motion.div>
        </div>
    );
};

export default HomePage;

