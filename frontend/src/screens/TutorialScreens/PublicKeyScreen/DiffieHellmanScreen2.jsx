import React, { useState } from "react";
import Background from "../../../components/Background/Background";
import NavigationButton from "../../../components/Buttons/NavigationButton/NavigationButton";
import NavigationButtonBack from "../../../components/Buttons/NavigationButtonBack/NavigationButtonBack";
import AnswerCheck from "../../../components/AnswerCheck/AnswerCheck";


function DiffieHellmanScreen2() {
  const [userAnswer, setUserAnswer] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);

  // These are the public parameters
  const g = 5;
  const p = 23;

  // Alice's private and public keys
  const a = 6;
  const A = Math.pow(g, a) % p;

  // Bob's private key (for our solution, not provided to the user)
  const b = 9;

  // The shared secret
  const correctSecret = Math.pow(g, a * b) % p;

  const handleCheckAnswer = () => {
      if (parseInt(userAnswer) === b) {
          setIsCorrect(true);
      } else {
          setIsCorrect(false);
      }
  };

  return (
    <Background>
            <h2 className="title">Quiz Time</h2>
            <h4>Given the base <strong>g = {g}</strong> and prime <strong>p = {p}</strong>,</h4>
            <h4>and knowing Alice's public key is <strong>A = {A}</strong> and the shared secret is <strong>s = {correctSecret}</strong>,</h4>
            <h4>can you determine Bob's private key?</h4>

            <hr className="border-line" />

            <AnswerCheck correctAnswer={b.toString()} hint="Hint: Calculate the shared secret using Alice's public key raised to increasing powers until you match the given secret" />



        <NavigationButtonBack to="/diffie" />
    </Background>
  );
}

export default DiffieHellmanScreen2;
