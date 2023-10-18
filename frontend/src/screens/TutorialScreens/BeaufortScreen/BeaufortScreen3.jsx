import React, { useState, useEffect } from "react";
import "./BeaufortScreen3.css";

import NavigationButtonBack from "../../../components/Buttons/NavigationButtonBack/NavigationButtonBack";

import AnswerCheck from "../../../components/AnswerCheck/AnswerCheck";
import Background from "../../../components/Background/Background";
import BeaufortCipherAccordion from "../../../components/Tables/BeaufortCipherTable/BeaufortCipherTable";

function BeaufortScreen3() {

    return(
    <Background>
        <h2 className = "h-2"> Quiz Time!</h2>
        <h4> Can you decrypt the Encrpyted Message, 'OKWWKVYP'?</h4>
        <h4> Let our 'Keyword' be 'KEY'!</h4>
        
        <hr className="border-line"/>

        <AnswerCheck correctAnswer="YOU GOT IT" hint ="Try using the table below! Find out what each letter would be encrypted first!"/>
        
        <BeaufortCipherAccordion/>

        <hr className="border-line"/>
        
        <NavigationButtonBack to="/beaufort2"/>

    </Background>
    );

    
}

export default BeaufortScreen3;