// src/components/RealTimeScores.js
import React, { useState, useEffect } from 'react';

const RealTimeScores = () => {
  const [scores, setScores] = useState([
    { id: 1, sport: 'Football', score: '2 - 1' },
    { id: 2, sport: 'Basketball', score: '98 - 102' },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setScores(scores.map(score => ({
        ...score,
        score: `${Math.floor(Math.random() * 10)} - ${Math.floor(Math.random() * 10)}`
      })));
    }, 5000);

    return () => clearInterval(interval);
  }, [scores]);

  return (
    <div className="real-time-scores">
      <h2>Real-Time Scores</h2>
      <ul>
        {scores.map((score) => (
          <li key={score.id}>
            <span>{score.sport}: {score.score}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RealTimeScores;
