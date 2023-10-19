import React from 'react';
import CaesarQuestions from '../../components/RandomQuestionsGenerator/CaesarQuestions';
import ColumnarQuestions from '../../components/RandomQuestionsGenerator/ColumnarQuestions';
import BeaufortQuestions from '../../components/RandomQuestionsGenerator/BeaufortQuestions';
import VigenereQuestions from '../../components/RandomQuestionsGenerator/VigenereQuestions';

const FinalQuiz = ({quizData, count = 10, levelChoice}) => {
    const caesarCount = 3;
    const columnarCount = 2;
    const beaufortCount = 2;
    const vigenereCount = 3;

    const caesarQuestions = CaesarQuestions({quizData, count: caesarCount, levelChoice}).map(q => ({...q, cipherType: 'Caesar'}));
    const columnarQuestions = ColumnarQuestions({quizData, count: columnarCount, levelChoice}).map(q => ({...q, cipherType: 'Columnar'}));
    const beaufortQuestions = BeaufortQuestions({quizData, count: beaufortCount, levelChoice}).map(q => ({...q, cipherType: 'Beaufort'}));
    const vigenereQuestions = VigenereQuestions({quizData, count: vigenereCount, levelChoice}).map(q => ({...q, cipherType: 'Vigenere'}));


    const allQuestions = [...caesarQuestions, ...columnarQuestions, ...beaufortQuestions, ...vigenereQuestions];
    return allQuestions.sort(() => 0.5 - Math.random());
}

export default FinalQuiz;
