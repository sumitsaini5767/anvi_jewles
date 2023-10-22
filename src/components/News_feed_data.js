import React from 'react'
import '../css/News_feed_data.css'

const News_feed_data = (props) => {
  return (
    <div class="my_news_prods">
      <div class="news-feed-imgs">
        <img class="news-feed-img" src={props.prodimg} alt="" />
      </div>

      <div class="news-div2">
        <div className='nf-news'>
          <div class="nf-date">
            {props.prodnews1}
          </div>
          <div class="nf-info">
            {props.prodnews2}
          </div>
          <div class="nf-details">
            {props.prodnews3}
          </div>
        </div>
      </div>



    </div>
  )
}

export default News_feed_data