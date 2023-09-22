import React, { useState, useEffect } from "react";
import Background from "../../components/Background/Background";
import caesarQuizFruits from "../../data/caesarQuizFruits.json";
import Quiz from "../../components/Quiz/Quiz";

function CaesarFruitLevelOneScreen() {

    return(
        <div className="game-screen">
            <div className="game-background">
                <Quiz quizData={caesarQuizFruits} />
            </div>
        </div>
    );
}

export default CaesarFruitLevelOneScreen;