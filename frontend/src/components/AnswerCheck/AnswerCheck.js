import React, { useState } from 'react';
import "./AnswerCheck.css";

function AnswerCheck({ correctAnswer, hint }) {
  const [userInput, setUserInput] = useState('');
  const [isCorrect, setIsCorrect] = useState(null);

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const checkAnswer = () => {
    setIsCorrect(userInput === correctAnswer);
  };

  return (
    <div>
      <div className='input-box-container'>
      <input className="input-box"
        type="text"
        value={userInput}
        onChange={handleInputChange}
        placeholder="Enter your answer"
      />
      </div>
      <div className="custom-button-container">
        <button className="custom-button" onClick={checkAnswer}>
          <span className="button-text">Check</span>
        </button>
      </div>
      {isCorrect ? (<p className='checked-text'>Correct answer!</p>) 
      : ( <p className='checked-text'>{hint}</p> ) }
    </div>
  );
}

export default AnswerCheck;
