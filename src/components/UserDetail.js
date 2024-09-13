import React from 'react';

const UserDetail = ({ user }) => {
  return (
    <li>
      <strong>{user.name}</strong> - {user.email}
    </li>
  );
};

export default UserDetail;
