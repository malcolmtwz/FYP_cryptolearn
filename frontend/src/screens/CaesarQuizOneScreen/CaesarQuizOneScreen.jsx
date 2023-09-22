import React, { useState, useEffect } from "react";
import Background from "../../components/Background/Background";
import quizData from "../../data/caesarQuizFruits.json";
import Quiz from "../../components/Quiz/Quiz";

function CaesarQuizOneScreen() {

    return(
        <div className="game-screen">
            <div className="game-background">
                <Quiz quizData={quizData} />
            </div>
        </div>
    );
}

export default CaesarQuizOneScreen;