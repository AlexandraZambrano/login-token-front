import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const UserView = () => {
  const { loggedIn, userRole } = useContext(AuthContext);

  // Example logic based on the user's role
  if (loggedIn && userRole === 'ROLE_USER') {
    // Render component for users with ROLE_USER
    return (
      <div>
        <h1>Welcome, User!</h1>
        {/* Render appropriate content */}
      </div>
    );
  } else if (loggedIn && userRole === 'ROLE_ADMIN') {
    // Render component for other users or guests
    return (
      <div>
        <h1>Oh no, this is only available for admin!</h1>
        {/* Render appropriate content */}
      </div>
    );
  } else {
    <h1>You need to log in</h1>
  }
};

export default UserView