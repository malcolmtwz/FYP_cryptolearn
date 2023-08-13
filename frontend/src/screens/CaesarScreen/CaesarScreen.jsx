import React, { useState, useEffect } from "react";
import "./CaesarScreen.css";

import CaesarDecrypter from "../../components/CaesarDecrypter/CaesarDecrypter";
import NavigationButton from "../../components/NavigationButton/NavigationButton";
import SideBar from "../../components/SideBar/SideBar";
import caesarImg from "../../img/caesar_cipher.png";
import Background from "../../components/Background/Background";


function CaesarScreen() {

    return(
        <Background>
        {/* <div className="caesar-screen">
            <div className="caesar-background"> */}
                {/* <hr className="border-line"/> */}
                <h2 className = "h-2"> A Caesar Cipher is an encoding algorithm that subtitutes a letter for another.</h2>
                <h4> Letters in the alphabets are shifted by a fixed number!</h4>
                <img className="caesar-img" src={caesarImg} alt="Caesar Image"/>
                
                <p> Alphabets in this image is shifted by '-3'</p>
                
                <hr className="border-line"/>

                <h3> Try it below! </h3>

                <NavigationButton to="/caesar2" />
                <CaesarDecrypter />
                
                <hr className="border-line"/>

            {/* </div>
        </div>  */}
        </Background>
    );

    
}

export default CaesarScreen;