import React from "react";
import "./QuizBackground.css";

function Background({ children }) {
  return (
    <div className="quiz-screen">
      <div className="quiz-background">{children}</div>
    </div>
  );
}

export default Background;