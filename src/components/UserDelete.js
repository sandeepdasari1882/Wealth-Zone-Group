
import React, { useState } from 'react';
import axios from 'axios';

const UserDelete = () => {
  const [userId, setUserId] = useState('');

  const handleDelete = async () => {
    try {
      const response = await axios.post('http://localhost:8080/api/users/delete', { userId });
      console.log(response.data);
    } catch (error) {
      console.error("Error deleting the user", error);
    }
  };

  return (
    <div>
      <input type="text" placeholder="User ID" value={userId} onChange={(e) => setUserId(e.target.value)} />
      <button onClick={handleDelete}>Delete User</button>
    </div>
  );
};

export default UserDelete;

