import React from 'react';
import "./ColumnExampleTable.css";

const ColumnExampleTable = () => {
  const numbersRow = [2, 5, 4, 1, 3];
  const lettersRow = ['H', 'E', 'L', 'L', 'O'];
  const lettersRow2 = ['W', 'O', 'R', 'L', 'D'];

  return (
    <table className="column-table">
      <tbody>
        <tr>
          {numbersRow.map((number, index) => (
            <td key={index}>{number}</td>
          ))}
        </tr>
        <tr>
          {lettersRow.map((letter, index) => (
            <td key={index}>{letter}</td>
          ))}
        </tr>
        <tr>
          {lettersRow2.map((letter, index) => (
            <td key={index}>{letter}</td>
          ))}
        </tr>
      </tbody>
    </table>
  );
};

export default ColumnExampleTable;
