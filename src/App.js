import React from 'react';
import './App.css';
import { UserProvider } from './context/UserContext'; // Ensure this path is correct
import UserList from './components/UserList'; // Ensure this path is correct

function App() {
  return (
    <UserProvider>
      <div className="App">
        <h1>User Management</h1>
        <UserList />
      </div>
    </UserProvider>
  );
}

export default App;
