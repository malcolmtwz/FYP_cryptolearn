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
      <div className="nav-items">
          <img className="cryptography" alt="Cryptography" src={cryptographyImage} />
          <span className="text-wrapper">Cryptography game title</span>
          <HomeButton     className="button"    homeImg={homeImage} /> 
          <NotesButton    className="button"   notesImg={notesImage} />
          <GameButton     className="button"    gameImg={gameImage} />
          <AboutUsButton  className="button"       aboutusImg={aboutImage}/>
      </div>
    </div>

  );
}

export default NavBar;
