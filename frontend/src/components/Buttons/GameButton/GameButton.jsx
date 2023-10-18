import React from "react";
import { Link } from 'react-router-dom';
import gameImage from '../../../img/gameImage.svg'
import './GameButton.css';

function GameButton({ className, gameImg }) {
    return (
      <Link to="/game" className={`game-button-instance ${className || ''}`}>
        <button className="game-button">
            <img className="game-img" alt="Game img" src={gameImg} />
            <div className="game">Game</div>
        </button>
      </Link>
    );
}

export default GameButton;