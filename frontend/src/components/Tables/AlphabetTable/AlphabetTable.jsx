import React from 'react';

const AlphabetTable = () => {
  const letters = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));
  const numbers = Array.from({ length: 26 }, (_, i) => i + 1);

  return (
    <table className='alpha-table'>
      <thead>
        <tr>
          {letters.map((letter, index) => (
            <th key={index}>{letter}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          {numbers.map((number, index) => (
            <td key={index}>{number}</td>
          ))}
        </tr>
      </tbody>
    </table>
  );
};

export default AlphabetTable;
