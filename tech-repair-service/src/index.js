import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-dark-5/dist/css/bootstrap-nightfall.min.css'; // Dark mode CSS
import AdminApp from './admin/AdminApp';
import UserApp from './user/UserApp';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_API_URL || 'http://127.0.0.1:8000/';

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/admin/*" element={<AdminApp/>}/>
                <Route path="/*" element={<UserApp/>}/>
            </Routes>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


