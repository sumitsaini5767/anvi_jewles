import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

const CoverPhoto = () => {
  return (
    <div className='bannerPhoto'>
        <div className="blankPage"></div>
        <h3>DESIGNER JEWELRY</h3>
        <h2>My account</h2>
        <div className="bottomBox">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li>■</li>
                <li>My account</li>
            </ul>
        </div>
    </div>
  )
}

export default CoverPhoto
