import React from 'react'
import '../css/Trending_slider_data.css'

const Trending_slider_data_ii = (props) => {
  return (
    <div class="my_ts-prods">
      <img class="ts-img" src={props.prodimg} alt=""/>
      <div className='ts-news2'>
        <div class="ts-details">
          {props.prodetails} 
          <div class="ts-info2">
            {props.prodinfo2} 
          </div>
        </div>
      </div>
    </div>
  )
}

export default Trending_slider_data_ii