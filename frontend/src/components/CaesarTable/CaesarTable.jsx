import React, { useState } from 'react';
import { Slider, Input, Box, Table, TableHead, TableRow, TableCell, TableBody, Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import './CaesarTable.css';

const CaesarTable = ({defaultRotation}) => {
  const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const [rotation, setRotation] = useState(defaultRotation);

  const handleRotationChange = (event, newValue) => {
    if (newValue >= 0 && newValue <= 25) {
      setRotation(newValue);
    }
  };

  const rotatedAlphabets = alphabets.slice(rotation) + alphabets.slice(0, rotation);

  return (
    <div className="caesar-table-container">
      <Accordion expanded="True">
        <AccordionSummary expandIcon={<KeyboardArrowDownIcon />}>
          <Typography variant="h6">Caesar Table</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className="table-wrapper">
            <Table className="caesar-table" style={{ borderCollapse: 'collapse' }}>
              <TableHead>
                <TableRow>
                  <TableCell style={{ borderBottom: '1px solid #ddd' }}>Plaintext</TableCell>
                  {alphabets.split('').map((letter, index) => (
                    <TableCell key={index} align="center" style={{ fontWeight: 'bold', fontSize: '1.2rem', borderBottom: '1px solid #ddd' }}>
                      {letter}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell style={{ borderTop: '1px solid #ddd' }}>Ciphertext</TableCell>
                  {rotatedAlphabets.split('').map((letter, index) => (
                    <TableCell key={index} align="center" style={{ fontSize: '1.2rem', borderTop: '1px solid #ddd', borderBottom: '1px solid #ddd' }}>
                      {letter}
                    </TableCell>
                  ))}
                </TableRow>
              </TableBody>
            </Table>
            <Box className="rotation-input">
              <label>Key</label>
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
