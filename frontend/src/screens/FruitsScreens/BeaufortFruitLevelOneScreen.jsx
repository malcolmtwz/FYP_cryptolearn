import React, { useState, useEffect } from "react";
import QuizComponent from "../../components/Quiz/QuizComponent";
import fruits from "../../data/fruits.json"
import BeaufortTable from "../../components/Tables/BeaufortCipherTable/BeaufortCipherTable"
import BeaufortQuestions from "../../components/RandomQuestionsGenerator/BeaufortQuestions";
import BeaufortCipherAccordion from "../../components/Tables/BeaufortCipherTable/BeaufortCipherTable";

function BeaufortFruitLevelOneScreen() {

    return(
        <div className="game-screen">
            <div className="game-background">
                <QuizComponent quizData={fruits} levelChoice={1} cipherType={BeaufortQuestions}/>
                <BeaufortCipherAccordion isAccordionExpanded={false}/>
            </div>
        </div>
    );
}

export default BeaufortFruitLevelOneScreen;