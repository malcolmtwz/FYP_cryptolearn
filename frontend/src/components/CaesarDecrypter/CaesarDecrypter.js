import React, { useState, useEffect } from "react";
import "./CaesarDecrypter.css"

function CaesarDecrypter() {
    const [originalMessage, setOriginalMessage] = useState("Learning Is Fun!");
    const [shift, setShift] = useState(2);
    const [encryptedMessage, setEncryptedMessage] = useState("");

    useEffect(() => {
        startEncryption();
      }, [originalMessage, shift]);

    function startEncryption() {
        let encryptedMessage = "";
        const shiftValue = shift ? Number(shift) : 0;
        for (let letter of originalMessage) {
          encryptedMessage += shiftLetter(letter, shiftValue);
        }
        setEncryptedMessage(encryptedMessage);
    }

    function shiftLetter(letter, shift) {
        const isLowerCase = letter.match(/[a-z]/);
        const isUpperCase = letter.match(/[A-Z]/);
      
        if (isLowerCase || isUpperCase) {
          const alphabetStart = isLowerCase ? "a".charCodeAt(0) : "A".charCodeAt(0);
          const alphabetEnd = isLowerCase ? "z".charCodeAt(0) : "Z".charCodeAt(0);
          const letterCode = letter.charCodeAt(0);
          let newLetterCode = letterCode + (shift % 26);
      
          if (newLetterCode < alphabetStart) {
            newLetterCode += 26;
          } else if (newLetterCode > alphabetEnd) {
            newLetterCode -= 26;
          }
      
          return String.fromCharCode(newLetterCode);
        } else {
          return letter;
        }
    }

    return(
        <div class = "caesar-container">

            <h1 className="h-1"> Caesar's Cipher </h1>

            <label htmlFor="original"> Original Message </label>
            <input 
                id="original" 
                type="text" 
                value={originalMessage}
                onChange={(e) => setOriginalMessage(e.target.value)}
            />

            <label htmlFor="shift"> Shift </label>
            <input 
                id="shift" 
                type="number" 
                value={shift}
                onChange={(e) => setShift(e.target.value)}
            />

            <hr/>

            <label htmlFor="encrypted"> Encrypted Message </label>
            <input id="encrypted" type="text" value={encryptedMessage} readOnly />

        </div>
    );
}

export default CaesarDecrypter;