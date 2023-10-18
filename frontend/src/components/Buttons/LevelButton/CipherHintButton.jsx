import React from 'react';
import "./CipherHintButton.css"

const CipherHintButton = ({ onClick, children }) => {
    return (
        <button className="cipher-hint-button" onClick={onClick}>
            <span className="cipher-hint-button-text">{children}</span>
        </button>
    );
}

export default CipherHintButton;

