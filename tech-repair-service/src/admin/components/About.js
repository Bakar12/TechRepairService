import React, { useState, useEffect } from 'react';
import axios from 'axios';

const About = () => {
  const [aboutData, setAboutData] = useState([]);
  const [formData, setFormData] = useState({ title: '', content: '' });

  useEffect(() => {
    axios.get('/api/about/').then(response => setAboutData(response.data));
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/about/', formData).then(response => {
      setAboutData([...aboutData, response.data]);
      setFormData({ title: '', content: '' });
    });
  };

  const handleDelete = (id) => {
    axios.delete(`/api/about/${id}/`).then(() => {
      setAboutData(aboutData.filter(item => item.id !== id));
    });
  };

  return (
    <div>
      <h1>About</h1>
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
        <button type="submit">Add About</button>
      </form>
      <ul>
        {aboutData.map(item => (
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

export default About;

