import React from "react";
import { Link } from 'react-router-dom';
import aboutusImage from '../../../img/aboutusImage.svg'
import './AboutUsButton.css';

function AboutUsButton({ className, aboutusImg }) {
    return (
      <Link to="/aboutus" className={`aboutus-button-instance ${className || ''}`}>
        <button className="aboutus-button">
            <img className="aboutus-img" alt="AboutUs img" src={aboutusImg} />
            <div className="aboutus">About Us</div>
        </button>
      </Link>
    );
}

export default AboutUsButton;