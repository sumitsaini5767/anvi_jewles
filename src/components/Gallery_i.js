import React from 'react'
import { Link } from 'react-router-dom'

export default function Gallery_i() {
  return (
    <>
      <div class="gal1">
        <div class="text1">
            <p><b>DESIGNER JEWELRY</b></p>
            <h1>Gallery</h1>
        </div>
        <div class="galbtn"> 
            <ul >
                <li class="btn1"><Link to="/"><b>Home</b></Link></li>
                <li><div class="btn2"></div></li>
                <li class="btn3"><Link to="/gallery"><b>Gallery</b></Link></li>
            </ul>
        </div>
    </div>
    </>
  )
}
