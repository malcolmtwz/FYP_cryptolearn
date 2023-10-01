import React, { useState, useEffect } from "react";
import QuizComponent from "../../components/Quiz/QuizComponent";
import vegetable from "../../data/vegetables.json"
import VigenereTable from "../../components/VigenereCipherTable/VigenereCipherTable"
import VigenereQuestions from "../../components/RandomQuestionsGenerator/VigenereQuestions";
import VigenereCipherAccordion from "../../components/VigenereCipherTable/VigenereCipherTable";

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