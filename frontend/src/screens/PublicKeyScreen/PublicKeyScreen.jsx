import React, { useState, useEffect } from "react";
// import "./PublicKeyScreen.css";

import NavigationButton from "../../components/NavigationButton/NavigationButton";
import Background from "../../components/Background/Background";


function PublicKeyScreen() {

    return(
        <Background>

            <h2 className = "title"> Public Key Encryption</h2>
            <h3> An Asymmetric encryption method using a pair of related keys!</h3>
            <h4> The public key is freely shared, while the private key is kept personally</h4>

            <p> Alphabets in the above table is shifted by '3'</p>
            <p> Therefore, a plaintext 'A' would be encrypted into a ciphertext 'D'</p>
            
            <hr className="border-line"/>

            <h3> Try it below! </h3>

            <NavigationButton to="/caesar2" />
            
            <hr className="border-line"/>
        </Background>
    );

    
}

export default PublicKeyScreen;