import React, { useState, useEffect }  from 'react'

const ColumnarQuestions = ({quizData, count, levelChoice}) => {
    console.log("ColumnarQuestions component invoked!");

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
            const randomKey = generateRandomKey(4,6);
            randomKeys.push(randomKey);
        }

        // console.log(randomKeys)
        return randomKeys
    };


    // Encrypt text answers with cipher to create questions
    const encryptWithRandomKey = (text, keyword) => {

        // console.log(`Encrypting text: ${text} with keyword: ${keyword}`);

        keyword = keyword.toUpperCase();
        const sortedKeyword = [...keyword].map((char, index) => ({ char, index }))
                                         .sort((a, b) => a.char.localeCompare(b.char));
        const numColumns = keyword.length;
        const numRows = Math.ceil(text.length / numColumns);
        const requiredLength = numRows * numColumns;
        const paddedText = text.padEnd(requiredLength);
    
        const grid = [];
        for (let i = 0; i < numRows; i++) {
            for (let j = 0; j < numColumns; j++) {
                if (!grid[j]) grid[j] = [];
                grid[j].push(paddedText[i * numColumns + j]);
            }
        }
    
        const encryptedText = sortedKeyword.map(pos => grid[pos.index].join('')).join('').trim();
        // console.log(`Encrypted text: ${encryptedText}`);

        return encryptedText;
    };
    
    const questions = generateRandomQuestions();
    // console.log(`Generated questions:`, questions);

    return questions;

}
export default ColumnarQuestions