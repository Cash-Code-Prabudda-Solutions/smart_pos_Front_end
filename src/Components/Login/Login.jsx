import React, { useState } from 'react';
import "./Login.css";
import {GrClose} from "react-icons/gr";
import { NavLink } from 'react-router-dom';

const Login = ({ setIsLoginOpen }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    if (email === 'e' && password === 'e') {
      setIsLoggedIn(true);
    } else {
      alert('Invalid email or password. Please try again.');
    }
  };

  return (
    <div className="login-overlay">
      <div className="login-box">
        <button onClick={() => setIsLoginOpen(false)} className='login-box_close'><GrClose/></button>
        <form>
          <table>
            <tr>
              <td><label>Email </label></td>
              <td>:</td>
              <td><input value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email'/></td>
            </tr>
            <br></br>
            <tr>
              <td><label>Password </label></td>
              <td>:</td>
              <td><input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password'/></td>
            </tr>
          </table>
        </form>
        <button className='login-box_login_btn' onClick={() => {
          handleLogin();
          if (isLoggedIn) {
            <NavLink to="/logged-home" /> // Navigate only if login is successful
          }
        }}>Login</button>
        {/* {isLoggedIn && <NavLink to="/logged-home">Login Successful</NavLink>} */}
      </div>
    </div>
  );
};

export default Login;