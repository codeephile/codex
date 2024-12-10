import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
// import login from '../assets/images/login.jpg'


const Login = () => {
  const[username, setUsername] = useState('');
  const[password, setPassword] = useState('');
  const[error, setError] = useState('');

  const navigate = useNavigate();

  const handleLogin = async(e) => {
    e.preventDefault();
    const response = await fetch('http://127.0.0.1:8000/api/login/' , {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({username,password}),
    });

    const data = await response.json();

    if(response.ok) {
      console.log('login successful:', data);
      navigate("/");
    } else{
      setError('Invalid username or password');
    }
  };

  return (
    <div>
      <section id='login'>
      <div className='hero-login'>
          <div className='hero-text'>
            <h1 className='loginh1'>Login Here</h1>
                <form onSubmit={handleLogin}>
                    <div className='mb-6 loginform'>
                        <label htmlFor='username' className='form-label'>username</label>
                        <input 
                            type='text' 
                            className='form-control'
                            id='username'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required />
                    </div>
                    <div className='mb-6 loginform'>
                        <label htmlFor='password' className='form-label'>Password</label>
                        <input 
                            type='password' 
                            className='form-control'
                            id='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required />
                    </div>
                        {error && <p style={{ color: 'red' }} >{error}</p>}
                    <button type='submit' 
                        className='btn'
                        style={{
                          backgroundColor: '#fb4242',
                          color: '#fff',
                          border: 'none',
                          borderRadius: '20px',
                          padding: '5px 30px',
                          cursor: 'pointer',
                        }}>Login</button>
                </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Login