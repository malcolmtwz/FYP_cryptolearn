import React, { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './VigenereCipherTable.css';

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const VigenereCipherTable = ({ defaultSelectedRow,defaultSelectedCol }) => {
  const [selectedRow, setSelectedRow] = useState(defaultSelectedRow);
  const [selectedCol, setSelectedCol] = useState(defaultSelectedCol);

  const handleCellClick = (rowIndex, colIndex) => {
    setSelectedRow(rowIndex);
    setSelectedCol(colIndex);
  };

  return (
    <div className="vigenere-cipher-table">
      <p className="vigenere-cipher-labels"> Text </p>
      <div className="vigenere-cipher-container">
        <p className="vigenere-cipher-labels"> Key </p>
        <table>
          <thead>
            <tr>
              <th></th>
              {Array.from(alphabet).map((col, index) => (
                <th
                  key={index}
                  className={selectedCol === index ? 'selected' : ''}
                  onClick={() => handleCellClick(null, index)}
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Array.from(alphabet).map((row, rowIndex) => (
              <tr key={rowIndex}>
                <th
                  className={selectedRow === rowIndex ? 'selected' : ''}
                  onClick={() => handleCellClick(rowIndex, null)}
                >
                  {row}
                </th>
                {Array.from(alphabet).map((col, colIndex) => {
                  const shift = (colIndex + rowIndex) % 26;
                  const cipherLetter = alphabet[shift];
                  return (
                    <td
                      key={colIndex}
                      className={
                        selectedRow === rowIndex && selectedCol === colIndex
                          ? 'selected'
                          : ''
                      }
                      onClick={() => handleCellClick(rowIndex, colIndex)}
                    >
                      {cipherLetter}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const VigenereCipherAccordion = (props) => {
  const [isAccordionExpanded, setIsAccordionExpanded] = useState(false);

  const handleAccordionToggle = () => {
    setIsAccordionExpanded(!isAccordionExpanded);
  };

  return (
    <Accordion expanded={isAccordionExpanded} onChange={handleAccordionToggle}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <p className="vigenere-accordion-label">Vigenere Cipher Table</p>
      </AccordionSummary>
      <AccordionDetails>
        <VigenereCipherTable {...props} />
      </AccordionDetails>
    </Accordion>
  );
};

export default VigenereCipherAccordion;