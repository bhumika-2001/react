// src/components/UserManagement.js
import React, { useState } from 'react';

const UserManagement = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', role: 'Admin' },
    { id: 2, name: 'Jane Smith', role: 'Editor' },
  ]);
  const [newUser, setNewUser] = useState({ name: '', role: '' });
  const [editingUser, setEditingUser] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddUser = () => {
    if (newUser.name && newUser.role) {
      setUsers([...users, { id: Date.now(), ...newUser }]);
      setNewUser({ name: '', role: '' });
    }
  };

  const handleEditUser = (id) => {
    const user = users.find((u) => u.id === id);
    setEditingUser(user);
    setNewUser({ name: user.name, role: user.role });
  };

  const handleSaveUser = () => {
    setUsers(users.map((u) => (u.id === editingUser.id ? { ...editingUser, ...newUser } : u)));
    setEditingUser(null);
    setNewUser({ name: '', role: '' });
  };

  const handleDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div className="user-management">
      <h2>User Management</h2>
      <div className="user-form">
        <input
          type="text"
          name="name"
          value={newUser.name}
          onChange={handleInputChange}
          placeholder="Name"
        />
        <input
          type="text"
          name="role"
          value={newUser.role}
          onChange={handleInputChange}
          placeholder="Role"
        />
        {editingUser ? (
          <button onClick={handleSaveUser}>Save</button>
        ) : (
          <button onClick={handleAddUser}>Add User</button>
        )}
      </div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <span>{user.name} ({user.role})</span>
            <button onClick={() => handleEditUser(user.id)}>Edit</button>
            <button onClick={() => handleDelete(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserManagement;
