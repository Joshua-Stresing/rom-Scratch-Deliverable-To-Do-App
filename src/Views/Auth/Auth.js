import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { signInUser, signUpUser } from '../../services/auth';
import './Auth.css';

export default function Auth({ setCurrentUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const history = useHistory();

  const [signInUp, setSignInUp] = useState('');

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      if (signInUp === 'Sign-In') {

        const data = await signInUser(email, password);
        setCurrentUser(data.email);
        history.push('/');

      } else {

        const data = await signUpUser(email, password);
        setCurrentUser(data.email);
        history.push('/');

      }

    } catch (e) {
      setError(e.message);
    }
  };

  return (

    <div>
      <>
        <h1 className={signInUp === 'Sign-In' ? 'active' : 'inactive'} onClick={()=>setSignInUp('Sign-In')}>Sign In</h1>
        <h1 className={signInUp === 'Sign-Up' ? 'active' : 'inactive'} onClick={()=>setSignInUp('Sign-Up')}>Sign Up</h1>
      </>
      {error && <p>{error}</p>}
      <form className="auth" onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button>Sign In</button>
      </form>
    </div>
  );
}