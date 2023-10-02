import React, { useState, useEffect } from "react";
import QuizComponent from "../../components/Quiz/QuizComponent";
import vegetables from "../../data/vegetables.json"
import CaesarQuestions from "../../components/RandomQuestionsGenerator/CaesarQuestions";

function CaesarVegLevelTwoScreen() {

    return(
        <div className="game-screen">
            <div className="game-background">
                <QuizComponent quizData={vegetables} levelChoice={2} cipherType={CaesarQuestions}/>
            </div>
        </div>
    );
}

export default CaesarVegLevelTwoScreen;