import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([]);
    const [formData, setFormData] = useState({author: '', text: ''});

    useEffect(() => {
        axios.get('/api/testimonials/').then(response => setTestimonials(response.data));
    }, []);

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('/api/testimonials/', formData).then(response => {
            setTestimonials([...testimonials, response.data]);
            setFormData({author: '', text: ''});
        });
    };

    const handleDelete = (id) => {
        axios.delete(`/api/testimonials/${id}/`).then(() => {
            setTestimonials(testimonials.filter(item => item.id !== id));
        });
    };

    return (
        <div>
            <h1>Testimonials</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="author"
                    value={formData.author}
                    onChange={handleChange}
                    placeholder="Author"
                    required
                />
                <textarea
                    name="text"
                    value={formData.text}
                    onChange={handleChange}
                    placeholder="Testimonial"
                    required
                />
                <button type="submit">Add Testimonial</button>
            </form>
            <ul>
                {testimonials.map(item => (
                    <li key={item.id}>
                        <h2>{item.author}</h2>
                        <p>{item.text}</p>
                        <button onClick={() => handleDelete(item.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Testimonials;
