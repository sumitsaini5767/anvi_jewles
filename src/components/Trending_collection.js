import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Trending_collection.css'

const Trending_collection = (props) => {
  return (
    <div class="trending-collections-div">
    <div class="my_trending-collection">
        
        <div class="trending-collection-div">
            
        </div>
       {/* <div className='pcart'>
            <button>ADD TO CART</button>
        </div> */}
    </div>
    <div class="tc-details">
      <div class="tc-details1">
      <Link to="" class="tc-name">Silver Pendant</Link>
          <h4 class="tc-price">$290</h4>
      </div>
        </div>
    </div>
  )
}

export default Trending_collection
