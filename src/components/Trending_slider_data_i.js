import React from 'react'
import '../css/Trending_slider_data.css'

const Trending_slider_data_i = (props) => {
  return (
    <div class="my_ts-prods">
          <img class="ts-img" src={props.prodimg} alt=""/>
          <div className='ts-news1'>
            <div class="ts-info">
              {props.prodinfo1} 
              <div class="ts-details">
                {props.prodetails} 
              </div>
            </div>
          </div>
        </div>
  )
}

export default Trending_slider_data_i