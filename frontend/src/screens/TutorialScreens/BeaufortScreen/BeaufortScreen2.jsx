import React, { useState, useEffect } from "react";
import "./BeaufortScreen2.css";

import NavigationButton from "../../../components/Buttons/NavigationButton/NavigationButton";
import NavigationButtonBack from "../../../components/Buttons/NavigationButtonBack/NavigationButtonBack";
import AnswerCheck from "../../../components/AnswerCheck/AnswerCheck";
import Background from "../../../components/Background/Background";
import BeaufortCipherAccordion from "../../../components/Tables/BeaufortCipherTable/BeaufortCipherTable";

function BeaufortScreen2() {

    return(
    <Background>
        
<h2 className = "title"> Quiz Time</h2>
        <h4> Can you encrypted the PlainText, 'QUIZTIME'?</h4>
        <h4> Let our 'Keyword' be 'KEY'!</h4>
        
        <hr className="border-line"/>

        <AnswerCheck correctAnswer="UKQLLQYA" hint ="Hint: Since the Keyword is not the same length as the PlainText, you could just extend the Keyword such as 'KEYKEYKE' "/>
        
        <BeaufortCipherAccordion/>

        <hr className="border-line"/>
        
        <NavigationButtonBack to="/beaufort"/>
        <NavigationButton to="/beaufort3" />

    </Background>
    );

    
}

export default BeaufortScreen2;