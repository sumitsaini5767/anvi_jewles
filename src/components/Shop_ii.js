import React from 'react'
import '../css/Shop_ii.css'
import Latest_collection from './Latest_collection'
import Slider from './Slider'

export default function Shop_ii() {
  return (
    <>
    <div className='shop_ii'>
    {/* <div class="shop_1Bar">
          <div class="shop_1bar1">
            <div class="sh-bar1">
              <div>
              <div class="sh-img_div" >
                <img src="/images/bangle-y.png" alt="" class="sh-bar-img"/>             
              </div>
            <h5>Anklets</h5>
            <p>6 Products</p>
              </div>
            <div class="shop1_imagehover">
              <img src="/images/bangle_icon_background.png" alt="" class="sh-bar-img-bg"/>
            </div>
            </div>
            <div class="sh-bar1">
              <div>
              <div class="sh-img_div" >
                <img src="/images/ring.svg" alt="" class="sh-bar-img"/>             
            </div>
            <h5>Armlets</h5>
            <p>6 Products</p>
              </div>
            <div class="shop1_imagehover_2">
              <img src="/images/ring.svg" alt="" class="sh-bar-img-bg"/>
            </div>
            </div>
            <div class="sh-bar1">
              <div>
              <div class="sh-img_div" >
                <img src="/images/bracelet.svg" alt="" class="sh-bar-img"/>             
            </div>
            <h5>Bracelets</h5>
            <p>6 Products</p>
              </div>
            <div class="shop1_imagehover_3">
              <img src="/images/bracelet.svg" alt="" class="sh-bar-img-bg"/>
            </div>
            </div>
            <div class="sh-bar1">
              <div>
              <div class="sh-img_div" >
                <img src="/images/earrings.svg" alt="" class="sh-bar-img"/>             
            </div>
            <h5>Earrings</h5>
            <p>6 Products</p>
              </div>
            <div class="shop1_imagehover_3">
              <img src="/images/earrings.svg" alt="" class="sh-bar-img-bg"/>
            </div>
            </div>

            
            </div>
        </div> */}
        <Slider/>
        <Latest_collection/>
    </div>
    </>
  )
}
