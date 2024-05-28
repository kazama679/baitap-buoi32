import React from 'react'
import './logic.scss'
export default function Login() {
  return (
    /* Muốn dùng scss thì cần cài npm i sass */
    <div className='login'>
        <div className='login-name'>
            <label htmlFor="">usename</label>
            <input type="text" />
        </div>
        <div className='login-pass'>
            <label htmlFor="">password</label>
            <input type="text" />
        </div>
        <button>login</button>
    </div>
  )
}