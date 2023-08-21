import React, { useState, useEffect } from "react";
import "./VigenereScreen2.css";

import NavigationButton from "../../components/NavigationButton/NavigationButton";
import NavigationButtonBack from "../../components/NavigationButtonBack/NavigationButtonBack";
import AnswerCheck from "../../components/AnswerCheck/AnswerCheck";
import Background from "../../components/Background/Background";
import VigenereCipherAccordion from "../../components/VigenereCipherTable/VigenereCipherTable";

function VigenereScreen2() {

    return(
    <Background>
        <h2 className = "h-2"> Quiz Time!</h2>
        <h4> Can you encrypted the PlainText, 'QUIZTIME'?</h4>
        <h4> Let our 'Keyword' be 'KEY'!</h4>
        
        <hr className="border-line"/>

        <AnswerCheck correctAnswer="AYGJXGWI" hint ="Hint: Since the Keyword is not the same length as the PlainText, you could just extend the Keyword such as 'KEYKEYKE' "/>
        
        <VigenereCipherAccordion/>

        <hr className="border-line"/>
        
        <NavigationButtonBack to="/vig"/>
        <NavigationButton to="/vig3" />

    </Background>
    );

    
}

export default VigenereScreen2;