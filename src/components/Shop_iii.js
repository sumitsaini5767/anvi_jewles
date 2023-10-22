import React from 'react'
import '../css/Shop_iii.css'
import Trending_collection from './Trending_collection'
import Trending_slider from './Trending_slider'
import {IoFemale} from 'react-icons/io5'

export default function Shop_iii() {
  return (
    <div className='shop_iii'>
        <div class="shop3_divs">
      <div className='shop3_div1'>
        <div class="shop3_div1_text">
            <h3>Perfect Pieces for Him</h3>
            <p>Check out our collection of stylish  jewelry designed specifically for men. From sleek and modern to classic and timeless, we’ve got the perfect pieces to elevate any outfit.</p>
        </div>
        <div className='shop3_div1_btn'>
          <button id="shop-b2"><b>SHOP NOW</b></button>
        </div>
      </div>
      <div className='shop3_div1' id='shop3_mid'>

      </div>
      <div className='shop3_div1 shop3_div3'>
        <div class="shop3_div1_text">
            <h3>Beautiful Pieces for Her </h3>
            <p>Indulge in our stunning collection of jewelry for women. From delicate and dainty to bold and glamorous, our pieces will add the perfect finishing touch to any look.</p>
        </div>
        <div className='shop3_div1_btn'>
          <button id="shop-b2"><b>SHOP NOW</b></button>
        </div>
      </div>
      </div>

      <div className='shop3_div2'>
        <div class='shop3_div2_1'>
          <div class="shop3_div2_1_text">
      <h1 style={{textAlign:'center'}}>Trending Collection </h1>
      <p style={{textAlign:'center'}}>When an old craftsman met new generation, a fusion clear out the way,<br/> Make your Bold moves every time with this perfectly crafted piece of jewellery,<br/> Check out the trending collection for every Occasion.</p>
      </div>
      <div class="trending-collection-images">
      <div class="trending"><Trending_collection /></div>
      <div class="trending"><Trending_collection /></div>
      <div class="trending"><Trending_collection /></div>
      <div class="trending"><Trending_collection /></div>
      <div class="shop3_div2_btn">
        <p class="shop3_div2_btn_text">View Trending Collection</p>
      </div>
    </div>

    <div class="shop3_divs3">
      <div class="shop3_div3_1">
        <div class="shop3_div3_1image">
          <img class="shop3_div3_1img1 shop3_div3_1img2" src="/images/Group 695.png" alt=""/>
        </div>
        <div class="shop3_div3_1text">
        <h3>925 Sterling Silver</h3>
        <p>Crafted with the most authentic class of silver and genuine piece of stones, All jewellery are made by the press form of 925- Sterling Silver</p>
        </div>
      </div>
      <div class="shop3_div3_1 shop3_div3_2">
        <div class="shop3_div3_1image">
          <img class="shop3_div3_1img1 shop3_div3_1img2" src="/images/Group 697.png" alt=""/>
        </div>
      <div class="shop3_div3_1text">
        <h3>Free/ fast Delivery </h3>
        <p>Fast and easy delivery around India, with the maximum time period of 3-4 working days, to celebrate the moment at its best </p>
        </div>
      </div>
      <div class="shop3_div3_1 shop3_div3_3">
        <div class="shop3_div3_1image">
          <img class="shop3_div3_1img1 shop3_div3_1img2" src="/images/Group 699.png" alt=""/>
        </div>
      <div class="shop3_div3_1text">
        <h3>Lifetime Warranty</h3>
        <p>Every jewellery is crafted and tested, as it comes with certificate of authencity. The silver jewels has the lifetime Silver warranty and won’t fade.</p>
        </div>
      </div>
      <div class="shop3_div3_1 shop3_div3_4">
        <div class="shop3_div3_1image">
          <img class="shop3_div3_1img1 shop3_div3_1img2" src="/images/Group 700.png" alt=""/>
        </div>
      <div class="shop3_div3_1text">
        <h3>Easy Exchange</h3>
        <p>Easy exchange is available for every jewels, incase if the product is damaged it will be exchanged, but we make sure you get the most fresh piece every time.</p>
        </div>
      </div>
    </div>
    </div>
      </div>
      <Trending_slider/>
      <div className='shop3_div4'>
        <div className='shop3_div4_i'>
      <h1 style={{textAlign:'center'}}>Anvi’s Categories</h1>
      <p style={{textAlign:'center'}}>Elevate your style with our exquisite collection of jewelry. From stunning statement pieces to everyday essentials,<br/> we have something for every occasion and taste. Shop now and sparkle!</p>
      <div class="shop3_divs4">
      <div class=" shop3_div4_1">
        <div class="shop3_div4_1_sidebars">
          <div class="shop3_div4_1_sidebar1">
            <img src="/images/Group 195.png" alt=""/>
          </div>
          <div class="shop3_div4_1_sidebar2">
            <img src="/images/Group 196.png" alt=""/>
          </div>
        </div>
        <div class="shop3_div4_1text">
        <p>Rings</p>
        </div>
      </div>
      <div class="shop3_div4_1">
      <div class="shop3_div4_1_sidebars">
          <div class="shop3_div4_1_sidebar1">
            <img src="/images/Group 195.png"/>
          </div>
          <div class="shop3_div4_1_sidebar2">
            <img src="/images/Group 196.png" alt=""/>
          </div>
        </div>
      <div class="shop3_div4_1text">
        <p>Rings</p>
        </div>
      </div>
      <div class="shop3_div4_1">
      <div class="shop3_div4_1_sidebars">
          <div class="shop3_div4_1_sidebar1">
            <img src="/images/Group 195.png"/>
          </div>
          <div class="shop3_div4_1_sidebar2">
            <img src="/images/Group 196.png" alt=""/>
          </div>
        </div>
      <div class="shop3_div4_1text">
      <p>Rings</p>
        </div>
      </div>
      <div class="shop3_div4_1">
      <div class="shop3_div4_1_sidebars">
          <div class="shop3_div4_1_sidebar1">
            <img src="/images/Group 195.png"/>
          </div>
          <div class="shop3_div4_1_sidebar2">
            <img src="/images/Group 196.png" alt=""/>
          </div>
        </div>
      <div class="shop3_div4_1text">
      <p>Rings</p>
        </div>
      </div>
    </div>
    </div>
    </div>
    </div>
  )
}
