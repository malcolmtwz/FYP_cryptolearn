import React, { useState } from "react";
import QuizComponent from "../../components/Quiz/QuizComponent";
import fruits from "../../data/fruits.json";
import QuizBackground from '../../components/Background/QuizBackground';
import FinalQuiz from "./FinalQuiz";

function FinalQuizFruitsL1() {

    return (
            <QuizBackground>
                <QuizComponent quizData={fruits} levelChoice={1} cipherType={FinalQuiz} />
            </QuizBackground>

    );
}

export default FinalQuizFruitsL1;
