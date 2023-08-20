import React, { useState, useEffect } from "react";
import "./BeaufortScreen2.css";

import NavigationButton from "../../components/NavigationButton/NavigationButton";
import NavigationButtonBack from "../../components/NavigationButtonBack/NavigationButtonBack";
import AnswerCheck from "../../components/AnswerCheck/AnswerCheck";
import CaesarTable from "../../components/CaesarTable/CaesarTable";
import Background from "../../components/Background/Background";
import BeaufortCipherAccordion from "../../components/BeaufortCipherTable/BeaufortCipherTable";

function BeaufortScreen2() {

    return(
    <Background>
        <h2 className = "h-2"> Quiz Time!</h2>
        <h4> Can you encrypted the PlainText, 'QUIZTIME'?</h4>
        <h4> Let our 'Keyword' be 'KEY'!</h4>
        
        <hr className="border-line"/>

        <AnswerCheck correctAnswer="UKQLLQYA" hint ="Hint: Since the Keyword is not the same length as the PlainText, you could just extend the Keyword such as 'KEYKEYKE' "/>
        
        <BeaufortCipherAccordion/>

        <hr className="border-line"/>
        
        <NavigationButtonBack to="/beaufort"/>
        <NavigationButton to="/beaufort2" />

    </Background>
    );

    
}

export default BeaufortScreen2;