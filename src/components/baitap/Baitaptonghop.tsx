import React from 'react'
import './baitaptonghop.scss'
export default function baitaptonghop() {
  return (
    <div className='all'>
      <img className='all-img' src="https://afamilycdn.com/2017/giac-mo-1-1490344267267.jpg" alt="" />
      <div className='login'>
        <h3 className='login-text'>Login</h3>
        <div>E-mail</div>
        <input className='login-email' type="text" placeholder='Content'/>
        <div>Password</div>
        <input className='login-password' type="text" placeholder='Content'/>
        <div><a href="" className='login-forgot'>Forgot password?</a></div>
        <button className='login-login'>Login</button>
        <div className='login-or'>or</div>
        <button  className='login-register'>Register now</button>
      </div>
    </div>
  )
}
