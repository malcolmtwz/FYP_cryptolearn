import React, { useState } from "react";
import { Button, TextField } from '@mui/material';
import Background from "../../../components/Background/Background";
import NavigationButtonBack from "../../../components/Buttons/NavigationButtonBack/NavigationButtonBack";

function DiffieHellmanSimulation() {
    // States for the prime numbers, private and public keys, and shared secret
    const [g, setG] = useState('');
    const [p, setP] = useState('');
    const [a, setA] = useState('');
    const [b, setB] = useState('');
    const [A, setApub] = useState(null);
    const [B, setBpub] = useState(null);
    const [s, setS] = useState(null);

    // Function to handle the key generation
    const generateKeys = () => {
        // Convert inputs to numbers and calculate public keys
        const gNum = parseInt(g, 10);
        const pNum = parseInt(p, 10);
        const aNum = parseInt(a, 10);
        const bNum = parseInt(b, 10);

        // Calculate public keys A and B
        const A = (gNum ** aNum) % pNum;
        const B = (gNum ** bNum) % pNum;

        // Calculate the shared secret s
        const sA = (B ** aNum) % pNum;
        const sB = (A ** bNum) % pNum;

        // Check if the shared secrets from Alice and Bob are equal (they should be)
        if (sA === sB) {
            setApub(A);
            setBpub(B);
            setS(sA);
        } else {
            alert("An error occurred during the key exchange!");
        }
    };

    return (
        <Background>
            <div className="center-items">
                <h2 className="title">Diffie-Hellman Key Exchange Simulation</h2>
                <p>Let's simulate a Diffie-Hellman key exchange!</p>
                
                <TextField label="Generator g" value={g} onChange={(e) => setG(e.target.value)} />
                <TextField label="Prime p" value={p} onChange={(e) => setP(e.target.value)} />
                <br />
                <TextField label="Alice's private key a" value={a} onChange={(e) => setA(e.target.value)} />
                <TextField label="Bob's private key b" value={b} onChange={(e) => setB(e.target.value)} />
                <br />
                <Button variant="contained" color="primary" onClick={generateKeys}>Generate Keys</Button>
                
                <h3>Results</h3>
                <p>{`Alice's public key (A): ${A}`}</p>
                <p>{`Bob's public key (B): ${B}`}</p>
                <p>{`Shared secret (s): ${s}`}</p>
            </div>
            <NavigationButtonBack to="/diffie" />
        </Background>
        
    );
}

export default DiffieHellmanSimulation;
