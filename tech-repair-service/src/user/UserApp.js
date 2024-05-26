import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';
import {ThemeProvider} from '../ThemeContext';
const App = () => {
    return (
        <ThemeProvider>
            <Header/>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/services" element={<ServicesPage/>}/>
                <Route path="/about" element={<AboutPage/>}/>
                <Route path="/contact" element={<ContactPage/>}/>
                <Route path="/blog" element={<BlogPage/>}/>
            </Routes>
            <Footer/>
        </ThemeProvider>
    );
};

export default App;