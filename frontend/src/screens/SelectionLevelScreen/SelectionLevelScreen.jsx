import React from "react";
import "./SelectionLevelScreen.css";
import { useParams } from "react-router-dom";
import LevelButton from "../../components/LevelButton/LevelButton";


function SelectionLevelScreen() {
    const { category } = useParams();

    return(
        <div className="selection-quiz-screen">
            <div className="selection-quiz-background">
                {/* <h1 className="h-1">Choose your Level</h1> */}
                <h1 className="selection-quiz-screen-title">Caesar Quiz</h1>
                <div className="quiz-container">
                    <LevelButton to={`/${category}/caesar/level-1`} text="Level 1"/> 
                    <LevelButton to={`/${category}/caesar/level-2`} text="Level 2"/> 
                </div>

                <h1 className="selection-quiz-screen-title">Beaufort Quiz</h1>
                <div className="quiz-container">
                    <LevelButton to={`/${category}/beaufort/level-1`} text="Level 1"/> 
                    <LevelButton to={`/${category}/beaufort/level-2`} text="Level 2"/> 
                </div>

                <h1 className="selection-quiz-screen-title">Vigenere Quiz</h1>
                <div className="quiz-container">
                    <LevelButton to={`/${category}/vigenere/level-1`} text="Level 1"/> 
                    <LevelButton to={`/${category}/vigenere/level-2`} text="Level 2"/> 
                </div>

                <h1 className="selection-quiz-screen-title">Columnar Quiz</h1>
                <div className="quiz-container">
                    <LevelButton to={`/${category}/columnar/level-1`} text="Level 1"/> 
                    <LevelButton to={`/${category}/columnar/level-2`} text="Level 2"/> 
                </div>
                
            </div>
        </div>
    
    );
}

export default SelectionLevelScreen;