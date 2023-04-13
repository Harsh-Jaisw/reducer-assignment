// UserForm.js

import React, { useState, useContext } from 'react';
import { UserContext } from './UserContext';

const UserForm = () => {
  const { dispatch } = useContext(UserContext);
  const [name, setName] = useState('');

  // Function to handle submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === '') return;
    const newUser = { id: new Date().getTime().toString(), name };
    dispatch({ type: 'ADD_USER', payload: newUser });
    setName('');
  };

  return (
    <div>
      <h2>Add User</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default UserForm;