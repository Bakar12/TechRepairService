import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserManagement = () => {
    const [users, setUsers] = useState([]);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        const fetchUsers = async () => {
            const response = await axios.get('http://localhost:8000/api/auth/users/', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            });
            setUsers(response.data);
        };
        fetchUsers();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:8000/api/auth/users/', {
            username,
            password,
        }, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        });
        setUsername('');
        setPassword('');
        const response = await axios.get('http://localhost:8000/api/auth/users/', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        });
        setUsers(response.data);
    };

    return (
        <div>
            <h2>User Management</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username:</label>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <button type="submit">Add Admin</button>
            </form>
            <h3>Existing Admins:</h3>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.username}</li>
                ))}
            </ul>
        </div>
    );
};

export default UserManagement;
