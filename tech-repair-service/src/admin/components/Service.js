import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Service = () => {
  const [services, setServices] = useState([]);
  const [formData, setFormData] = useState({ title: '', description: '' });

  useEffect(() => {
    axios.get('/api/service/').then(response => setServices(response.data));
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/service/', formData).then(response => {
      setServices([...services, response.data]);
      setFormData({ title: '', description: '' });
    });
  };

  const handleDelete = (id) => {
    axios.delete(`/api/service/${id}/`).then(() => {
      setServices(services.filter(item => item.id !== id));
    });
  };

  return (
    <div>
      <h1>Service</h1>
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
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
          required
        />
        <button type="submit">Add Service</button>
      </form>
      <ul>
        {services.map(item => (
          <li key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Service;
