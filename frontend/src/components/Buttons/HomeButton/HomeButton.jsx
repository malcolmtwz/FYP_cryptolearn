import React from "react";
import { Link } from 'react-router-dom';
import homeImage from '../../../img/homeImage.svg'
import './HomeButton.css';

function HomeButton({ className, homeImg }) {
    return (
      <Link to="/" className={`home-button-instance ${className || ''}`}>
        <button className="home-button">
            <img className="home-img" alt="Home img" src={homeImg} />
            <div className="home">Home</div>
        </button>
      </Link>
    );
}

export default HomeButton;