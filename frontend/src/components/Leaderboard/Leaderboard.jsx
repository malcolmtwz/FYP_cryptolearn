// Leaderboard.js
import React, { useState } from 'react';

const Leaderboard = ({ scores }) => {
  const [username, setUsername] = useState('');
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  return (
    <div>
      <h2>Leaderboard</h2>
      <input
        type="text"
        placeholder="Enter your username"
        value={username}
        onChange={handleUsernameChange}
      />
      <button onClick={() => setUsername(username)}>Submit</button>
      <ul>
        {scores.map((entry, index) => (
          <li key={index}>
            User {entry.username || 'Guest'}: {entry.score}/10
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;
