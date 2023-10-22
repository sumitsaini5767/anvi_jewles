import React from 'react'
import '../css/Section_i_slider_data.css'

const Section_i_slider_data = (props) => {
  return (
    <div class="sec_1Bar">
    <div class="sec_1bar1">
      <div class="bar1">
        <div>
        <div class="img_div" >
          <img src={props.prodimg} alt="" class="bar-img"/>             
        </div>
      <h5>{props.prodname}</h5>
      <p>{props.prodqnty}</p>
        </div>
      <div class="sec1_imagehover">
        <img src={props.hoverimg} alt="" class="bar-img-bg"/>
      </div>
      </div>
      </div>
      </div>
  )
}

export default Section_i_slider_data