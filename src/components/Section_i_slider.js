import React from 'react'
import '../css/Section_i_slider.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Section_i_slider_data from './Section_i_slider_data';


export default function Section_i_slider() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (
    <>
   
    

    <div class="sec_i-slider">
    <Carousel responsive={responsive} swipeable={true} draggable={true} infinite={true} autoPlay={true} autoPlaySpeed={2500} customTransition={"transform 1500ms ease-in-out"} keyBoardControl={true} 
    removeArrowOnDeviceType={["desktop","tablet", "mobile"]}>
      <div><Section_i_slider_data prodimg="/images/bangle-y.png" prodname="Anklets" prodqnty="6 Products" hoverimg="/images/bangle_icon_background.png" /></div>
      <div ><Section_i_slider_data prodimg="/images/ring.svg" prodname="Armlets" prodqnty="6 Products" hoverimg="/images/ring.svg" /></div>
      <div><Section_i_slider_data prodimg="/images/bracelet.svg" prodname="Bracelets" prodqnty="6 Products" hoverimg="/images/bracelet.svg" /></div>
      <div><Section_i_slider_data prodimg="/images/earrings.svg" prodname="Earrings" prodqnty="6 Products" hoverimg="/images/earrings.svg" /></div>
      
    </Carousel>
    </div>
    
    </>
  )
}
