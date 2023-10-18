import React, { useEffect, useRef } from "react";
import { ArrowLeftCircle  } from 'react-bootstrap-icons';
import "./NotesScreen.css";
import { Typography } from "@mui/material";

function NotesScreen() {

    return(
        
        <div className="notes-screen">
            <div className="notes-background">
                <h1 className="h-1">Welcome to the Encryption Tutorial</h1>
                <Typography variant="body1" >This tutorial will teach you the basics of a few ciphers!</Typography>
                <Typography variant="body1" > Please click on the sidebar on the left to proceed to specific cipher tutorials! You are encouraged to start from the top!</Typography>
                <ArrowLeftCircle  size={64} color="#61dafb" />
            </div>
        
        </div>
    
    );
}

export default NotesScreen;