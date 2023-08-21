import React, { useState, useEffect } from "react";
import "./VigenereScreen3.css";

import NavigationButton from "../../components/NavigationButton/NavigationButton";
import NavigationButtonBack from "../../components/NavigationButtonBack/NavigationButtonBack";
import AnswerCheck from "../../components/AnswerCheck/AnswerCheck";
import Background from "../../components/Background/Background";
import VigenereCipherAccordion from "../../components/VigenereCipherTable/VigenereCipherTable";

function VigenereScreen3() {

    return(
    <Background>
        <h2 className = "h-2"> Quiz Time!</h2>
        <h4> Can you decrypt the Encrypted, 'ISSQSRSX'?</h4>
        <h4> Let our 'Keyword' be 'KEY'!</h4>
        
        <hr className="border-line"/>

        <AnswerCheck correctAnswer="YOUGOTIT" hint ="Try using the table below! Find out what each letter would be encrypted first!"/>
        
        <VigenereCipherAccordion/>

        <hr className="border-line"/>
        
        <NavigationButtonBack to="/vig2"/>

    </Background>
    );

    
}

export default VigenereScreen3;