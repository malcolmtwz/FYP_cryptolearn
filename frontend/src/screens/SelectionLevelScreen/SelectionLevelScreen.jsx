import React from "react";
import "./SelectionLevelScreen.css";
import { useParams } from "react-router-dom";
import LevelButton from "../../components/Buttons/LevelButton/LevelButton";
import Background from "../../components/Background/Background";
import { style } from "d3";


function SelectionLevelScreen() {
    const { category } = useParams();

    return(
        <div className="selection-quiz-screen">
            <div className="selection-quiz-background">
                <h2 className = "title"> Choose your Quiz</h2>
                <div className="quiz-grid">
                    <div className="center-items">
                        <h1 className="selection-quiz-screen-title">Caesar Quiz</h1>
                        <div className="quiz-container">
                            <LevelButton to={`/${category}/caesar/level-1`} text="Level 1"/> 
                            <LevelButton to={`/${category}/caesar/level-2`} text="Level 2"/> 
                        </div>
                    </div>

                    <div className="center-items">
                        <h1 className="selection-quiz-screen-title">Beaufort Quiz</h1>
                        <div className="quiz-container">
                            <LevelButton to={`/${category}/beaufort/level-1`} text="Level 1"/> 
                            <LevelButton to={`/${category}/beaufort/level-2`} text="Level 2"/> 
                        </div>
                    </div>

                    <div className="center-items">
                        <h1 className="selection-quiz-screen-title">Vigenere Quiz</h1>
                        <div className="quiz-container">
                            <LevelButton to={`/${category}/vigenere/level-1`} text="Level 1"/> 
                            <LevelButton to={`/${category}/vigenere/level-2`} text="Level 2"/> 
                        </div>
                    </div>

                    <div className="center-items">
                        <h1 className="selection-quiz-screen-title">Columnar Quiz</h1>
                        <div className="quiz-container">
                            <LevelButton to={`/${category}/columnar/level-1`} text="Level 1"/> 
                            <LevelButton to={`/${category}/columnar/level-2`} text="Level 2"/> 
                        </div>
                    </div>
                </div>

                {/* <hr className="border-line"/> */}
                
                <div className="center-items">
                    <h1 className="selection-quiz-screen-title" style={{fontSize: '3rem'}}>Final Quiz</h1>
                    <div className="quiz-container">
                        <LevelButton to={`/${category}/final/level-1`} text="Level 1"/> 
                        <LevelButton to={`/${category}/final/level-2`} text="Level 2"/> 
                    </div>
                </div>
            </div>  
        </div>
    
    );
}

export default SelectionLevelScreen;