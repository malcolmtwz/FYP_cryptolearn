
import React, { useState } from "react";
import { Box, Typography, Divider, Button, TextField, Paper } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import KeyIcon from '@mui/icons-material/Key';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import Background from "../../../components/Background/Background";
import { Context, Node } from 'react-mathjax2';
import { InlineMath, BlockMath } from 'react-katex';
import Tex2SVG from "react-hook-mathjax";
import 'katex/dist/katex.min.css';

function tester(props){
    return(
        <Context input="tex">
            <Node inline>{props.tex}</Node>
        </Context>   
    );
}

function PublicKeyScreen() {

    const [privateKeyA, setPrivateKeyA] = useState(6);
    const [privateKeyB, setPrivateKeyB] = useState(15);
    const [base, setBase] = useState(5);
    const [modulus, setModulus] = useState(23);

    const publicKeyA = Math.pow(base, privateKeyA) % modulus;
    const publicKeyB = Math.pow(base, privateKeyB) % modulus;
    const sharedSecretA = Math.pow(publicKeyB, privateKeyA) % modulus;
    const sharedSecretB = Math.pow(publicKeyA, privateKeyB) % modulus;

    const test = <tester input="hi"/>

    return (
        <Background>
        <Box p={4} textAlign="center">
            <h2 className = "title"> Public Key Encryption</h2>
            <Typography variant="h5" gutterBottom>Creating a Shared Secret for Encryption</Typography>
            <Typography paragraph>
                Discover how Alice and Bob can generate a shared secret key, without revealing their private keys to each other or anyone else who might be listening.
            </Typography>

            <Divider sx={{ my: 3 }} />

            <Typography paragraph>
                Let's understand this concept by becoming Alice and Bob and generating our own shared secret!
            </Typography>

            <Box display="flex" justifyContent="space-around" alignItems="center" my={3}>
                <Paper elevation={3} sx={{ p: 3, textAlign: 'center' }}>
                        <PersonIcon fontSize="large" color="primary" sx={{ fontSize: 64 }} />
                        <Typography variant="h6">Alice</Typography>
                        <KeyIcon fontSize="large" color="primary" sx={{ fontSize: 48 }} />
                        <Typography variant="body2">Private Key: a = {privateKeyA}</Typography>
                        <Typography variant="body2">Public Key: A = g<sup>a</sup> mod p = {publicKeyA}</Typography>
                    </Paper>

                    <Box sx={{ borderLeft: 2, borderColor: 'divider', height: 200, mx: 3 }} />

                    <Paper elevation={3} sx={{ p: 3, textAlign: 'center' }}>
                        <LockOpenIcon fontSize="large" color="action" sx={{ fontSize: 64 }} />
                        <Typography variant="h6">Shared Parameters</Typography>
                        <TextField 
                            label="Base (g)" 
                            variant="outlined" 
                            value={base}
                            onChange={(e) => setBase(e.target.value)}
                            size="small"
                            sx={{ marginBottom: 2, width: 60 }}
                        />
                        <TextField 
                            label="Modulus (p)" 
                            variant="outlined" 
                            value={modulus}
                            onChange={(e) => setModulus(e.target.value)}
                            size="small"
                            sx={{ width: 60 }}
                        />
                    </Paper>

                    <Box sx={{ borderLeft: 2, borderColor: 'divider', height: 200, mx: 3 }} />

                    <Paper elevation={3} sx={{ p: 3, textAlign: 'center' }}>
                        <PersonIcon fontSize="large" color="secondary" sx={{ fontSize: 64 }} />
                        <Typography variant="h6">Bob</Typography>
                        <KeyIcon fontSize="large" color="secondary" sx={{ fontSize: 48 }} />
                        <Typography variant="body2">Private Key: b = {privateKeyB}</Typography>
                        <Typography variant="body2">Public Key: B = g<sup>b</sup> mod p = {publicKeyB}</Typography>
                    </Paper>
            </Box>

            <Typography paragraph>
                Shared secret (calculated by both using each other's public key and their own private key):
            </Typography>
            <Typography variant="h6">Shared Secret (Alice): {sharedSecretA}</Typography>
            <Typography variant="h6">Shared Secret (Bob): {sharedSecretB}</Typography>

            <Divider sx={{ my: 3 }} />

            <Typography variant="h5" gutterBottom>Step-by-Step Description</Typography>
            <ol>
                <li>Alice and Bob agree on a public base number and a public modulus.</li>
                <li>Alice and Bob each choose a private key.</li>
                <li>They exchange the result of raising the base number to the power of their private key, modulo the public modulus.</li>
                <li>They each raise the received number to the power of their own private key, modulo the public modulus.</li>
                <li>Now, Alice and Bob have the same shared secret, without directly sending their private keys!</li>
           </ol>

            <Divider sx={{ my: 3 }} />

        </Box>
        </Background>
    );
}

export default PublicKeyScreen;
