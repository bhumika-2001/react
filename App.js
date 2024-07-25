// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import UserManagement from './pages/UserManagement';
import ContentManagement from './pages/ContentManagement';
import RealTimeScores from './pages/RealTimeScores';
import EventManagement from './pages/EventManagement';
import SystemSettings from './pages/SystemSettings';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="main-content">
          <Sidebar />
          <div className="page-content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/user-management" element={<UserManagement />} />
              <Route path="/content-management" element={<ContentManagement />} />
              <Route path="/real-time-scores" element={<RealTimeScores />} />
              <Route path="/event-management" element={<EventManagement />} />
              <Route path="/system-settings" element={<SystemSettings />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
