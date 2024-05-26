import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <ul>
      <li><Link to="/admin/about">About</Link></li>
      <li><Link to="/admin/blog">Blog</Link></li>
      <li><Link to="/admin/service">Service</Link></li>
      <li><Link to="/admin/testimonials">Testimonials</Link></li>
    </ul>
  </nav>
);

export default Navbar;

