import React from 'react'
import './Login.css';
import {Link} from 'react-router-dom';

function Login() {
  return (
    <div className='wrapper'>
      <form action="">
        <h1>LOGIN</h1>
        <div className="input-box">
            <input type="text" placeholder="Username" required />
        </div>
        <div className="input-box">
            <input type="password" placeholder="Password" required />
        </div>
       
        <button type="submit">Login</button>
      </form>
      <p>
        <h3>Don't have an account?{' '}
        <Link to="/Signin">Sign up</Link></h3>
      </p>
    </div>
  );
}

export default Login;
