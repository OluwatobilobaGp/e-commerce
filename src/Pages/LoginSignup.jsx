import React from 'react'
import './CSS/LoginSignup.css'

const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-field">
          <input type="text" placeholder='Your Name' />
          <input type="email" placeholder='Email Address'/>
          <input type="password" placeholder='Password'/>
        </div>
        <button>Continue</button>
        <p className="loginsingup-login">Already have an account? <span>Login here</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id='' />
          <p>By continue, I agree to the term of use & privacy policy.</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup