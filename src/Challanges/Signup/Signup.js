import React from 'react';
import './Signup.css';

function Signup() {
  function handleSignup(event) {
    event.preventDefault();
  }
  function handleLogin(event) {
    event.preventDefault();
  }
  return (
    <div className="signup-main">      
      <section>
        <h2>Login</h2>
        <form>
          <input className="form-input" type="email" placeholder='Email' name='email' autoFocus/>
          <input className="form-input" type="password" placeholder='Password' name='password' />
          <button className="form-input" type="submit" onClick={handleLogin}>Login</button>
        </form>
      </section>
      <section>
        <h2>Signup</h2>
        <form>
          <section className="two-input-one-row">
            <input className="form-input" type="text" placeholder='First name' name='firstName' autoFocus/>
            <input className="form-input" type="text" placeholder='Last name' name='lastName' />
          </section>
          <input className="form-input" type="email" placeholder='Email' name='email' />
          <input className="form-input" type="password" placeholder='Password' name='password' />
          <input className="form-input" type="password" placeholder='Confirm Password' name='confirmPassword' />
          <button className="form-input" type="submit" onClick={handleSignup}>Signup</button>
        </form>
      </section>      
    </div>
  )
}

export default Signup;