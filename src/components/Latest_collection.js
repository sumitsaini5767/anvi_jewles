import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Latest_collection_data from './Latest_collection_data'
import '../css/Latest_collection.css'

export default function Latest_collection() {
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
   <div class="latest_collections">
    <div class="latest_collection">

    <div class="latest_collection-text">
    <h1>Latest Collection</h1>
    <p>Designed to embrace the vibe, Check out the latest Collection of Anti jewellers crafted by the most experienced Craftsman and the most authentic class of Silver</p>
    <button class="latest_collection-btn"><b>SHOP NOW</b></button>
    </div>

    <div class="sell-slider">
    <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={2500} customTransition={"transform 1500ms ease-in-out"} removeArrowOnDeviceType={["desktop","tablet", "mobile"]} >
      <div class="products"><Latest_collection_data/></div>
      <div><Latest_collection_data /></div>
      <div><Latest_collection_data /></div>
      <div><Latest_collection_data /></div>
      <div><Latest_collection_data /></div>
    </Carousel>
    </div>
    </div>
   </div>
   </>
  )
}
