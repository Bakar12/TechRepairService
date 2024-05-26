import React from 'react';
import {Link} from 'react-router-dom';

const HomePage = () => (
    <div>
        <h1>Admin Dashboard</h1>
        <p>Welcome to the admin dashboard. Use the links below to manage the content:</p>
        <ul>
            <li><Link to="/admin/about">Manage About Section</Link></li>
            <li><Link to="/admin/blog">Manage Blog Posts</Link></li>
            <li><Link to="/admin/service">Manage Services</Link></li>
            <li><Link to="/admin/testimonials">Manage Testimonials</Link></li>
        </ul>
    </div>
);

export default HomePage;
