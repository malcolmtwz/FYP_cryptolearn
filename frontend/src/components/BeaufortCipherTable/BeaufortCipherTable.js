import React, { useState } from 'react';
import './BeaufortCipherTable.css';

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const BeaufortCipherTable = ( { defaultSelectedRow,defaultSelectedCol }) => {
  const [selectedRow, setSelectedRow] = useState(defaultSelectedRow);
  const [selectedCol, setSelectedCol] = useState(defaultSelectedCol);

  const handleCellClick = (rowIndex, colIndex) => {
    setSelectedRow(rowIndex);
    setSelectedCol(colIndex);
  };

  return (
    <div className="beaufort-cipher-table">
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
                const diff = (colIndex - rowIndex + 26) % 26;
                const cipherLetter = alphabet[diff];
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
  );
};

export default BeaufortCipherTable;
