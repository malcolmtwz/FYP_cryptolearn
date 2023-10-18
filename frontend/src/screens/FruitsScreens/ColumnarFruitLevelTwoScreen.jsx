import React, { useState, useEffect } from "react";
import QuizComponent from "../../components/Quiz/QuizComponent";
import fruits from "../../data/fruits.json"
import ColumnarQuestions from "../../components/RandomQuestionsGenerator/ColumnarQuestions";

function ColumnarFruitLevelTwoScreen() {

    return(
        <div className="game-screen">
            <div className="game-background">
                <QuizComponent quizData={fruits} levelChoice={2} cipherType={ColumnarQuestions}/>
            </div>
        </div>
    );
}

export default ColumnarFruitLevelTwoScreen;