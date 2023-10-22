import React from 'react'
import '../css/Best_sell_prods_data.css'
import { Link } from 'react-router-dom'

const Best_sell_prods_data = (props) => {
  return (
  <div class="best-products-div">
    
    <div class="my_best-prods">
      <div class="best-prod-div">
            <div className='bp-sale'>
            {props.prodtype} 
            </div>
            <div className='bp-dis'>
            {props.prodis}
            </div>
        </div>
       {/* <div className='pcart'>
            <button>ADD TO CART</button>
        </div> */}
    </div>
    <div class="bp-details">
      <div class="bp-details1">
      <Link to="#" class="bp-name">Silver Pendant</Link>
          <h4 class="bp-price">$290</h4>
      </div>
    </div>
  </div>
  )
}

export default Best_sell_prods_data


