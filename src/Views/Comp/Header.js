import React from 'react';
import { logout } from '../../services/auth';
//update note
export default function Header({ currentUser, setCurrentUser }) {
  const handleLogout = async () => {
    await logout();
    setCurrentUser('');
  };
  return (
    <div> 
     
      {currentUser && 
        <>
          <div onClick={handleLogout}>
            <button>logout</button>
          </div>
          
        </>
      }
        
    </div>
  );
}