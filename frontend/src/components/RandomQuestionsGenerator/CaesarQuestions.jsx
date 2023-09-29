import React, { useState, useEffect }  from 'react'

const CaesarQuestions = ({quizData, count, levelChoice}) => {

    // Generate count number of random questions based on quizData
    const generateRandomQuestions = () => {
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

    const questions = generateRandomQuestions();

    return questions;

}

export default CaesarQuestions