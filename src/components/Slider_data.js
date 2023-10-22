import React from 'react'
import '../css/Slider_data.css'

const Slider_data = (props) => {
  return (
    <div class="shop_1Bar">
    <div class="shop_1bar1">
      <div class="sh-bar1">
        <div>
        <div class="sh-img_div" >
          <img src={props.prodimg} alt="" class="sh-bar-img"/>             
        </div>
      <h5>{props.prodname}</h5>
      <p>{props.prodqnty}</p>
        </div>
      <div class="shop1_imagehover">
        <img src={props.hoverimg} alt="" class="sh-bar-img-bg"/>
      </div>
      </div>
      </div>
      </div>
  )
}

export default Slider_data