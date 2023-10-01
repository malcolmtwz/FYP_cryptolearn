import React, { useState, useEffect } from "react";
import QuizComponent from "../../components/Quiz/QuizComponent";
import vegetable from "../../data/vegetables.json"
import BeaufortTable from "../../components/BeaufortCipherTable/BeaufortCipherTable"
import BeaufortQuestions from "../../components/RandomQuestionsGenerator/BeaufortQuestions";
import BeaufortCipherAccordion from "../../components/BeaufortCipherTable/BeaufortCipherTable";

function BeaufortVegLevelTwoScreen() {

    return(
        <div className="game-screen">
            <div className="game-background">
                <QuizComponent quizData={vegetable} levelChoice={2} cipherType={BeaufortQuestions}/>
                <BeaufortCipherAccordion isAccordionExpanded={false}/>
            </div>
        </div>
    );
}

export default BeaufortVegLevelTwoScreen;