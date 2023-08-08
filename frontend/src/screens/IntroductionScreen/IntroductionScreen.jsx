import React, { useState, useEffect } from "react";
import "./IntroductionScreen.css";
import NavigationButton from "../../components/NavigationButton/NavigationButton";

function IntroductionScreen() {

    return(
        
        <div className="introduction-screen">
            <div className="introduction-background">    
                <NavigationButton to="/other-page" />
            </div>
        </div>
    );
}

export default IntroductionScreen;