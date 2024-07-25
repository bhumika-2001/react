// src/components/ContentManagement.js
import React, { useState } from 'react';

const ContentManagement = () => {
  const [contents, setContents] = useState([]);
  const [newContent, setNewContent] = useState({ title: '', type: 'video' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewContent((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddContent = () => {
    if (newContent.title) {
      setContents([...contents, { id: Date.now(), ...newContent }]);
      setNewContent({ title: '', type: 'video' });
    }
  };

  const handleDelete = (id) => {
    setContents(contents.filter((content) => content.id !== id));
  };

  return (
    <div className="content-management">
      <h2>Content Management</h2>
      <div className="content-form">
        <input
          type="text"
          name="title"
          value={newContent.title}
          onChange={handleInputChange}
          placeholder="Title"
        />
        <select name="type" value={newContent.type} onChange={handleInputChange}>
          <option value="video">Video</option>
          <option value="live">Live Stream</option>
          <option value="article">Article</option>
        </select>
        <button onClick={handleAddContent}>Add Content</button>
      </div>
      <ul>
        {contents.map((content) => (
          <li key={content.id}>
            <span>{content.title} ({content.type})</span>
            <button onClick={() => handleDelete(content.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContentManagement;
