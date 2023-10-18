import React, { useState, useEffect }  from 'react'
import { Button, Container, Typography } from '@mui/material';
import QuestionsComponent from '../Question/QuestionsComponent';

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
    

const QuizComponent = ({quizData,levelChoice,cipherType}) => {
    const [questions, setQuestions] = useState([]);
    const [score, setScore] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(0);

    useEffect(() => {
        // generates 10 random questions and put into constant 'questions'
        const randomQuestions = cipherType({quizData, count: 10, levelChoice});
        setQuestions(randomQuestions);
        // console.log(randomQuestions)
    }, [quizData]);

    const handleAnswer = (points) => {
        setScore(score + points);
        loadNextQuestion();
    }

    const handleSkip = () => {
        loadNextQuestion();
    }

    const handleRetry = () => {
        setScore(0);
        setCurrentQuestion(0);
        const randomQuestions = cipherType({quizData, count: 10, levelChoice});
        setQuestions(randomQuestions);
    }

    const loadNextQuestion = () => {
        setCurrentQuestion(currentQuestion + 1);
    };

    return(
        <Container maxWidth='md'>
            {currentQuestion < questions.length ? (
                <QuestionsComponent
                    currentQuestion={currentQuestion}
                    questions={questions[currentQuestion]}
                    onAnswer={handleAnswer}
                    onSkip={handleSkip}
                />
            ) : (
                <div className='center-items'>
                    <Typography className='h-1'>Quiz Completed!</Typography>
                    <Typography className='display-score'>Your score: {score}/10</Typography>
                    <Button variant='contained' color='primary' onClick={handleRetry} size="large">
                    Retry
                    </Button>
                </div>
            )}
        </Container>
    );
}

export default QuizComponent;