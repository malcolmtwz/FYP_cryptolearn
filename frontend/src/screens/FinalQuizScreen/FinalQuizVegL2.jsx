import React, { useState, useEffect } from "react";
import QuizComponent from "../../components/Quiz/QuizComponent";
import vegetable from "../../data/vegetables.json"
import QuizBackground from '../../components/Background/QuizBackground';
import FinalQuiz from "./FinalQuiz"

function FinalQuizVegL2() {

    return(
        <QuizBackground>
                <QuizComponent quizData={vegetable} levelChoice={2} cipherType={FinalQuiz} />
        </QuizBackground>
    );
}

export default FinalQuizVegL2;