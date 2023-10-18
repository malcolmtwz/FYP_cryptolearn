import React, { useState, useEffect } from "react";
import QuizComponent from "../../components/Quiz/QuizComponent";
import vegetables from "../../data/vegetables.json"
import ColumnarQuestions from "../../components/RandomQuestionsGenerator/ColumnarQuestions";
import ColumnarTable from "../../components/Tables/ColumnarTable/ColumnarTable";

function ColumnarVegLevelTwoScreen() {

    return(
        <div className="game-screen">
            <div className="game-background">
                <QuizComponent quizData={vegetables} levelChoice={2} cipherType={ColumnarQuestions}/>
                <ColumnarTable />
            </div>
        </div>
    );
}

export default ColumnarVegLevelTwoScreen;