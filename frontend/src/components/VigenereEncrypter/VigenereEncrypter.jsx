import React, { useState } from 'react';

const VigenereEncrypter = () => {
  const [key, setKey] = useState('KEY'); // Default key
  const [plaintext, setPlaintext] = useState('DAY'); // Default plaintext
  const [ciphertext, setCiphertext] = useState('NEW');

  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

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
    let newCiphertext = '';
    for (let i = 0; i < currentPlaintext.length; i++) {
      const plaintextChar = currentPlaintext[i];
      if (alphabet.includes(plaintextChar)) {
        const keyChar = currentKey[i % currentKey.length];
        const keyIndex = alphabet.indexOf(keyChar);
        const plaintextIndex = alphabet.indexOf(plaintextChar);
        const ciphertextIndex = (plaintextIndex + keyIndex) % 26;
        newCiphertext += alphabet[ciphertextIndex];
      } else {
        newCiphertext += plaintextChar;
      }
    }
    setCiphertext(newCiphertext);
  };

  return (
    <div>
      <h2>Vigenère Cipher Encrypter</h2>
      <div>
        <label>Keyword:</label>
        <input type="text" value={key} onChange={handleKeyChange} />
      </div>
      <div>
        <label>PlainText:</label>
        <input type="text" value={plaintext} onChange={handlePlaintextChange} />
      </div>
      <div>
        <label>Encrypted Message:</label>
        <input type="text" value={ciphertext} readOnly />
      </div>
    </div>
  );
};

export default VigenereEncrypter;
