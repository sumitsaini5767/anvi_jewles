import React, { useState } from 'react'
// import {AiOutlineLike} from 'react-icons/ai'
// import {GiEarrings} from 'react-icons/gi'
// import {CiUser} from 'react-icons/ci'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'
import '../css/Counter.css'




export default function Counter() {

  const [counterOn, setCounterOn] = useState(false);

  // let counts=setInterval(updated);
  // let upto=0;
  // function updated(){
  //     var count= document.getElementById("Album");
  //     count.innerHTML=++upto;
  //     if(upto===84)
  //     {
  //         clearInterval(counts);
  //     }
  // }



  return (
    <div className='counter'>
      <div className='countSec1'>
        <div><h4>YOUR LOVE AND SUPPORT</h4></div>
        <div><h2>Our Winning</h2></div>
      </div>
      <div className='countSec2'>
        <div className="countSec2Album">
          <img src='/images/bangle_icon_background.png' alt=''></img>
          <div className='counter-text'>
            <ScrollTrigger onEnter={() => setCounterOn(true)} >
              <h4 id="Album">
                {counterOn && <CountUp start={0} end={84} duration={2} delay={0} />}K<sub>+</sub>
              </h4>
            </ScrollTrigger>
            <p>Jewelriess in Album</p></div>
        </div>

        <div className="countSec2Feed">
          <img src='/images/like_icon.png' alt=''></img>
          <div className='counter-text'>
            <ScrollTrigger onEnter={() => setCounterOn(true)} >
              <h4 id="Album">
                {counterOn && <CountUp start={0} end={10} duration={2} delay={0} />}M<sub>+</sub>
              </h4>
            </ScrollTrigger>
            <p>Happy Feedbacks</p></div>
        </div>

        <div className="countSec2Cat">
          <img img src='/images/earrings_icon.png' alt=''></img>
          <div className='counter-text'>
            <ScrollTrigger onEnter={() => setCounterOn(true)}  >
              <h4 id="Album">
                {counterOn && <CountUp start={0} end={2} duration={2} delay={0} />}K<sub>+</sub>
              </h4>
            </ScrollTrigger>
            <p>Categories Served</p></div>
        </div>

        <div className="countSec2Client">
          <img src='/images/user_icon.png' alt=''></img>
          <div className='counter-text'>
            <ScrollTrigger onEnter={() => setCounterOn(true)} >
              <h4 id="Album">
                {counterOn && <CountUp start={0} end={100} duration={2} delay={0} />}K<sub>+</sub>
              </h4>
            </ScrollTrigger>
            <p>Happy Clients</p></div>
        </div>

      </div>
    </div >
  )
}