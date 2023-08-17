import React, { useState, useRef, useEffect } from 'react';
import './Signup.css';

function Signup() {
  const [isLoginActive, setLoginActive] = useState(true);
  const [isFirstLoad, setFirstLoad] = useState(true);

  const inputRef = useRef(null);

  function handleSignup(event) {
    event.preventDefault();
  }
  function handleLogin(event) {
    event.preventDefault();
  }

  function switchToLogin(event) {
    event.preventDefault();
    setFirstLoad(false);
    setLoginActive(true);
  }
  function switchToRegister(event) {
    event.preventDefault();
    setFirstLoad(false);
    setLoginActive(false);
  }

  useEffect(() => {
    if (!isFirstLoad && inputRef.current) {
      inputRef.current.focus(); // Focus the input after animation
    }
  }, [isFirstLoad]);

  return (
    <div className="signup-main">
      <section className={!isFirstLoad && (isLoginActive ? 'slide-left-display-initial-animation' : 'slide-left-display-none-animation')}>
        <h2>Login</h2>
        <form>
          <div className="form-input"><input className="form-input" type="email" placeholder='Email' name='email' ref={inputRef} autoFocus /></div>
          <div className="form-input"><input className="form-input" type="password" placeholder='Password' name='password' /></div>
          <button className="form-submit-button" type="submit" onClick={handleLogin}>Login</button>
        </form>
        <a href='' onClick={switchToRegister}>New here? Register now!</a>
      </section>
      <section className={!isFirstLoad && (!isLoginActive ? 'slide-left-display-initial-animation' : 'slide-left-display-none-animation')}>
        <h2>Signup</h2>
        <form>
          <section className="two-input-one-row">
            <div className="form-input"><input className="form-input" type="text" placeholder='First name' name='firstName' ref={inputRef} autoFocus /></div>
            <div className="form-input"><input className="form-input" type="text" placeholder='Last name' name='lastName' /></div>
          </section>
          <div className="form-input"><input className="form-input" type="email" placeholder='Email' name='email' /></div>
          <div className="form-input"><input className="form-input" type="password" placeholder='Password' name='password' /></div>
          <div className="form-input"><input className="form-input" type="password" placeholder='Confirm Password' name='confirmPassword' /></div>
          <button className="form-submit-button" type="submit" onClick={handleSignup}>Signup</button>
        </form>
        <a href='' onClick={switchToLogin}>Already have an account? Login here!</a>
      </section>
    </div>
  )
}

export default Signup;