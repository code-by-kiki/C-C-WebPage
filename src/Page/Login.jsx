import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [phonenum, setphonenum] = useState('');
  const [email, setemail] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn === 'true') {
      navigate('/dashboard');
    }
  }, [navigate]);



  
const handleLogin = () => {
  const validUsernames = ['kiki', 'Krithika'];
  const validPhones = ['6374760410', '7777'];
  const validEmail = 'krithikaselvam68@gmail.com';

  if (
    validUsernames.includes(username) &&
    validPhones.includes(phonenum) &&
    email === validEmail
  ) {
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('username', username);
    localStorage.setItem('phonenum', phonenum);
    localStorage.setItem('email', email);
    navigate('/dashboard');
  } else {
    setError('Invalid username or PhoneNumber or E-Mail');
  }
};


   return (
    <div style={styles.container}>
      <h2>Sign In</h2>
      <input type="text" placeholder="Username"  value={username} onChange={(e) => setUsername(e.target.value)} style={styles.input}  />
      <input type="number" placeholder="PhoneNumber" value={phonenum}  onChange={(e) => setphonenum(e.target.value)}  style={styles.input}/>
      <input type='email' placeholder='E-Mail' value={email} onChange={(e) => setemail(e.target.value)} style={styles.input}/>
      <button onClick={handleLogin} style={styles.button}>Login</button>
      {error && <p style={styles.error}>{error}</p>}
    </div>
  );

}

const styles = {
  container: {
    maxWidth: '400px',
    margin: '100px auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    textAlign: 'center',
    backgroundColor: '#f9f9f9',
  },
  input: {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    fontSize: '16px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  error: {
    color: 'red',
    marginTop: '10px',
  },
};

export default Login;