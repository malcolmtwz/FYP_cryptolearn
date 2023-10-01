import React, { useState, useEffect }  from 'react'

const ColumnarQuestions = ({quizData, count, levelChoice}) => {

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

        console.log(randomKeys)
        return randomKeys
    };


    // Encrypt text answers with cipher to create questions
    const encryptWithRandomKey = (text, keyword) => {
        // Create a mapping of keyword characters to their original positions
        const keywordMap = [...keyword].reduce((map, char, index) => {
            if (!(char in map)) {
            map[char] = index;
            }
            return map;
        }, {});

        // Determine the number of columns based on the keyword length
        const numColumns = keyword.length;

        // Pad Text if needed
        const paddedText = text.padEnd(Math.ceil(text.length / numColumns) * numColumns, ' ');

        // Create the grid and fill it with the padded Text
        const grid = [...Array(numColumns)].map(() => []);
        for (let i = 0; i < paddedText.length; i++) {
            const char = paddedText[i];
            const col = i % numColumns;
            grid[col].push(char);
        }

        const sortedColumns = [...keyword].sort((a, b) => keywordMap[a] - keywordMap[b]);

        // Read the encryptedText column by column
        const encryptedText = sortedColumns.map((char) => grid[keywordMap[char]].join('')).join('').trim();

        return encryptedText;
    };

    const questions = generateRandomQuestions();

    return questions;

}
export default ColumnarQuestions