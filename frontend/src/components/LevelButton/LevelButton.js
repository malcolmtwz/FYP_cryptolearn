import React from 'react';
import { Link } from 'react-router-dom';
import "./LevelButton.css"

const LevelButton = ({ to, text }) => {
  return (
    <Link to={to}>
        <button className="level-button">
            <span className='level-button-text'>{text}</span>
        </button>
    </Link>
  );
};

export default LevelButton;
