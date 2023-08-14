import React from 'react';

function Signup() {
  function handleSignup(event) {
    event.preventDefault();
  }
  function handleLogin(event) {
    event.preventDefault();
  }
  return (
    <div className="signup-main">
      <main>
        <section>
          <h2>Login</h2>
          <form>
            <input type="email" placeholder='Email' name='email' />
            <input type="password" placeholder='Password' name='password' />
            <button type="submit" onClick={handleLogin}>Login</button>
          </form>
        </section>
        <section>
          <h2>Signup</h2>
          <form>
            <input type="text" placeholder='First name' name='firstName' />
            <input type="text" placeholder='Last name' name='lastName' />
            <input type="email" placeholder='Email' name='email' />
            <input type="password" placeholder='Password' name='password' />
            <input type="password" placeholder='Confirm Password' name='confirmPassword' />
            <button type="submit" onClick={handleSignup}>Signup</button>
          </form>
        </section>
      </main>
    </div>
  )
}

export default Signup;