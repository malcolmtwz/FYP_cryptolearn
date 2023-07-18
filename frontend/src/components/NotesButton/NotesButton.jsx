import React from "react";
import { Link } from 'react-router-dom';
import notesImage from '../../img/notesImage.svg'
import './NotesButton.css';

function NotesButton({ className, notesImg }) {
    return (
      <Link to="/notes" className={`notes-button-instance ${className || ''}`}>
        <button className="notes-button">
            <img className="notes-img" alt="Notes img" src={notesImg} />
            <div className="notes">Notes</div>
        </button>
      </Link>
    );
}

export default NotesButton;