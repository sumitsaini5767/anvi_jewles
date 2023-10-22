import React from 'react'
import '../css/Section_i.css'
import '../css/Section_i_mobile.css'
import Section_i_slider from './Section_i_slider'

export default function Section_i() {
  return (
    <>

    <div id="sec_1">
        <div className='hero_sec_con'>
        <h4><b>ANVI JEWELLERS</b></h4>
      <h1>A Craftsman's Heritage</h1>
      <button id="b1"><b>EXPLORE DESIGNS</b></button>
        </div>

      <Section_i_slider/>

        {/* <div class="sec_1Bar">
          <div class="sec_1bar1">
            <div class="bar1">
              <div>
              <div class="img_div" >
                <img src="/images/bangle-y.png" alt="" class="bar-img"/>             
            </div>
            <h5>Anklets</h5>
            <p>6 Products</p>
              </div>
            <div class="sec1_imagehover">
              <img src="/images/bangle_icon_background.png" alt="" class="bar-img-bg"/>
            </div>
            </div>
            <div class="bar1">
              <div>
              <div class="img_div" >
                <img src="/images/ring.svg" alt="" class="bar-img"/>             
            </div>
            <h5>Armlets</h5>
            <p>6 Products</p>
              </div>
            <div class="sec1_imagehover_2">
              <img src="/images/ring.svg" alt="" class="bar-img-bg"/>
            </div>
            </div>
            <div class="bar1">
              <div>
              <div class="img_div" >
                <img src="/images/bracelet.svg" alt="" class="bar-img"/>             
            </div>
            <h5>Bracelets</h5>
            <p>6 Products</p>
              </div>
            <div class="sec1_imagehover_3">
              <img src="/images/bracelet.svg" alt="" class="bar-img-bg"/>
            </div>
            </div>
            <div class="bar1">
              <div>
              <div class="img_div" >
                <img src="/images/earrings.svg" alt="" class="bar-img"/>             
            </div>
            <h5>Earrings</h5>
            <p>6 Products</p>
              </div>
            <div class="sec1_imagehover_4">
              <img src="/images/earrings.svg" alt="" class="bar-img-bg"/>
            </div>
            </div>


            

            

            
        </div>
        </div> */}
      </div>
    </>
  )
}
