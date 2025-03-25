

import React, { useState, useEffect } from 'react'
import UserDelete from './components/UserDelete';



 const UserDetails = 'http://localhost:9093/api/v1/employee'
const App = () => {
  const [user, setUser] = useState(UserDetails);
  const userHandler = async() => {

    const response = await fetch(UserDetails);
    const newData = await response.json();
    setUser(newData)
  }

  useEffect(() => {
    console.log(userHandler());
  }, []);

  return <div>
    {user.map((item)=>{
      return(
        <div>
        <UserDelete/>
          <h3>{item.id}</h3>
          <h2>{item.name}</h2>
          <h2>{item.mobile}</h2>
          <h2>{item.pan}</h2>
          <h2>{item.Uid}</h2>
          <UserDelete/>
        </div>
      )
    })}
  </div>
  
}

export default App


