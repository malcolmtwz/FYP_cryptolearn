import React from "react";
import { Link } from 'react-router-dom';
import './HomeScreenNotesButton.css';

function HomeScreenNotesButton({ className }) {
    return (
      <Link to="/notes" className={`notes-button-instance ${className || ''}`}>
        <button className="home-notes-button">
            <div className="home-notes-button-text">Start Learning!</div>
        </button>
      </Link>
    );
}

export default HomeScreenNotesButton;