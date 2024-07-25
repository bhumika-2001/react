// src/components/EventManagement.js
import React, { useState } from 'react';

const EventManagement = () => {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({ title: '', date: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEvent((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddEvent = () => {
    if (newEvent.title && newEvent.date) {
      setEvents([...events, { id: Date.now(), ...newEvent }]);
      setNewEvent({ title: '', date: '' });
    }
  };

  const handleDelete = (id) => {
    setEvents(events.filter((event) => event.id !== id));
  };

  return (
    <div className="event-management">
      <h2>Event Management</h2>
      <div className="event-form">
        <input
          type="text"
          name="title"
          value={newEvent.title}
          onChange={handleInputChange}
          placeholder="Title"
        />
        <input
          type="date"
          name="date"
          value={newEvent.date}
          onChange={handleInputChange}
        />
        <button onClick={handleAddEvent}>Add Event</button>
      </div>
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            <span>{event.title} - {event.date}</span>
            <button onClick={() => handleDelete(event.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventManagement;
