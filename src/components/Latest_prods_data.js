import React from 'react'
import '../css/Latest_prods_data.css'
import { Link } from 'react-router-dom'

const Latest_prods_data = (props) => {
  return (
    <div class="latest-products-div">
    <div class="my_latest-prods">
        
        <div class="latest-div">
            <div className='lp-sale'>
            {props.prodtype} 
            </div>
            <div className='lp-dis'>
            {props.prodis}
            </div>
        </div>
       {/* <div className='pcart'>
            <button>ADD TO CART</button>
        </div> */}
    </div>
    <div class="lp-details">
      <div class="lp-details1">
      <Link to="#" class="lp-name">Silver Pendant</Link>
          <h4 class="lp-price">$290</h4>
      </div>
    </div>
    </div>
  )
}

export default Latest_prods_data