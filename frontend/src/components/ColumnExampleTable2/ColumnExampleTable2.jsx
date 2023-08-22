import React from 'react';

const ColumnExampleTable2 = () => {
  const topRow = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5];
  const bottomRow = ['L', 'L', 'H', 'W', 'O', 'D', 'L', 'R', 'E', 'O'];

  return (
    <table className="column-table">
      <tbody>
        <tr>
          {topRow.map((value, index) => (
            <td key={index}>{value}</td>
          ))}
        </tr>
        <tr>
          {bottomRow.map((value, index) => (
            <td key={index}>{value}</td>
          ))}
        </tr>
      </tbody>
    </table>
  );
};

export default ColumnExampleTable2;
