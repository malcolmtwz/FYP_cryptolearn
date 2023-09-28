import React, { useState, useEffect } from "react";
import QuizComponent from "../../components/Quiz/QuizComponent";
import vegetables from "../../data/vegetables.json"

function CaesarVegLevelTwoScreen() {

    return(
        <div className="game-screen">
            <div className="game-background">
                <QuizComponent quizData={vegetables} levelChoice={2}/>
            </div>
        </div>
    );
}

export default CaesarVegLevelTwoScreen;