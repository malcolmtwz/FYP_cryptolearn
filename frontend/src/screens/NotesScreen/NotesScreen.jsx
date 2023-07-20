import React from "react";
import "./NotesScreen.css";
import SideBar from '../../components/SideBar/SideBar';

function NotesScreen() {
    return(
        
        <div className="notes-screen">
            <div className="sidebar-container">
                <SideBar />
            </div>
            <div className="notes-background">
            
            </div>
        
        </div>
    
    );
}

export default NotesScreen;