import React, { useState, useEffect } from "react";
import "./CaesarScreen.css";
import CaesarTable from "../../components/CaesarTable/CaesarTable"
import CaesarDecrypter from "../../components/CaesarDecrypter/CaesarDecrypter";

function CaesarScreen() {

    return(
        
        <div className="caesar-screen">
            <div className="caesar-background">
                <CaesarDecrypter />
            </div>
        </div>
    );

    <CaesarTable/>
}

export default CaesarScreen;