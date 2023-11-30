import React, { useState, useEffect } from "react";
import "./CaesarScreen2.css";

import CaesarEncrypter from "../../../components/Encrypters/CaesarEncrypter/CaesarEncrypter";
import NavigationButton from "../../../components/Buttons/NavigationButton/NavigationButton";
import SideBar from "../../../components/SideBar/SideBar";
import NavigationButtonBack from "../../../components/Buttons/NavigationButtonBack/NavigationButtonBack";

import AnswerCheck from "../../../components/AnswerCheck/AnswerCheck";
import CaesarTable from "../../../components/Tables/CaesarTable/CaesarTable";

function CaesarScreen2() {

    return(
        
        <div className="caesar2-screen">
            <div className="caesar2-background">
                
                
<h2 className = "title"> Quiz Time</h2>
                <h4> Can you encrypted 'QuizTime' into a message shifted by 2?</h4>
                
                <hr className="border-line"/>

                <AnswerCheck correctAnswer="SwkbVkog" hint ="Hint: The letter 'A', when shifted by 2, would be 'C'"/>
               
                <CaesarTable defaultRotation="0" keepClosed={1}/>
               
                <NavigationButtonBack to="/caesar"/>
                <NavigationButton to="/caesar3" />

            </div>
        </div> 
    );

    
}

export default CaesarScreen2;