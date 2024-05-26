import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Header from './components/Navbar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import ServicePage from './pages/ServicePage';
import TestimonialsPage from './pages/TestimonialsPage';
import {ThemeProvider} from '../ThemeContext';
import Login from './components/Login';
import UserManagement from './components/UserManagement';
import PrivateRoute from './components/PrivateRoute';

const AdminApp = () => {
    return (
        <ThemeProvider>
            <Header/>
            <Routes>
                <Route path="/admin" element={<PrivateRoute><HomePage/></PrivateRoute>} />
                <Route path="/admin/login" element={<Login/>}/>
                <Route path="/admin/users" element={<PrivateRoute><UserManagement/></PrivateRoute>}/>
                <Route path="/admin/about" element={<PrivateRoute><AboutPage/></PrivateRoute>}/>
                <Route path="/admin/blog" element={<PrivateRoute><BlogPage/></PrivateRoute>}/>
                <Route path="/admin/service" element={<PrivateRoute><ServicePage/></PrivateRoute>}/>
                <Route path="/admin/testimonials" element={<PrivateRoute><TestimonialsPage/></PrivateRoute>}/>
            </Routes>
        </ThemeProvider>
    );
};

export default AdminApp;