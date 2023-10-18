import React, { useState } from 'react';
import { Slider, Input, Box, Table, TableHead, TableRow, TableCell, TableBody, Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import './CaesarTable.css';

const CaesarTable = ({ defaultRotation, keepClosed }) => {
  const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const [rotation, setRotation] = useState(defaultRotation);

  const handleRotationChange = (event, newValue) => {
    if (newValue >= 0 && newValue <= 25) {
      setRotation(newValue);
    }
  };

  const [isAccordionExpanded, setIsAccordionExpanded] = useState(keepClosed);

  const handleAccordionToggle = () => {
    setIsAccordionExpanded(!isAccordionExpanded);
  };

  const rotatedAlphabets = alphabets.slice(rotation) + alphabets.slice(0, rotation);

  return (
    <div className="caesar-table-container">
      <Accordion expanded={isAccordionExpanded} onChange={handleAccordionToggle}>
        <AccordionSummary expandIcon={<KeyboardArrowDownIcon />}>
          <Typography className="caesar-accordion-heading" variant="h6">Caesar Table</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className="caesar-table-wrapper">
            <Table className="caesar-table" style={{ borderCollapse: 'collapse' }}>
              <TableHead>
                <TableRow>
                  <TableCell className="caesar-table-cell-header">Plaintext</TableCell>
                  {alphabets.split('').map((letter, index) => (
                    <TableCell key={index} align="center" className="caesar-table-cell-header">
                      {letter}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell className="caesar-table-cell">Ciphertext</TableCell>
                  {rotatedAlphabets.split('').map((letter, index) => (
                    <TableCell key={index} align="center" className="caesar-table-cell">
                      {letter}
                    </TableCell>
                  ))}
                </TableRow>
              </TableBody>
            </Table>
            <Box className="caesar-rotation-input">
              <label className="caesar-input-label">Key</label>
              <Box display="flex" alignItems="center">
                <Slider
                  value={rotation}
                  onChange={handleRotationChange}
                  min={0}
                  max={25}
                  sx={{ width: '150px', marginRight: '10px', marginLeft: '10px' }}
                />
                <Input
                  value={rotation}
                  onChange={(e) => handleRotationChange(e, Number(e.target.value))}
                  type="number"
                  inputProps={{ min: 0, max: 25 }}
                  sx={{ width: '50px', marginLeft: '10px' }}
                />
              </Box>
            </Box>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default CaesarTable;
