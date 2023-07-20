import React from 'react';
import './NavBar.css';
import cryptographyImage from "../../img/titleImage.png";
import homeImage from "../../img/homeImage.svg";
import notesImage from "../../img/notesImage.svg"
import gameImage from "../../img/gameImage.svg"
import aboutImage from "../../img/aboutusImage.svg" 

import HomeButton from '../HomeButton/HomeButton';
import NotesButton from '../NotesButton/NotesButton';
import GameButton from '../GameButton/GameButton';
import AboutUsButton from '../AboutUsButton/AboutUsButton';


function NavBar() {
  return (
    <div className="nav-bar">
        <div className="title">
            <img className="cryptography" alt="Cryptography" src={cryptographyImage} />
            <div className="text-wrapper">Cryptography game title</div>
        </div>
        <div className='button-group'>
          <HomeButton     className="home-button-instance"    homeImg={homeImage} /> 
          <NotesButton    className="notes-button-instance"   notesImg={notesImage} />
          <GameButton     className="game-button-instance"    gameImg={gameImage} />
          <AboutUsButton  className="about-us-instance"       aboutusImg={aboutImage}/>
        </div>
    </div>

  );
}

export default NavBar;
