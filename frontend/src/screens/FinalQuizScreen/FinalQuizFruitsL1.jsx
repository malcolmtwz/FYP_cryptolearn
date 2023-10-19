import React, { useState } from "react";
import fruits from "../../data/fruits.json";
import QuizBackground from '../../components/Background/QuizBackground';
import FinalQuiz from "./FinalQuiz";
import FinalQuizComponent from "./FinalQuizComponent";

function FinalQuizFruitsL1() {

    return (
            <QuizBackground>
                <FinalQuizComponent quizData={fruits} levelChoice={1} questionGenerator={FinalQuiz} />
            </QuizBackground>

    );
}

export default FinalQuizFruitsL1;
