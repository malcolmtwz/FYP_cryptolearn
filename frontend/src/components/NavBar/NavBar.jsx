import React from 'react';
import './NavBar.css';
import cryptographyImage from "../../img/titleImage.png";
import homeImage from "../../img/homeImage.svg";
import notesImage from "../../img/notesImage.svg"
import gameImage from "../../img/gameImage.svg"
import aboutImage from "../../img/aboutusImage.svg" 

import HomeButton from '../Buttons/HomeButton/HomeButton';
import NotesButton from '../Buttons/NotesButton/NotesButton';
import GameButton from '../Buttons/GameButton/GameButton';
import AboutUsButton from '../Buttons/AboutUsButton/AboutUsButton';


function NavBar() {

  return (
    <div className="nav-bar">
      <div className="nav-items">
          <img className="cryptography" alt="Cryptography" src={cryptographyImage} />
          <span className="text-wrapper">Cryptolearn</span>
          <HomeButton     className="button"    homeImg={homeImage} /> 
          <NotesButton    className="button"   notesImg={notesImage} />
          <GameButton     className="button"    gameImg={gameImage} />
          <AboutUsButton  className="button"       aboutusImg={aboutImage}/>
      </div>
    </div>

  );
}

export default NavBar;
