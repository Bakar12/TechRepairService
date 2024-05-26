import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Header from './components/Navbar';

import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicePage';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import {ThemeProvider} from '../ThemeContext';

const AdminApp = () => {
    return (
        <ThemeProvider>
            <Header/>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/services" element={<ServicesPage/>}/>
                <Route path="/about" element={<AboutPage/>}/>
                <Route path="/blog" element={<BlogPage/>}/>
            </Routes>
        </ThemeProvider>
    );
};

export default AdminApp;