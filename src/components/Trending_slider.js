import React from 'react'
import '../css/Trending_slider.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {
  CustomLeftArrow,
  CustomRightArrow,
  CustomButtonGroup,
  CustomButtonGroupAsArrows
} from "./Trending_CustomArrows";
import Trending_slider_data_i from './Trending_slider_data_i';
import Trending_slider_data_ii from './Trending_slider_data_ii';

export default function Trending_slider() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 7
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (
    <>
   <div class="trending_sliders">
    <div class="trending_slider">

    <div class="trending_slider1">
    <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={2500} customTransition={"transform 1500ms ease-in-out"} keyBoardControl={true} customLeftArrow={<CustomLeftArrow />}
        customRightArrow={<CustomRightArrow />} customButtonGroup={<CustomButtonGroup />} renderButtonGroupOutside={true} removeArrowOnDeviceType={["desktop","tablet", "mobile"]}>
      <div ><Trending_slider_data_i prodimg="/images/closeup-long-bride-s-fingers-covered-with-mehndi-lying.png" prodinfo1="Wedding Collection" prodetails="Complete your wedding look with our elegant collection of sterling silver jewelry. From intricate pendants to delicate earrings, our pieces are the perfect finishing touch for your special day." /></div>
      <div><Trending_slider_data_ii prodimg="/images/crop-woman-accessories-posing-coat_1153-2932 (1).png" prodinfo2="Spiritual Collection" prodetails="Find inner peace with our collection of spiritual silver jewelry. From symbolic pendants to healing crystals, our pieces will enhance your spiritual journey and connect you with positive energy."/></div>
      <div><Trending_slider_data_i prodimg="/images/silver-jewelry-box-with-jewels.png" prodinfo1="Everyday Collection" prodetails="Discover the beauty and versatility of our silver jewelry collection, perfect for everyday wear. From minimalist designs to intricate details, our pieces will add a touch of elegance to any outfit."/></div>
      <div><Trending_slider_data_ii prodimg="/images/closeup-long-bride-s-fingers-covered-with-mehndi-lying.png" prodinfo2="College Collection" prodetails="Make a statement with our trendy silver jewelry collection perfect for college. From minimalist designs to bold and edgy pieces, add a touch of sophistication to your everyday style." /></div>
      <div><Trending_slider_data_i prodimg="/images/crop-woman-accessories-posing-coat_1153-2932 (1).png" prodinfo1="Traditional Collection" prodetails="Discover the timeless beauty of our silver traditional jewelry collection. Handcrafted with intricate details and exquisite designs, our pieces are perfect for adding a touch of elegance to any outfit." /></div>
      <div><Trending_slider_data_ii prodimg="/images/silver-jewelry-box-with-jewels.png" prodinfo2="Spiritual Collection" prodetails="Find inner peace with our collection of spiritual silver jewelry. From symbolic pendants to healing crystals, our pieces will enhance your spiritual journey and connect you with positive energy."/></div>
    </Carousel>
    </div>
    </div>
    </div>
    </>
  )
}
