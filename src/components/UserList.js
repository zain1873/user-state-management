import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext'; // Ensure this path is correct
import UserDetail from './UserDetail'; // Ensure this path is correct

const UserList = () => {
  const { users, loading } = useContext(UserContext);

  if (loading) {
    return <p>Loading users...</p>;
  }

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map(user => (
          <UserDetail key={user.id} user={user} />
        ))}
      </ul>
    </div>
  );
};

export default UserList;
