import React, { useState, useEffect } from "react";
import "./ColumnScreen.css";
import NavigationButton from "../../components/NavigationButton/NavigationButton";

function ColumnScreen() {

    return(
        
        <div className="column-screen">
            <div className="column-background">    
                <NavigationButton to="/other-page" />
            </div>
        </div>
    );
}

export default ColumnScreen;