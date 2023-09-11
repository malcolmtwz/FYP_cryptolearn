import React from "react";
import "./GameScreen.css";
import LevelButton from "../../components/LevelButton/LevelButton";


function GameScreen() {
    return(
        <div className="game-screen">
            <div className="game-background">
                <h1 className="game-screen-title">Caesar Quiz</h1>
                <div className="quiz-container">
                    <LevelButton to="/caesar-quiz-1" text="Level 1"/> 
                    <LevelButton to="/caesar-quiz-2" text="Level 2"/> 
                </div>

                <h1 className="game-screen-title">Beaufort Quiz</h1>
                <div className="quiz-container">
                    <LevelButton to="/beaufort-quiz-1" text="Level 1"/> 
                    <LevelButton to="/beaufort-quiz-2" text="Level 2"/> 
                </div>

                <h1 className="game-screen-title">Vigenere Quiz</h1>
                <div className="quiz-container">
                    <LevelButton to="/vig-quiz-1" text="Level 1"/> 
                    <LevelButton to="/vig-quiz-2" text="Level 2"/> 
                </div>

                <h1 className="game-screen-title">Columnar Quiz</h1>
                <div className="quiz-container">
                    <LevelButton  to="/columnar-quiz-1" text="Level 1"/> 
                    <LevelButton to="/columnar-quiz-2" text="Level 2"/> 
                </div>
                
            </div>
        </div>
    
    );
}

export default GameScreen;