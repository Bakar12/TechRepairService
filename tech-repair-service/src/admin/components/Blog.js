import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [formData, setFormData] = useState({ title: '', content: '' });

  useEffect(() => {
    axios.get('/api/blog/').then(response => setBlogPosts(response.data));
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/blog/', formData).then(response => {
      setBlogPosts([...blogPosts, response.data]);
      setFormData({ title: '', content: '' });
    });
  };

  const handleDelete = (id) => {
    axios.delete(`/api/blog/${id}/`).then(() => {
      setBlogPosts(blogPosts.filter(item => item.id !== id));
    });
  };

  return (
    <div>
      <h1>Blog</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Title"
          required
        />
        <textarea
          name="content"
          value={formData.content}
          onChange={handleChange}
          placeholder="Content"
          required
        />
        <button type="submit">Add Blog Post</button>
      </form>
      <ul>
        {blogPosts.map(item => (
          <li key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.content}</p>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;
