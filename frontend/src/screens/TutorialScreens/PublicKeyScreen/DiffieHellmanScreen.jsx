import React, { useState } from "react";
import Background from "../../../components/Background/Background";
import NavigationButton from "../../../components/Buttons/NavigationButton/NavigationButton";
import NavigationButtonBack from "../../../components/Buttons/NavigationButtonBack/NavigationButtonBack";
import AnswerCheck from "../../../components/AnswerCheck/AnswerCheck";


function DiffieHellmanScreen() {
  const [userAnswer, setUserAnswer] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);

  // These are the public parameters
  const g = 5; // primitive root modulo p
  const p = 23; // prime number

  // Alice's
  const a = 6;

  // Bob's public key
  const B = Math.pow(g, 15) % p;

  // The correct shared secret
  const correctSecret = Math.pow(B, a) % p;

  const handleCheckAnswer = () => {
    if (parseInt(userAnswer) === correctSecret) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };

  return (
    <Background>
        <h2 className = "title"> Quiz Time</h2>
        <h4> Given the base <strong> g = {g} </strong> and prime <strong>  p = {p} </strong>, </h4>
        <h4> and knowing Alice's private key is <strong>  A = {a} </strong> and Bob's public key is <strong>  B = {B} </strong>, </h4>
        <h4> can you compute the shared secret? </h4>

        <hr className="border-line" />

        <AnswerCheck correctAnswer={correctSecret.toString()} hint="Hint: Use the formula for public key!" />


        <NavigationButtonBack to="/public" />
        <NavigationButton to="/diffie2" />
    </Background>
  );
}

export default DiffieHellmanScreen;
