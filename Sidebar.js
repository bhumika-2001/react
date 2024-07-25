// src/components/Sidebar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
// import './Sidebar.css'; // Assuming you have styles for the sidebar
// import Dashboard from '../pages/Dashboard';
const Sidebar = () => {
  return (
    <div className="sidebar">
      <nav>
        <ul>
          <li>
            <NavLink 
              to="/dashboard"
              className={({ isActive }) => (isActive ? 'active-link' : '')}
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/user-management"
              className={({ isActive }) => (isActive ? 'active-link' : '')}
            >
              User Management
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/content-management"
              className={({ isActive }) => (isActive ? 'active-link' : '')}
            >
              Content Management
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/real-time-scores"
              className={({ isActive }) => (isActive ? 'active-link' : '')}
            >
              Real-Time Scores
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/event-management"
              className={({ isActive }) => (isActive ? 'active-link' : '')}
            >
              Event Management
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/system-settings"
              className={({ isActive }) => (isActive ? 'active-link' : '')}
            >
              System Settings
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
