import React from 'react'
import './style.css';

const ForgetPassword = () => {
  return (
    <div className='loginContainer'>
      <div className="formBox">

        <h2>Lost password</h2>
        <form action="">
          <div className="input">
            <label htmlFor="">Lost your password? Please enter your username or email address. You will receive a link to create a new password via email.</label>
            <label htmlFor="">Username or email</label>
            <input type="mail" name='name' id='name' style={{width:'50%'}} />
          </div>
          <div className="submitBox">
            <input type="submit" value="RESET PASSWORD" id='submitBtn' />
          </div>
        </form>
      </div>
    </div>
  )
}

export default ForgetPassword
