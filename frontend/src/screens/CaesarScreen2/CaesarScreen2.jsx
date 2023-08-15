import React, { useState, useEffect } from "react";
import "./CaesarScreen2.css";

import CaesarDecrypter from "../../components/CaesarDecrypter/CaesarDecrypter";
import NavigationButton from "../../components/NavigationButton/NavigationButton";
import SideBar from "../../components/SideBar/SideBar";
import NavigationButtonBack from "../../components/NavigationButtonBack/NavigationButtonBack";
import AnswerCheck from "../../components/AnswerCheck/AnswerCheck";
import CaesarTable from "../../components/CaesarTable/CaesarTable";

function CaesarScreen2() {

    return(
        
        <div className="caesar2-screen">
            <div className="caesar2-background">
                
                <h2 className = "h-2"> Quiz Time!</h2>
                <h4> Can you encrypted 'QuizTime' into a message shifted by 2?</h4>
                
                <hr className="border-line"/>

                <AnswerCheck correctAnswer="SwkbVkog" hint ="Hint: The letter 'A', when shifted by 2, would be 'C'"/>
               
                <CaesarTable defaultRotation="0"/>
               
                <NavigationButtonBack to="/caesar"/>
                <NavigationButton to="/caesar3" />

            </div>
        </div> 
    );

    
}

export default CaesarScreen2;