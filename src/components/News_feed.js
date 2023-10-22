import React from 'react'
import '../css/News_feed.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import News_feed_data from './News_feed_data'
import {
  CustomLeftArrow,
  CustomRightArrow,
  CustomButtonGroup,
  CustomButtonGroupAsArrows
} from "./News_CustomArrows";

export default function News_feed() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
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
   <div class="news_feeds">
    <div class="news_feed">
    <div class="news_feed-text">
    <h5>BLOG</h5>
    <h1>News Feeds</h1>
    </div>

    <div class="news-slider">
    <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={2500} customTransition={"transform 1500ms ease-in-out"} keyBoardControl={true} customLeftArrow={<CustomLeftArrow />}
        customRightArrow={<CustomRightArrow />} customButtonGroup={<CustomButtonGroup />} renderButtonGroupOutside={true} removeArrowOnDeviceType={["desktop","tablet", "mobile"]}>
      <div ><News_feed_data class="news-feed-images" prodimg="/images/news1.jpg" prodnews1="23 November 22" prodnews2="Non-Diamond Gemstones for Engagement Rings." prodnews3="How to Shop For Jewelry When You Have a Metal Allergy"/></div>
      <div><News_feed_data prodimg="images/gallery-10.jpg" prodnews1="23 November 22" prodnews2="Non-Diamond Gemstones for Engagement Rings." prodnews3="How to Shop For Jewelry When You Have a Metal Allergy"/></div>
      <div><News_feed_data prodimg="images/gallery-12.jpg" prodnews1="23 November 22" prodnews2="Non-Diamond Gemstones for Engagement Rings." prodnews3="How to Shop For Jewelry When You Have a Metal Allergy"/></div>
      <div><News_feed_data prodimg="/images/news1.jpg" prodnews1="23 November 22" prodnews2="Non-Diamond Gemstones for Engagement Rings." prodnews3="How to Shop For Jewelry When You Have a Metal Allergy"/></div>
      <div><News_feed_data prodimg="images/gallery-10.jpg" prodnews1="23 November 22" prodnews2="Non-Diamond Gemstones for Engagement Rings." prodnews3="How to Shop For Jewelry When You Have a Metal Allergy"/></div>
      <div><News_feed_data prodimg="images/gallery-12.jpg" prodnews1="23 November 22" prodnews2="Non-Diamond Gemstones for Engagement Rings." prodnews3="How to Shop For Jewelry When You Have a Metal Allergy"/></div>     
    </Carousel>
    </div>
    </div>
    </div>
    </>
  )
}
