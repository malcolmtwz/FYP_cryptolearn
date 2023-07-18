import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import NavBar from './components/NavBar/NavBar';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
