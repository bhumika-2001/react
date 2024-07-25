// src/components/SystemSettings.js
import React, { useState, useEffect } from 'react';

const SystemSettings = () => {
  const [settings, setSettings] = useState({
    theme: 'light',
    notifications: true,
  });

  useEffect(() => {
    // Load saved theme from localStorage
    const savedTheme = localStorage.getItem('theme') || 'light';
    setSettings((prev) => ({ ...prev, theme: savedTheme }));
    document.body.className = savedTheme; // Apply theme to the body
  }, []);

  const handleChange = (e) => {
    const { name, checked, value } = e.target;
    const newValue = e.target.type === 'checkbox' ? checked : value;
    setSettings((prev) => ({
      ...prev,
      [name]: newValue,
    }));

    if (name === 'theme') {
      document.body.className = newValue; // Apply theme to the body
      localStorage.setItem('theme', newValue); // Save theme to localStorage
    }
  };

  return (
    <div className="system-settings">
      <h2>System Settings</h2>
      <div className="settings-item">
        <label>Theme</label>
        <select name="theme" value={settings.theme} onChange={handleChange}>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </div>
      <div className="settings-item">
        <label>
          <input
            type="checkbox"
            name="notifications"
            checked={settings.notifications}
            onChange={handleChange}
          />
          Enable Notifications
        </label>
      </div>
    </div>
  );
};

export default SystemSettings;
