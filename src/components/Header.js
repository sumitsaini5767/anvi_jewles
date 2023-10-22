import React from 'react'
import {FaFacebook,FaTwitter,FaPinterest,FaLinkedin} from 'react-icons/fa'
import '../css/Header.css'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <>
    <div className="hbar">
    <div className='hbar-icons'>
    <ul>
        <li><Link to=""><FaFacebook/></Link></li>
        <li><Link to=""><FaTwitter/></Link></li>
        <li><Link to=""><FaPinterest/></Link></li>
        <li><Link to=""><FaLinkedin/></Link></li>
    </ul>
    </div>
    </div>
    
    </>
  )
}
