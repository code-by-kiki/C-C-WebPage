import React, { useState, useEffect } from 'react';
import delivary from '../assets/Delivery.png';
import Image from '../assets/LoginImage.png';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';


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
    <section style={{marginTop:110}}>
      <div style={styles.text}>
    <div className="row" >
      <div className="col-md-6  g-5">
        <motion.img src={Image} alt="Login Visual" style={{ width: '250px' }}
         whileHover={{
        y: -15,
        scale: 1.05,
        rotate: -2,
        transition: { type: 'spring', stiffness: 300 },
      }}
    />

     <motion.img src={delivary} alt='Image' style={{width:260,}}
     animate={{x:[0,20,0]}}
     transition={{duration:3,repeat:Infinity,ease:'easeInOut'}} 
     />

        
         
         <div className="row mt-3">
          <p ><b>Welcome back to your trusted C2C marketplace—where every connection begins with a click.
           Log in to explore, trade, and thrive in a community built for you.</b>
          </p>
         </div>
      </div>
      <div className="col-md-6 "style={styles.container}>
          <h2 style={{justifyContent:'center'}}>Sign In</h2>
      <input type="text" placeholder="Username"  value={username} onChange={(e) => setUsername(e.target.value)} style={styles.input}  />
      <input type="number" placeholder="PhoneNumber" value={phonenum}  onChange={(e) => setphonenum(e.target.value)}  style={styles.input}/>
      <input type='email' placeholder='E-Mail' value={email} onChange={(e) => setemail(e.target.value)} style={styles.input}/>
      <button onClick={handleLogin} style={styles.button}>Login</button>
      {error && <p style={styles.error}>{error}</p>}
      </div>
    </div>
    </div>
    </section>
  );

}

const styles = {
  container: {
    maxWidth: '600px',
    maxheight:'900px',
    margin: ' 0 auto',
    padding: '20px',
    borderRadius: '8px',
    textAlign: 'center',  
  },
  input: {
    width: '80%',
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
    width:'80%',
     margin: '10px 55px',
  },
  error: {
    color: 'red',
    marginTop: '10px',
  },

 text: {
  paddingTop:100,
  fontSize: '26px',
  fontFamily: '"Poppins", "Noto Sans Tamil", sans-serif',
  color: '#44444E',
  textIndent: '85px',
  letterSpacing: '0.6px',
  lineHeight: '1.6',
  background: 'linear-gradient(to right, #ffffffff, #c3d9e2ff)',
  padding: '12px 18px',
  borderRadius: '8px',
  boxShadow: '0 2px 6px rgba(0,0,0,0.1)',

}


};

export default Login;