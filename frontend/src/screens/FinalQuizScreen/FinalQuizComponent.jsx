import React, { useState, useEffect }  from 'react'
import { Button, Container, Typography } from '@mui/material';
import FinalQuestionsComponent from './FinalQuestionsComponent';
import ColumnarTable from '../../components/Tables/ColumnarTable/ColumnarTable';
import BeaufortCipherAccordion from '../../components/Tables/BeaufortCipherTable/BeaufortCipherTable';
import VigenereCipherAccordion from '../../components/Tables/VigenereTable/VigenereCipherTable';
import CaesarTable from '../../components/Tables/CaesarTable/CaesarTable';
import './FinalQuiz.css';


// Generate count number of random questions based on quizData
const generateRandomQuestions = (quizData, count, levelChoice) => {
    const randomQuestions = [];

    if (levelChoice == 1) {
      for (let i=0; i<count; i++){
          const randomRotValue = generateRandomRotValue();
          const data = quizData[Math.floor(Math.random() * quizData.length)];

          const questionData = {
              question: encryptWithRandomRot(data.text, randomRotValue),
              answer: data.text,
              hint: `Shift the letters to ROT-${randomRotValue}`,
          };

          randomQuestions.push(questionData);
      }
    }

    if (levelChoice == 2) {
      for (let i=0; i<count; i++){
          const randomRotValue = generateRandomRotValue();
          const data = quizData[Math.floor(Math.random() * quizData.length)];

          const questionData = {
              question: data.text,
              answer: encryptWithRandomRot(data.text, randomRotValue),
              hint: `Shift the letters to ROT-${randomRotValue}`,
          };

          randomQuestions.push(questionData);
      }
    }


    return randomQuestions;
};

// Generate a random ROT value between 2 and 10
const generateRandomRotValue = () => {
    return Math.floor(Math.random() * 10) + 2;
};

// Encrypt text answers with ROT to create questions
const encryptWithRandomRot = (text,rot) => {
    const encryptedText = [];
        
    for (let i = 0; i < text.length; i++){

        const char = text[i];

        if (char.match(/[A-Z]/)){
            const code = text.charCodeAt(i);

            let encryptedChar = String.fromCharCode(code + rot);

            if (encryptedChar > 'Z') {
              // If the encrypted character goes past 'Z', loop back to 'A'
              encryptedChar = String.fromCharCode(code + rot - 26);
            }

            encryptedText.push(encryptedChar);
        } else {
            encryptedText.push(char);
        }
    }
    return encryptedText.join('')
};
    

const FinalQuizComponent = ({quizData,levelChoice,questionGenerator}) => {
    const [questions, setQuestions] = useState([]);
    const [score, setScore] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [hintUsed, setHintUsed] = useState(false);
    const [showHintTables, setShowHintTables] = useState(false);
    const [cipherHintUsed, setCipherHintUsed] = useState(false);
    // const [totalScore, setTotalScore] = useState(0);
    // const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    

    useEffect(() => {
        // generates 10 random questions and put into constant 'questions'
        const randomQuestions = questionGenerator({quizData, count: 10, levelChoice});
        setQuestions(randomQuestions);
        // console.log(randomQuestions)
    }, [quizData]);

    

    const handleAnswer = (userAnswer, regularHintUsed, isCorrect) => {
        if (isCorrect) {
            let points = 1;
            if (regularHintUsed && cipherHintUsed) {
                points = 0.25; // Both hints used
            } else if (regularHintUsed || cipherHintUsed) {
                points = 0.5; // Either hint used
            } else if (!regularHintUsed || !cipherHintUsed){
                points = 1
            }
            setScore(score + points);
            loadNextQuestion();
        }
        
    };

    const handleSkip = () => {
        loadNextQuestion();
    }

    const handleRetry = () => {
        setScore(0);
        setCurrentQuestion(0);
        const randomQuestions = questionGenerator({quizData, count: 10, levelChoice});
        setQuestions(randomQuestions);
    }

    const loadNextQuestion = () => {
        setCurrentQuestion(currentQuestion + 1);
        setShowHintTables(false);
    };

    const handleRequestHint = () => {
        setCipherHintUsed(true);
        setShowHintTables(!showHintTables); // Toggle the visibility of the hint tables
    };

    return(
        <Container maxWidth='md'>
        {currentQuestion < questions.length ? (
            <div>
                <FinalQuestionsComponent
                    currentQuestion={currentQuestion}
                    questions={questions[currentQuestion]}
                    onAnswer={handleAnswer}
                    onSkip={handleSkip}
                />
                {/* Render the corresponding table based on cipher type */}
                {questions[currentQuestion].cipherType !== 'Diffie-Hellman' && (
                    <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
                        <Button variant="outlined" color="secondary" onClick={handleRequestHint}>Request Cipher Hint</Button>
                    </div>
                )}
                {showHintTables && (
                    <div>
                        {questions[currentQuestion].cipherType === 'Caesar' && <CaesarTable />}
                        {questions[currentQuestion].cipherType === 'Columnar' && <ColumnarTable />}
                        {questions[currentQuestion].cipherType === 'Beaufort' && <BeaufortCipherAccordion />}
                        {questions[currentQuestion].cipherType === 'Vigenere' && <VigenereCipherAccordion />}
                    </div>
                )}
            </div>
        ) : (
            <div className='center-items'>
                <Typography className='quiz-title'>Quiz Completed!</Typography>
                <Typography className='display-score'>Your score: {score}/10</Typography>
                <Button variant='contained' color='primary' onClick={handleRetry} size="large">
                Retry
                </Button>
            </div>
        )}
    </Container>
    );
}

export default FinalQuizComponent;