import React, { useState, useEffect } from "react";
import QuizComponent from "../../components/Quiz/QuizComponent";
import vegetables from "../../data/vegetables.json"
import CaesarQuestions from "../../components/RandomQuestionsGenerator/CaesarQuestions";

function CaesarVegLevelOneScreen() {

    return(
        <div className="game-screen">
            <div className="game-background">
                <QuizComponent quizData={vegetables} levelChoice={1} cipherType={CaesarQuestions}/>
            </div>
        </div>
    );
}

export default CaesarVegLevelOneScreen;