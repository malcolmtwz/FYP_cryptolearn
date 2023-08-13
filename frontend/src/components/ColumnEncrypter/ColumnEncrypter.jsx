import React, { useState } from 'react';

function ColumnEncrypter() {
  const [inputText, setInputText] = useState('');
  const [key, setKey] = useState('');
  const [encryptedText, setEncryptedText] = useState('');

  const encrypt = () => {
    const sanitizedKey = key.replace(/[^0-9]/g, '');
    const keyLength = sanitizedKey.length;
    const textWithoutSpaces = inputText.replace(/\s/g, '');
    const numRows = Math.ceil(textWithoutSpaces.length / keyLength);

    const matrix = [];
    for (let i = 0; i < numRows; i++) {
      matrix.push([]);
    }

    let rowIndex = 0;
    for (let i = 0; i < textWithoutSpaces.length; i++) {
      matrix[rowIndex].push(textWithoutSpaces[i]);
      rowIndex = (rowIndex + 1) % numRows;
    }

    matrix.forEach(row => {
      while (row.length < keyLength) {
        row.push('');
      }
    });

    const sortedColumns = sanitizedKey.split('').map(Number).sort();
    let encrypted = '';
    sortedColumns.forEach(colIndex => {
      matrix.forEach(row => {
        encrypted += row[colIndex];
      });
    });

    setEncryptedText(encrypted);
  };

  return (
    <div>
      <h2>Column Transposition Cipher Encryption</h2>
      <textarea
        placeholder="Enter text to encrypt"
        value={inputText}
        onChange={e => setInputText(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="Enter encryption key"
        value={key}
        onChange={e => setKey(e.target.value)}
      />
      <br />
      <button onClick={encrypt}>Encrypt</button>
      <h3>Encrypted Text</h3>
      <textarea value={encryptedText} readOnly />
    </div>
  );
}

export default ColumnEncrypter;
