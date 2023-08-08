import React, { useState, useEffect } from "react";
import "./VigenereScreen.css";
import NavigationButton from "../../components/NavigationButton/NavigationButton";

function VigenereScreen() {

    return(
        
        <div className="vigenere-screen">
            <div className="vigenere-background">    
                <NavigationButton to="/other-page" />
            </div>
        </div>
    );
}

export default VigenereScreen;