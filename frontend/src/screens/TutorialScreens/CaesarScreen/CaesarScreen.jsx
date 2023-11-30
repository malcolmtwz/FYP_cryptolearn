import React, { useState, useEffect } from "react";
// import "./CaesarScreen.css";

import CaesarEncrypter from "../../../components/Encrypters/CaesarEncrypter/CaesarEncrypter";
import NavigationButton from "../../../components/Buttons/NavigationButton/NavigationButton";
import Background from "../../../components/Background/Background";
import CaesarTable from "../../../components/Tables/CaesarTable/CaesarTable";
import { Typography } from "@mui/material";


function CaesarScreen() {

    return(
        <Background>

            <h2 className = "title"> Caesar Cipher</h2>
            <h4> An encoding algorithm that subtitutes a letter for another.</h4>
            <h4> Letters in the alphabets are shifted by a fixed number!</h4>

            <CaesarTable defaultRotation="3" keepClosed={1}/>
            <Typography variant="h6"> Alphabets in the above table is shifted by '3'</Typography>
            <Typography variant="h6"> Therefore, a plaintext 'A' would be encrypted into a ciphertext 'D' </Typography>
            
            <hr className="border-line"/>

            <h3> Try it below! </h3>

            <NavigationButton to="/caesar2" />
            <CaesarEncrypter defaultMessage="Caesar" defaultShift="3"/>
            
            <hr className="border-line"/>

        </Background>
    );

    
}

export default CaesarScreen;