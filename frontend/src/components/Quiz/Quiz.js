// Quiz.js
import React, { useState, useEffect } from 'react';
import Question from '../Question/Question';

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
    <div>
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
          <h2>Quiz Completed!</h2>
          <p>Your score: {score}/10</p>
          <button onClick={handleRetry}>Retry</button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
