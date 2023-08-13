import React, { useState, useEffect } from "react";
import "./BeaufortScreen.css";
import NavigationButton from "../../components/NavigationButton/NavigationButton";
import Background from "../../components/Background/Background";
import BeaufortCipherTable from "../../components/BeaufortCipherTable/BeaufortCipherTable";
import BeaufortEncrypter from "../../components/BeaufortEncrypter/BeaufortEncrypter";

function BeaufortScreen() {
    const defaultSelectedRow = 10;
    const defaultSelectedCol = 3; 

    return(
        
        <Background>
            <h2 className = "h-2"> Beaufort Cipher</h2>
            <h4> A Polyalphabetic cipher that uses a 'Keyword' and a 'Lookup Table' to encrypt messages!</h4>
            
            <hr className="border-line"/>

            <h5> For Example, each letter in the 'PlainText' below is encrypted using the 'Key' </h5>

            <BeaufortEncrypter />

            <hr className="border-line"/>

            <h5> In the table below, the first letter of our 'Keyword' and 'Plaintext' is highlighted below. Try to find the rest through the table! </h5>
            
            <p className="labels"> Text </p>

            <div className="beaufort-table-container">
                <p className="labels"> Key </p>
                <BeaufortCipherTable defaultSelectedRow={defaultSelectedRow} defaultSelectedCol={defaultSelectedCol}/>
            </div>
          

            <hr className="border-line"/>
            <NavigationButton to="/temp-page" />
        </Background>
    );
}

export default BeaufortScreen;