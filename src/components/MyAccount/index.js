import React, { useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import validations from './validations';

const Login = () => {
  const [values, setvalues] = useState({
    name: '',
    password: ''
  })
  const [errors, setError] = useState({})
  function handleChange(e) {
    setvalues({ ...values, [e.target.name]: e.target.value })
  }
  function handleSubmit(e) {
    e.preventDefault();
    setError(validations(values));
  }
  return (

    <div className='loginContainer'>
      <div className="formBox">

        <h2>Login</h2>
        <form action="" onSubmit={handleSubmit}>
          <div className="input">
            <label htmlFor="">Username or email address <span>*</span></label>
            <input type="text" name='name' value={values.name} id='name' onChange={handleChange} />
            {errors.name && <p style={{ color: 'red', fontSize: '13px' }}>{errors.name}</p>}
          </div>
          <div className="input">
            <label htmlFor="">Password <span>*</span></label>
            <input type="password" name='password' value={values.password} id='password' onChange={handleChange} />
            {errors.password && <p style={{ color: 'red', fontSize: '13px' }}>{errors.password}</p>}
          </div>
          <div className="submitBox">
            <Link to='/Dashboard'><input type="submit" value="LOG IN" id='submitBtn' /></Link>
            <input type="checkbox" name="radio" id="radio" className='checkboxField' />
            <h5>Remember me</h5>
          </div>
          <Link to="/Forget_Password" id='forgottag'>LOST YOUR PASSWORD?</Link>
        </form>
      </div>
    </div>
  )
};

export default Login
