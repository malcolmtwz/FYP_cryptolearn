import React, { useState, useEffect }  from 'react'

const VigenereQuestions = ({quizData, count, levelChoice}) => {

    // Generate count number of random questions based on quizData
    const generateRandomQuestions = () => {
        const randomQuestions = [];
        const randomKeys = getRandomKeys();

        if (levelChoice == 1) {
            for (let i=0; i<count; i++){  
                const data = quizData[Math.floor(Math.random() * quizData.length)];

                const questionData = {
                    question: encryptWithRandomKey(data.text, randomKeys[i]),
                    key: randomKeys[i],
                    answer: data.text,
                    hint: `Key is '${randomKeys[i]}'`,
                };

                randomQuestions.push(questionData);
            }
        }

        if (levelChoice == 2) {
            for (let i=0; i<count; i++){
                const data = quizData[Math.floor(Math.random() * quizData.length)];

                const questionData = {
                    question: data.text,
                    answer: encryptWithRandomKey(data.text, randomKeys[i]),
                    hint: `Key is '${randomKeys[i]}'`,
                };

                randomQuestions.push(questionData);
            }
        }


        return randomQuestions;
    };


    // Generate a random key with length of maxLength - minLength
    const generateRandomKey= (minLength, maxLength) => {

        const length = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;
  
        let key = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

        for (let i = 0; i < length; i++){
            const randomIndex = Math.floor(Math.random() * characters.length);
            key += characters.charAt(randomIndex);

        }

        return key;
    };

    // Generate 10 random keys
    const getRandomKeys = () =>{
        const randomKeys = [];

        for (let j = 0; j < 10; j++){
            const randomKey = generateRandomKey(3,5);
            randomKeys.push(randomKey);
        }

        console.log(randomKeys)
        return randomKeys
    };


    // Encrypt text answers with cipher to create questions
    const encryptWithRandomKey = (text, keyword) => {
        let encryptedText = '';

        for (let i =0; i < text.length; i++){
            const textChar = text[i];
            const keywordChar = keyword[i % keyword.length];

            const textCharCode = textChar.charCodeAt(0) - 65;
            const keywordCharCode = keywordChar.charCodeAt(0) - 65;

            const shift = (textCharCode + keywordCharCode) % 26;

            const encryptedChar = String.fromCharCode(shift + 65);

            encryptedText += encryptedChar;
        }

        return encryptedText;
    };

    const questions = generateRandomQuestions();

    return questions;

}

export default VigenereQuestions