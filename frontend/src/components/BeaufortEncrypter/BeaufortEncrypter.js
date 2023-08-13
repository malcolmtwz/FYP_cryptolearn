import React, { useState } from 'react';

const BeaufortEncrypter = () => {
  const [key, setKey] = useState('KEY'); // Default key
  const [ciphertext, setCiphertext] = useState('DAY'); // Default ciphertext
  const [plaintext, setPlaintext] = useState('TWA');

  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  const generateTable = (key) => {
    const table = {};

    for (let i = 0; i < 26; i++) {
      const row = alphabet.slice(i) + alphabet.slice(0, i);
      table[alphabet[i]] = row;
    }

    return table;
  };

  const handleKeyChange = (event) => {
    const newKey = event.target.value.toUpperCase();
    setKey(newKey);
    decrypt(newKey, ciphertext);
  };

  const handleCiphertextChange = (event) => {
    const newCiphertext = event.target.value.toUpperCase();
    setCiphertext(newCiphertext);
    decrypt(key, newCiphertext);
  };

  const decrypt = (currentKey, currentCiphertext) => {
    const table = generateTable(currentKey);
    const newPlaintext = currentCiphertext
      .split('')
      .map((char, index) => {
        if (alphabet.includes(char)) {
          const keyChar = currentKey[index % currentKey.length];
          const rowIndex = table[keyChar].indexOf(char);
          return alphabet.charAt(rowIndex);
        }
        return char;
      })
      .join('');
    setPlaintext(newPlaintext);
  };

  return (
    <div>
      <h2>Beaufort Cipher Encrypter</h2>
      <div>
        <label>Keyword:</label>
        <input type="text" value={key} onChange={handleKeyChange} />
      </div>
      <div>
        <label>PlainText:</label>
        <input type="text" value={ciphertext} onChange={handleCiphertextChange} />
      </div>
      <div>
        <label>Encrypted Message:</label>
        <input type="text" value={plaintext} readOnly />
      </div>
    </div>
  );
};

export default BeaufortEncrypter;
