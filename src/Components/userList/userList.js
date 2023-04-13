// UserList.js

import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const UserList = () => {
  const { state, dispatch } = useContext(UserContext);

  // Function to handle delete user action
  const handleDelete = (id) => {
    dispatch({ type: 'DELETE_USER', payload: id });
  };

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {state.users.map(user => (
          <li key={user.id}>
            {user.name}
            <button onClick={() => handleDelete(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;