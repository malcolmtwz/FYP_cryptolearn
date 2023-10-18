import React, { useState, useEffect } from "react";
import QuizComponent from "../../components/Quiz/QuizComponent";
import vegetable from "../../data/vegetables.json"
import VigenereQuestions from "../../components/RandomQuestionsGenerator/VigenereQuestions";
import VigenereCipherAccordion from "../../components/Tables/VigenereTable/VigenereCipherTable";

function VigenereVegLevelOneScreen() {

    return(
        <div className="game-screen">
            <div className="game-background">
                <QuizComponent quizData={vegetable} levelChoice={1} cipherType={VigenereQuestions}/>
                <VigenereCipherAccordion isAccordionExpanded={false}/>
            </div>
        </div>
    );
}

export default VigenereVegLevelOneScreen;