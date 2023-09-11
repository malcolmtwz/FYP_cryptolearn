// Question.js
import React, { useState } from 'react';

const Question = ({ questionData, questionNumber, onAnswer, onHint, onSkip }) => {
  const [userAnswer, setUserAnswer] = useState('');
  const [hintUsed, setHintUsed] = useState(false);

  const handleAnswer = () => {
    if (userAnswer.toLowerCase() === questionData.answer.toLowerCase()) {
      const points = hintUsed ? 0.5 : 1; // Award half points if hint was used
      onAnswer(points);
    } else {
      alert('Incorrect answer. Try again.');
    }
  };

  return (
    <div>
      <h3>Question {questionNumber + 1}</h3>
      <h4>{questionData.question}</h4>
      <p>{hintUsed ? questionData.hint : questionData.encryptedText}</p>
      <input
        type="text"
        value={userAnswer}
        onChange={(e) => setUserAnswer(e.target.value)}
      />
      <button onClick={handleAnswer}>Submit</button>
      <button onClick={() => onHint(questionData.hint)}>Hint</button>
      <button onClick={() => onSkip()}>Skip</button>
    </div>
  );
};

export default Question;
