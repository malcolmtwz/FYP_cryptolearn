import React, { useState, useEffect } from 'react';
import QuizComponent from './QuizComponent';
import ColumnarTable from '../Tables/ColumnarTable/ColumnarTable';
import BeaufortCipherAccordion from '../Tables/BeaufortCipherTable/BeaufortCipherTable';
import VigenereCipherAccordion from '../Tables/VigenereTable/VigenereCipherTable';
import CaesarTable from '../Tables/CaesarTable/CaesarTable';

const QuizWithTableComponent = (props) => {
    const [cipherType, setCipherType] = useState(null);

    const handleCipherTypeChange = (type) => {
        setCipherType(type);
    };

    return (
        <div>
            <QuizComponent {...props} onCipherTypeChange={handleCipherTypeChange} />
            
            {cipherType === 'Caesar' && <CaesarTable />}
            {cipherType === 'Columnar' && <ColumnarTable />}
            {cipherType === 'Beaufort' && <BeaufortCipherAccordion />}
            {cipherType === 'Vigenere' && <VigenereCipherAccordion />}
        </div>
    );
};

export default QuizWithTableComponent;
