import React, { useState, useEffect } from 'react';
import Question from '../Question/Question';
import { useParams } from 'react-router-dom';
import { Button, Container, Typography } from '@mui/material';

const Quiz = ({ quizData }) => {
  const [questions, setQuestions] = useState([]);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  useEffect(() => {
    const shuffledQuestions = shuffleArray(quizData);
    setQuestions(shuffledQuestions.slice(0, 10));
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

  return (
    <Container maxWidth="md">
      {questions.length > 0 ? (
        <Question
          questionData={questions[0]}
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