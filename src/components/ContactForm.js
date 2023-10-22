import React from 'react'
import {useForm} from 'react-hook-form'
const ContactForm = () => {
    return (
        <>
            <div className='formContainer'>
                <div className='formBox1'>
                    <form>
                        <div className='form-field'>
                            <div className='icon-text'><input type='text' placeholder='Your Full Name'/></div>
                            <div className='icon-text'><input type='text' placeholder='Enter Email Address' /></div>
                        </div>
                        <div className='form-field'> 
                            <div className='icon-text'><input type='text' placeholder='Add Phone Number'/></div>
                            <div className='icon-text'><input type='text' placeholder='Subject'/></div>
                        </div>
                        <div className='form-field'> <div className='icons'><input type="text" placeholder='Enter Message'/></div></div>
                        <div className='form-field'><input className='submit' type='submit' value='Get Free Quote'/></div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ContactForm