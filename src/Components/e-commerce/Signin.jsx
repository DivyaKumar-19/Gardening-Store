
import React from 'react';
import './Signin.css';
import {Link} from 'react-router-dom';
function Signin  ()
{  
  return (
    <div className="App">
      <form action="">
        <h3>Create an account</h3>
        <br></br>
        <div className="input-box">
          <input type="text" placeholder="FirstName" required/>
        </div>
        <br></br>
        <div className="input-box">
          <input type="text" placeholder="LastName" required/>
        </div>
        <br></br>
        <div className="input-box">
          <input type="text" placeholder="Mobile/Email" required/>
        </div>
        <br></br>
        <div className="input-box">
          <input type="password" placeholder="Password" required/>
        </div>
        <br></br>
        <div className="input-box">
          <input type="password" placeholder="Confirm Password" required/>
        </div>
        <br></br>
        <button type="submit" className="signup-button">Sign Up</button>
       
      </form>
      <p>
        <h3>Already have an account?{' '}
      <Link to="/">Login</Link></h3>
      </p>
    </div>
  );
}

export default Signin;
