import React from 'react'
import '../css/Categories.css'
import Categories_data from './Categories_data'

export default function Categories() {
  return (
   <>
   <div class="categories">
    <div class="category">
    <div class="category-text">
    <h5>CATEGORIES</h5>
    <h1>Our Categories</h1>
    </div>
    <div class="category-icons">
    <div> <input type="radio" id="anklets" name="category" value="anklets" defaultChecked />
          <label class="icon" for="anklets"><img src="/images/bangle_icon_background.png" class="cat-image"/>
          <h4>ANKLETS</h4></label></div>
    <div> <input type="radio" id="armlets" name="category" value="armlets" />
          <label class="icon" for="armlets"><img src="/images/bangle_icon_background.png" class="cat-image"/>
          <h4>ARMLETS</h4></label></div>
    <div> <input type="radio" id="bracelets" name="category" value="bracelets" />
          <label class="icon" for="bracelets"><img src="/images/bracelet.svg" class="cat-image"/>
          <h4>BRACELETS</h4></label></div>
    <div> <input type="radio" id="earrings" name="category" value="earrings" />
          <label class="icon" for="earrings"><img src="/images/earrings.svg" class="cat-image"/>
          <h4>EARRINGS</h4></label></div>
    <div> <input type="radio" id="necklaces" name="category" value="necklaces" />
          <label class="icon" for="necklaces"><img src="/images/necklace.svg" class="cat-image"/>
          <h4>NECKLACES</h4></label></div>
    <div> <input type="radio" id="rings" name="category" value="rings" />
          <label class="icon" for="rings"><img src="/images/ring_icon.png" class="cat-image-r cat-image"/>
          <h4>RINGS</h4></label></div>      
        {/* <div class="icon">
            <img src="/images/bangle_icon_background.png" class="cat-image"/>
            <h4>ANKLETS</h4>
        </div> */}
    </div>
    <div class="category-images">
      <div class="products"><Categories_data prodtype="Sale" prodis="18%"/></div>
      <div class="products"><Categories_data prodtype="Sale" prodis="25%"/></div>
      <div class="products"><Categories_data prodtype="Sale" prodis="25%"/></div>
      <div class="products"><Categories_data prodtype="Sale" prodis="18%"/></div>
    </div>
    </div>
   </div>
   </>
  )
}
