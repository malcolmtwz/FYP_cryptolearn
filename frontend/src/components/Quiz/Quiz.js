import React, { useState, useEffect } from 'react';
import Question from '../Question/Question';
import { useParams } from 'react-router-dom';
import { Button, Container, Typography } from '@mui/material';

const Quiz = ({ quizData }) => {
  const [questions, setQuestions] = useState([]);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  useEffect(() => {
    // const shuffledQuestions = shuffleArray(quizData);
    // setQuestions(shuffledQuestions.slice(0, 10));
    const randomQuestions = generateRandomQuestions(quizData, 10);
    setQuestions(randomQuestions);
  }, [quizData]);

  const handleAnswer = (points) => {
    setScore(score + points);
    loadNextQuestion();
  };

  const handleSkip = () => {
    loadNextQuestion();
  };

  const handleRetry = () => {
    const shuffledQuestions = shuffleArray(quizData);
    setQuestions(shuffledQuestions.slice(0, 10));
    setScore(0);
    setCurrentQuestion(0);
  };

  const loadNextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
    const remainingQuestions = [...questions];
    remainingQuestions.shift();
    setQuestions(remainingQuestions);
  };

  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const generateRandomRotValue = () => {
    // Generate a random ROT value between 1 and 25
    return Math.floor(Math.random() * 25) + 1;
  };

  const encryptWithRandomRot = (text, rot) => {
    // Encrypt text using the given ROT value
    const encryptedText = [];

    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      if (char.match(/[a-z]/i)) {
        const code = text.charCodeAt(i);
        const encryptedChar = String.fromCharCode(
          code + (char.toUpperCase() === char ? rot : -rot)
        );
        encryptedText.push(encryptedChar);
      } else {
        encryptedText.push(char);
      }
    }

    return encryptedText.join('');
  };

  const generateRandomQuestions = (quizData, count) => {
    const randomQuestions = [];

    for (let i = 0; i < count; i++) {
      const randomRotValue = generateRandomRotValue();
      const data = quizData[Math.floor(Math.random() * quizData.length)];
      const questionData = {
        answer: encryptWithRandomRot(data.answer, randomRotValue),
        hint: `Shift the letters to ROT-${randomRotValue}`,
      };

      randomQuestions.push(questionData);
    }

    return randomQuestions;
  };

  return (
    <Container maxWidth="md">
      {questions.length > 0 ? (
        <Question
          questionData={questions[currentQuestion]}
          questionNumber={currentQuestion}
          onAnswer={handleAnswer}
          onHint={(hint) => alert(`Hint: ${hint}`)}
          onSkip={handleSkip}
        />
      ) : (
        <div>
          <Typography variant="h4">Quiz Completed!</Typography>
          <Typography variant="body1">Your score: {score}/10</Typography>
          <Button variant="contained" color="primary" onClick={handleRetry}>
            Retry
          </Button>
        </div>
      )}
    </Container>
  );
};

export default Quiz;