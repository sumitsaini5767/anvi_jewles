import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Categories_data.css'

const Categories_data = (props) => {
 
  return (
    <div class="categories-div">
      <div class="my_categories1">

        <div class="category-div">
          <div className='c-sale'>
            {props.prodtype}
          </div>
          <div className='c-dis'>
            {props.prodis}
          </div>
        </div>
        {/* <div className='pcart'>
            <button>ADD TO CART</button>
        </div> */}
      </div>
      <div class="c-details">
        <div class="c-details1">
          <Link to="https://metropolitanhost.com/themes/themeforest/wp/laramiss/elementor/" class="c-name">Silver Pendant</Link>
          <h4 class="c-price">$290</h4>
        </div>
      </div>
    </div>
  )
}

export default Categories_data
