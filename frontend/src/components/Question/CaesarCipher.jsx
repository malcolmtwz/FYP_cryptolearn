import React, { useState } from 'react';
import { TextField, Slider, Button, Typography } from '@material-ui/core';

function CaesarCipher() {
    const [inputText, setInputText] = useState('');
    const [shift, setShift] = useState(0);
    const [cipheredText, setCipheredText] = useState('');

    const handleChangeInput = (event) => {
        setInputText(event.target.value);
    };

    const handleChangeShift = (event, newValue) => {
        setShift(newValue);
    };

    const handleCipher = () => {
        setCipheredText(caesarCipher(inputText, shift));
    };

    const caesarCipher = (text, shift) => {
        return text.split('').map(char => {
            const code = char.charCodeAt(0);
            if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
                const base = code < 97 ? 65 : 97;
                return String.fromCharCode(((code - base + shift) % 26) + base);
            }
            return char;
        }).join('');
    };

    return (
        <div style={{ padding: '20px' }}>
            <TextField 
                label="Input Text"
                variant="outlined"
                fullWidth
                value={inputText}
                onChange={handleChangeInput}
            />
            <Typography gutterBottom>
                Shift Value: {shift}
            </Typography>
            <Slider
                value={shift}
                onChange={handleChangeShift}
                step={1}
                marks
                min={0}
                max={25}
                valueLabelDisplay="auto"
            />
            <Button variant="contained" color="primary" onClick={handleCipher}>
                Cipher
            </Button>
            <TextField 
                label="Ciphered Text"
                variant="outlined"
                fullWidth
                value={cipheredText}
                margin="normal"
                InputProps={{
                    readOnly: true,
                }}
            />
        </div>
    );
}

export default CaesarCipher;
