import React from 'react'
import { Link } from 'react-router-dom'

export default function Contact_i() {
  return (
    <>
      <div class="con1">
        <div class="text">
            <p><b>DESIGNER JEWELRY</b></p>
            <h1>Contact Us</h1>
        </div>
        <div class="conbtn"> 
            <ul >
                <li class="btn1"><Link to="/"><b>Home</b></Link></li>
                <li><div class="btn2"></div></li>
                <li class="btn3"><Link to="/contact"><b>Contact Us</b></Link></li>
            </ul>
        </div>
    </div>
    </>
  )
}
