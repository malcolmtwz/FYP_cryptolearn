import React, { useState, useEffect } from "react";
import "./VigenereScreen.css";
import NavigationButton from "../../components/NavigationButton/NavigationButton";
import Background from "../../components/Background/Background";
import VigenereEncrypter from "../../components/VigenereEncrypter/VigenereEncrypter";
import VigenereCipherAccordion from "../../components/VigenereCipherTable/VigenereCipherTable";
import VigenereAlphabetTable from "../../components/VigenereComponents/VigenereAlphabetTable/VigenereAlphabetTable";

const keyPairs = [
    { key: 'K', value: 10 },
    { key: 'E', value: 4 },
    { key: 'Y', value: 24 },
  ];

  const plaintextPairs = [
    { key: 'D', value: 3 },
    { key: 'A', value: 0 },
    { key: 'Y', value: 24 },
  ];

  const encryptedPairs = [
    { key: 'N', value: 13},
    { key: 'E', value: 4 },
    { key: 'W', value: 22 },
  ];

const VigenereExampleTable = ({text}) =>{
    return (
        <table className="alpha-table" style={{ width: '10%' }}>
        <thead>
            <tr>
            <th>Input</th>
            <th>Value</th>
            </tr>
        </thead>
        <tbody>
            {text.map((pair, index) => (
            <tr key={index}>
                <td>{pair.key}</td>
                <td>{pair.value}</td>
            </tr>
            ))}
        </tbody>
        </table>
    );  
};


function VigenereScreen() {
    const defaultSelectedRow = 10;
    const defaultSelectedCol = 3; 

    return(
        <Background>
            <h2 className = "title"> Vigenere Cipher</h2>
            <h4> A Polyalphabetic cipher that uses a 'Keyword' and a 'Lookup Table' to encrypt messages!</h4>

            <hr className="border-line"/>

            <h2> Vigenere cipher can be done using a mathematical approach!</h2>
            <p> Supposed we have the following keyword: 'KEY', and a plaintext message : 'DAY'</p>
            <p> Assign numerical values to them using this table:</p>

            <VigenereAlphabetTable/>

            <p> Therefore, our key and plaintext in numerical form would be:</p>

            <div className="center-items-horizontally">
                <VigenereExampleTable text={keyPairs} />
                <VigenereExampleTable text={plaintextPairs} />
            </div>

            <p> Add them together alongside modulo 26 and to create the encrypted text!</p>

            <VigenereExampleTable text={encryptedPairs} />

            <hr className="border-line"/>

            <h5> Try this below! each letter in the 'PlainText' below is encrypted using the 'Key' </h5>

            <VigenereEncrypter/>
            
            <hr className="border-line"/>

            <h2> Another method involves using the Vigenere Ciper Table</h2>
            <h5> In the table below, the first letter of our 'Keyword' and 'Plaintext' is highlighted below. Try to find the rest through the table! </h5>
            


            <VigenereCipherAccordion defaultSelectedRow={defaultSelectedRow} defaultSelectedCol={defaultSelectedCol}/>


            <hr className="border-line"/>
            <NavigationButton to="/vig2" />
        </Background>
    );
}

export default VigenereScreen;