import React, { useState, useEffect } from "react";
import "./BeaufortScreen.css";
import NavigationButton from "../../../components/Buttons/NavigationButton/NavigationButton";
import Background from "../../../components/Background/Background";
import BeaufortEncrypter from "../../../components/Encrypters/BeaufortEncrypter/BeaufortEncrypter";
import BeaufortCipherAccordion from "../../../components/Tables/BeaufortCipherTable/BeaufortCipherTable";

function BeaufortScreen() {
    const defaultSelectedRow = 10;
    const defaultSelectedCol = 3; 

    return(
        
        <Background>
            <h2 className = "title"> Beaufort Cipher</h2>
            <h4> A Polyalphabetic cipher that uses a 'Keyword' and a 'Lookup Table' to encrypt messages!</h4>


            {/* <hr className="border-line"/> */}
            {/* <p> </p> */}
            
            <hr className="border-line"/>

            <h5> For Example, each letter in the 'PlainText' below is encrypted using the 'Key' </h5>

            <BeaufortEncrypter />

            <hr className="border-line"/>

            <h5> In the table below, the first letter of our 'Keyword' and 'Plaintext' is highlighted below. Try to find the rest through the table! </h5>
            
            <BeaufortCipherAccordion  defaultSelectedRow={defaultSelectedRow} defaultSelectedCol={defaultSelectedCol}/>


            <hr className="border-line"/>
            <NavigationButton to="/beaufort2" />
        </Background>
    );
}

export default BeaufortScreen;