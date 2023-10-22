import React from 'react'
import '../css/Latest_prods.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Latest_prods_data from './Latest_prods_data'
import {
  CustomLeftArrow,
  CustomRightArrow,
  CustomButtonGroup,
  CustomButtonGroupAsArrows
} from "./Latest_CustomArrows";

export default function Latest_prods() {
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
      // const customPrevBtn=()=>(
      //   <ButtonComponent className="e-btn" cssClass='slider-btns'></ButtonComponent>
      // )
  return (
    <>
   <div class="latest-products">
    <div class="latest-prods">
    <div class="latest-prod-text">
    <h5>SHOP</h5>
    <h1>Latest Products</h1>
    </div>

    <div class="latest-slider">
    <Carousel responsive={responsive} infinite={true} keyBoardControl={true} customTransition={"transform 1200ms ease-in-out"} customLeftArrow={<CustomLeftArrow />}
        customRightArrow={<CustomRightArrow />} customButtonGroup={<CustomButtonGroup />} renderButtonGroupOutside={true} removeArrowOnDeviceType={["desktop","tablet", "mobile"]}>
      <div><Latest_prods_data prodtype="Sale" prodis="18%"/></div>
      <div><Latest_prods_data prodtype="Sale" prodis="25%"/></div>
      <div><Latest_prods_data prodtype="Sale" prodis="25%"/></div>
      <div><Latest_prods_data prodtype="Sale" prodis="18%"/></div>
      <div><Latest_prods_data prodtype="Sale" prodis="18%"/></div>
    </Carousel>
    </div>
    </div>
    </div>
    </>
  )
}
