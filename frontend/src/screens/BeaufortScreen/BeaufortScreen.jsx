import React, { useState, useEffect } from "react";
import "./BeaufortScreen.css";
import NavigationButton from "../../components/NavigationButton/NavigationButton";

function BeaufortScreen() {

    return(
        
        <div className="beaufort-screen">
            <div className="beaufort-background">    
                <NavigationButton to="/other-page" />
            </div>
        </div>
    );
}

export default BeaufortScreen;