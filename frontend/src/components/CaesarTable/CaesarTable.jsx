// import React, { useState } from 'react';
// import './CaesarTable.css'; // Import your CSS file

// const CaesarTable = () => {
//   const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//   const [rotation, setRotation] = useState(0);
//   const [isTableVisible, setIsTableVisible] = useState(true);

//   const handleRotationChange = (value) => {
//     if (value >= 0 && value <= 25) {
//       setRotation(value);
//     }
//   };

//   const rotatedAlphabets = alphabets.slice(rotation) + alphabets.slice(0, rotation);

//   return (
//     <div className="caesar-table-container">
//       <button className="toggle-button" onClick={() => setIsTableVisible(!isTableVisible)}>
//         {isTableVisible ? 'Hide Table' : 'Show Table'}
//       </button>
//       {isTableVisible && (
//         <div className="table-wrapper">
//           <table className="caesar-table">
//             <thead>
//               <tr>
//                 <th>Plaintext</th>
//                 {alphabets.split('').map((letter, index) => (
//                   <th key={index}>{letter}</th>
//                 ))}
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td>Ciphertext</td>
//                 {rotatedAlphabets.split('').map((letter, index) => (
//                   <td key={index}>{letter}</td>
//                 ))}
//               </tr>
//             </tbody>
//           </table>
//           <div className="rotation-input">
//             <label>Key: </label>
//             <div className="slider-with-input">
//               <input
//                 type="range"
//                 min="0"
//                 max="25"
//                 value={rotation}
//                 onChange={(e) => handleRotationChange(Number(e.target.value))}
//               />
//               <input
//                 type="number"
//                 min="0"
//                 max="25"
//                 value={rotation}
//                 onChange={(e) => handleRotationChange(Number(e.target.value))}
//                 className="rotation-input-number"
//               />
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CaesarTable;


import React, { useState } from 'react';
import { Button, Slider, Input, Box, Table, TableHead, TableRow, TableCell } from '@mui/material';
import './CaesarTable.css'; 

const CaesarTable = () => {
  const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const [rotation, setRotation] = useState(3);
  const [isTableVisible, setIsTableVisible] = useState(true);

  const handleRotationChange = (event, newValue) => {
    if (newValue >= 0 && newValue <= 25) {
      setRotation(newValue);
    }
  };

  const rotatedAlphabets = alphabets.slice(rotation) + alphabets.slice(0, rotation);

  return (
    <div className="caesar-table-container">
      <Button variant="contained" onClick={() => setIsTableVisible(!isTableVisible)}>
        {isTableVisible ? 'Hide Table' : 'Show Table'}
      </Button>
      {isTableVisible && (
        <div className="table-wrapper">
          <Table className="caesar-table">
            <TableHead>
              <TableRow>
                <TableCell>Plaintext</TableCell>
                {alphabets.split('').map((letter, index) => (
                  <TableCell key={index}>{letter}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <tbody>
              <TableRow>
                <TableCell>Ciphertext</TableCell>
                {rotatedAlphabets.split('').map((letter, index) => (
                  <TableCell key={index}>{letter}</TableCell>
                ))}
              </TableRow>
            </tbody>
          </Table>
          <Box className="rotation-input">
            <label>Key</label>
            <Box display="flex" alignItems="center">
              <Slider
                value={rotation}
                onChange={handleRotationChange}
                min={0}
                max={25}
                sx={{ width: '150px', marginRight: '10px' }}
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
      )}
    </div>
  );
};

export default CaesarTable;
