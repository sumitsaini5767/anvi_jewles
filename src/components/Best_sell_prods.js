import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Best_sell_prods_data from './Best_sell_prods_data'
import '../css/Best_sell_prods.css'

export default function Best_sell_prods() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      deviceType:''
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      deviceType:''
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      deviceType:''
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      deviceType:''
    }
  };
  return (
   <>
   <div class="best-sell-prods">
    <div class="best-prods">

    <div class="best-prods-text">
    <h5>BUY NOW</h5>
    <h1>Bestselling Products</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
    <button class="best-prods-btn"><b>KNOW MORE</b></button>
    </div>

    <div class="best-sell-slider">
    <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={2500} customTransition={"transform 1500ms ease-in-out"} removeArrowOnDeviceType={["desktop","tablet", "mobile"]} >
      <div ><Best_sell_prods_data prodtype="Sale" prodis="18%"/></div>
      <div><Best_sell_prods_data prodtype="Sale" prodis="25%"/></div>
      <div><Best_sell_prods_data prodtype="Sale" prodis="25%"/></div>
      <div><Best_sell_prods_data prodtype="Sale" prodis="18%"/></div>
      <div><Best_sell_prods_data prodtype="Sale" prodis="18%"/></div>
    </Carousel>
    </div>
    </div>
   </div>
   </>
  )
}
