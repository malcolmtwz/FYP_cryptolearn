import React, { useState, useEffect } from "react";
// import "./PublicKeyScreen.css";
import { SvgIcon } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import Person3Icon from '@mui/icons-material/Person3';
import KeyIcon from '@mui/icons-material/Key';

import NavigationButton from "../../components/NavigationButton/NavigationButton";
import Background from "../../components/Background/Background";


function PublicKeyScreen() {

    return(
        <Background>

            <h2 className = "title"> Public Key Encryption</h2>
            <h3> An Asymmetric encryption method using a pair of related keys!</h3>
            <h5> Each users would have 2 keys, a public key that is freely shared, while the private key is kept personally </h5>

            <p> Let's use an example to understand this concept!</p>

            <p> Lets say that Alice and Bob wants to send each other encrypted messages. First, they have to </p>
            <div className="center-items-horizontally">

                <div className="center-items">
                    
                    <SvgIcon component={PersonIcon} fontSize="large" color="primary" style={{ fontSize: 64 }} />  
                    <p> Bob </p>
                    <SvgIcon component={KeyIcon} fontSize="large" color="primary" style={{ fontSize: 48 }} /> 
                    <p> Private Key: 15 </p>                
                    
                </div>

                <div className="center-items">
                    <p> Public Key: </p>
                </div>

                <div className="center-items">
                    <SvgIcon component={Person3Icon} fontSize="large" color="secondary" style={{ fontSize: 64 }} />
                    <p> Alice </p>
                    <SvgIcon component={KeyIcon} fontSize="large" color="secondary" style={{ fontSize: 48 }} />
                    <p> Private Key: 6</p>
                </div>
            </div>


            <p> </p>
            
            <hr className="border-line"/>

            <h3> Try it below! </h3>

            <NavigationButton to="/caesar2" />
            
            <hr className="border-line"/>
        </Background>
    );

    
}

export default PublicKeyScreen;