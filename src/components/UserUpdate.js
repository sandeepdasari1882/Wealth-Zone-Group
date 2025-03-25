import React, { useState } from 'react';
import axios from 'axios';

const UserUpdate = () => {
  const [userId, setUserId] = useState('');
  const [fullName, setFullName] = useState('');
  const [mobNum, setMobNum] = useState('');
  const [panNum, setPanNum] = useState('');
  const [managerId, setManagerId] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:9093/api/v1/employee', {
        userId,
        fullName,
        mobNum,
        panNum,
        managerId
      });
      console.log(response.data);
    } catch (error) {
      console.error("There was an error updating the user!", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="User ID" value={userId} onChange={(e) => setUserId(e.target.value)} />
        <input type="text" placeholder="Full Name" value={fullName} onChange={(e) => setFullName(e.target.value)} />
        <input type="text" placeholder="Mobile Number" value={mobNum} onChange={(e) => setMobNum(e.target.value)} />
        <input type="text" placeholder="PAN Number" value={panNum} onChange={(e) => setPanNum(e.target.value)} />
        <input type="text" placeholder="Manager ID" value={managerId} onChange={(e) => setManagerId(e.target.value)} />
        <button type="submit">Update User</button>
      </form>
    </div>
  );
};

export default UserUpdate;

