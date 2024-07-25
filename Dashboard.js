// src/components/Dashboard.js
import React, { useState, useEffect } from 'react';
// import './Dashboard.css';

const Dashboard = () => {
  const [stats, setStats] = useState({
    users: 0,
    content: 0,
    events: 0,
    scores: 0,
    liveStreams: 0,
  });
  
  const [recentActivities, setRecentActivities] = useState([
    "No recent activities",
  ]);

  useEffect(() => {
    // Replace with actual data fetching logic
    setStats({
      users: 500,
      content: 1200,
      events: 30,
      scores: 10,
      liveStreams: 5,
    });
    setRecentActivities([
      "New user: Jane Doe",
      "Content updated: 'Football Highlights'",
      "Live stream started: 'Match A vs B'",
    ]);
  }, []);

  return (
    <div className="dashboard">
      <h1>Dashboard Overview</h1>
      <div className="dashboard-stats">
        <div className="stat-item">
          <h2>Total Users</h2>
          <p>{stats.users}</p>
        </div>
        <div className="stat-item">
          <h2>Total Content</h2>
          <p>{stats.content}</p>
        </div>
        <div className="stat-item">
          <h2>Total Events</h2>
          <p>{stats.events}</p>
        </div>
        <div className="stat-item">
          <h2>Total Scores</h2>
          <p>{stats.scores}</p>
        </div>
        <div className="stat-item">
          <h2>Live Streams</h2>
          <p>{stats.liveStreams}</p>
        </div>
      </div>
      <div className="recent-activities">
        <h2>Recent Activities</h2>
        <ul>
          {recentActivities.map((activity, index) => (
            <li key={index}>{activity}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
