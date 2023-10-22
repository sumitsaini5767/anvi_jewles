import React from 'react'
import '../css/Shop_i.css'
import { Link } from 'react-router-dom'

export default function Shop_i() {
  return (
    <>
    <div id="shop_1">

      <div id="shop_1_div1">
        <div class="shop_i_images">
          <img src="/images/shop_i.png" class="shop_i_img"/>
          <img src="/images/shop_i.png" class="shop_ii_img"/>
        </div>
       
        <div class="shop_i_text">
          <div class="shop_i_text_head">
            <h1>Jewellery that</h1>
            <h1>matters for you</h1>
          </div>  
          <div class="shop_i_text_para">
            <p>With the finest Quality and Craftsmanship we design the latest and </p>
            <p>Most genuine piece of stones for you to make every moment more special.</p>
          </div>
          <button id="shop-b1"><b>SHOP NOW</b></button>
          <div className='shop_i_radio'>  
            <div  class='shop_i_radio1'></div>
            <div  class='shop_i_radio1'></div>
            <div  class='shop_i_radio1' id="shop_i_radio11"></div>
            <div  class='shop_i_radio1'></div>
            <div  class='shop_i_radio1'></div>
          </div>
        </div>
        </div>
        <div class="shopbtn"> 
            <ul >
                <li class="shop-btn1"><Link to="/"><b>Home</b></Link></li>
                <li><div class="shop-btn2"></div></li>
                <li ><Link to="/shop"><b class="shop-btn3">Shop</b></Link></li>
            </ul>
        </div>
        
        
        
        
      </div>
    </>
  )
}
