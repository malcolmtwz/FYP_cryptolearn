import React, { useState } from 'react';

const ColumnEncrypter = () => {
  const [key, setKey] = useState('KEY'); // Default key
  const [plaintext, setPlaintext] = useState('DAY'); // Default plaintext
  const [ciphertext, setCiphertext] = useState('ADY');

  const handleKeyChange = (event) => {
    const newKey = event.target.value.toUpperCase();
    setKey(newKey);
    encrypt(newKey, plaintext);
  };

  const handlePlaintextChange = (event) => {
    const newPlaintext = event.target.value.toUpperCase();
    setPlaintext(newPlaintext);
    encrypt(key, newPlaintext);
  };

  const encrypt = (currentKey, currentPlaintext) => {
    const sortedKey = currentKey.split('').sort().join('');
    const numCols = currentKey.length;
    const numRows = Math.ceil(currentPlaintext.length / numCols);
    const matrix = new Array(numRows)
      .fill('')
      .map(() => new Array(numCols).fill(''));

    let plaintextIndex = 0;
    for (let col = 0; col < numCols; col++) {
      const keyIndex = currentKey.indexOf(sortedKey[col]);
      for (let row = 0; row < numRows; row++) {
        if (plaintextIndex < currentPlaintext.length) {
          matrix[row][keyIndex] = currentPlaintext[plaintextIndex];
          plaintextIndex++;
        }
      }
    }

    let newCiphertext = '';
    for (let col = 0; col < numCols; col++) {
      for (let row = 0; row < numRows; row++) {
        if (matrix[row][col] !== undefined) {
          newCiphertext += matrix[row][col];
        }
      }
    }

    setCiphertext(newCiphertext);
  };

  return (
    <div>
      <h2>Columnar Transposition Cipher Encrypter</h2>
      <div>
        <label>Key:</label>
        <input type="text" value={key} onChange={handleKeyChange} />
      </div>
      <div>
        <label>Plaintext:</label>
        <input type="text" value={plaintext} onChange={handlePlaintextChange} />
      </div>
      <div>
        <label>Ciphertext:</label>
        <input type="text" value={ciphertext} readOnly />
      </div>
    </div>
  );
};

export default ColumnEncrypter;
