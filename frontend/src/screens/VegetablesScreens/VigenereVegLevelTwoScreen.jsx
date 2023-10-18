import React, { useState, useEffect } from "react";
import QuizComponent from "../../components/Quiz/QuizComponent";
import vegetable from "../../data/vegetables.json"
import VigenereQuestions from "../../components/RandomQuestionsGenerator/VigenereQuestions";
import VigenereCipherAccordion from "../../components/Tables/VigenereTable/VigenereCipherTable";

function VigenereVegLevelTwoScreen() {

    return(
        <div className="game-screen">
            <div className="game-background">
                <QuizComponent quizData={vegetable} levelChoice={2} cipherType={VigenereQuestions}/>
                <VigenereCipherAccordion isAccordionExpanded={false}/>
            </div>
        </div>
    );
}

export default VigenereVegLevelTwoScreen;