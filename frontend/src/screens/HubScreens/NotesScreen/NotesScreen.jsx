import React, { useEffect, useRef } from "react";
import { ArrowLeftCircle  } from 'react-bootstrap-icons';
import "./NotesScreen.css";

function NotesScreen() {

    return(
        
        <div className="notes-screen">
            <div className="notes-background">
                <h1 className="h-1">Welcome to the Encryption Tutorial</h1>
                <p>This tutorial will teach you the basics of a few ciphers!</p>
                <p> Please click on the sidebar on the left to proceed to specific cipher tutorials!</p>
                <ArrowLeftCircle  size={64} color="#61dafb" />
            </div>
        
        </div>
    
    );
}

export default NotesScreen;