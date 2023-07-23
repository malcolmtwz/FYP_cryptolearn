import React, { useState, useEffect } from "react";
import "./CaesarScreen.css";
// import SideBar from '../../components/SideBar/SideBar';

function CaesarScreen() {

    const [originalMessage, setOriginalMessage] = useState("Learning Is Fun!");
    const [shift, setShift] = useState(2);
    const [encryptedMessage, setEncryptedMessage] = useState("");

    useEffect(() => {
        startEncryption();
      }, [originalMessage, shift]);

    // originalInput.addEventListener("input", characterEntered, false);
    // shiftInput.addEventListener("input", numberEntered, false);

    // function characterEntered(e) {
    //     originalMessage = e.target.value;
    //     originalMessage = originalMessage.toLowerCase();
    //     originalMessage = originalMessage.replace(/[^a-z]/, '');

    //     e.target.value = originalMessage;

    //     startEncryption();
    // }

    // function numberEntered(e) {
    //     startEncryption();
    // }
  
    // function startEncryption() {
    //     let encryptedMessage = "";
    //     let shift = shiftInput.value ? Number(shiftInput.value) : 0;
    //     console.log(shift);

    //     for (let letter of originalMessage) {
    //         encryptedMessage += shiftLetter(letter, shift);
    //     }
        
    //     console.log(encryptedMessage);
    //     encryptedInput.value = encryptedMessage;
    // }

    // function shiftLetter(letter, shift) {
    //     let newLetter = "";
      
    //     let letterCode = letter.charCodeAt(0);
    //     let newLetterCode = letterCode + (shift % 26);
      
    //     if (newLetterCode < 97) {
    //       newLetterCode += 26;
    //     } else if (newLetterCode > 122) {
    //       newLetterCode -= 26;
    //     }
      
    //     newLetter = String.fromCharCode(newLetterCode);
        
    //     return newLetter;
    
    //   }

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
          // If the character is not a letter (e.g., special symbol), return it unchanged
          return letter;
        }
    }

    return(
        
        <div className="caesar-screen">
            <div className="caesar-background">
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
            </div>
        </div>
    );
}

export default CaesarScreen;