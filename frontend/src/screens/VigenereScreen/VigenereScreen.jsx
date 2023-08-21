import React, { useState, useEffect } from "react";
import "./VigenereScreen.css";
import NavigationButton from "../../components/NavigationButton/NavigationButton";
import Background from "../../components/Background/Background";
import VigenereEncrypter from "../../components/VigenereEncrypter/VigenereEncrypter";
import VigenereCipherAccordion from "../../components/VigenereCipherTable/VigenereCipherTable";

function VigenereScreen() {
    const defaultSelectedRow = 10;
    const defaultSelectedCol = 3; 

    return(
        <Background>
            <h2 className = "h-2"> Vigenere Cipher</h2>
            <h4> A Polyalphabetic cipher that uses a 'Keyword' and a 'Lookup Table' to encrypt messages!</h4>

            

            <hr className="border-line"/>

            <h5> For Example, each letter in the 'PlainText' below is encrypted using the 'Key' </h5>

            <VigenereEncrypter/>
            
            <hr className="border-line"/>

            <h5> In the table below, the first letter of our 'Keyword' and 'Plaintext' is highlighted below. Try to find the rest through the table! </h5>
            


            <VigenereCipherAccordion defaultSelectedRow={defaultSelectedRow} defaultSelectedCol={defaultSelectedCol}/>


            <hr className="border-line"/>
            <NavigationButton to="/vig2" />
        </Background>
    );
}

export default VigenereScreen;