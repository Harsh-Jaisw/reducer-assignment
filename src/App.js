// App.js

import React from 'react';

import { UserProvider } from './UserContext';
import UserList from './Components/userList/userList';
import UserForm from './Components/About/About';

const App = () => {
  return (
    <UserProvider>
      <UserList/>
      <UserForm/>
    </UserProvider>
  );
};

export default App;
