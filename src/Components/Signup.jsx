
import React from 'react';
import './Signup.css';
import {Link} from 'react-router-dom';
function Signup  ()
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
          <input type="text" placeholder="Mobile Number" required/>
        </div>
        <br></br>
        <div className="input-box">
          <input type="email" placeholder="Email address" required/>
        </div>
        <br></br>
        <div className="input-box">
          <input type="password" placeholder="Password" required/>
        </div>
        <br></br>
        <button type="submit" className="signup-button">Sign Up</button>
       
      </form>
      <p>
        <h4>Already have an account?{' '}
      <Link to="/">Login</Link></h4>
      </p>
    </div>
  );
}

export default Signup;
