import React, { useState, useEffect } from "react";
import QuizComponent from "../../components/Quiz/QuizComponent";
import fruits from "../../data/fruits.json"
import QuizBackground from "../../components/Background/QuizBackground";
import FinalQuiz from "./FinalQuiz"

function FinalQuizFruitsL2() {

    return(
        <QuizBackground>
                <QuizComponent quizData={fruits} levelChoice={2} cipherType={FinalQuiz} />
        </QuizBackground>
    );
}

export default FinalQuizFruitsL2;