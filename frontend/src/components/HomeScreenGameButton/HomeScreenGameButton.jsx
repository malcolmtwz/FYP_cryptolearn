import React from "react";
import { Link } from 'react-router-dom';
import './HomeScreenGameButton.css';

function HomeScreenGameButton({ className }) {
    return (
      <Link to="/game" className={`game-button-instance ${className || ''}`}>
        <button className="home-game-button">
            <div className="home-game-button-text">Test your Skills!</div>
        </button>
      </Link>
    );
}

export default HomeScreenGameButton;