import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'
import '../css/aboutus.css'
import '../css/aboutus_mobileview.css'

export default function Aboutus() {

  const[counterOn,setCounterOn]= useState(false);

  return (
    <>
    <div className='aboutUs'>
      <div className='abtTop'>
        <p>DESIGNER JEWELRY</p>
        <h1>About</h1>
        <div className='abtTopSub'>
            <ul>
                <li id="abtli1"><Link to="/">Home</Link></li>
                <li ><div id="abtli2"></div></li>
                <li id="abtli3"><Link to="/aboutus">About</Link></li>
            </ul>
        </div>
        
      </div>


      <div className='abtHero'>
        <div className="abtHeroImg">
            <img src='/images/about_bg2.jpg' alt=''/>
        </div>
        <h4>SINCE <span>1928</span></h4>
        <h2>A Craftman's Heritage</h2>
        <p>Anvi Jewellers is a family-owned business that started in 1928. We are proud to have a 94-year legacy of creating, producing, and shipping high-quality sterling silver jewellery. Our silver jewellery is crafted with care and attention to detail, and it meets or exceeds industry standards. You can rely on Anvi Jewellers for quality craftsmanship and customer service. We’re dedicated to delivering the best possible shopping experience to our customers, whether they’re buying silver jewellery for themselves or as a gift for someone special. Thank you for considering Anvi Jewellers as your source for sterling silver jewellery.</p>
        <h3>Our dedication to quality craftsmanship and customer service is UNMATCHED</h3>
        <p>Anvi Jewellers has been crafting beautiful sterling silver jewellery for over ninety years. Our experienced jewellers pay close attention to detail, ensuring that each piece meets or exceeds industry standards. You can rest assured knowing that when you purchase from Anvi Jewellers, you’re getting a high-quality product. We’re also committed to providing excellent customer service, so if you have any questions or concerns, please don’t hesitate to contact us. Thank you for considering Anvi Jewellers as your source for sterling silver jewellery.</p>
      </div>

      <div className='abtHis'> 
        
      </div>

      <div className='abtFeed'>
        <div className="abtFeedCount">
          <div className='abtFeedCount1'>
            <h4>COUNTER</h4>
            <h2>Feedback At Glance</h2>
          </div>
          <div className="abtFeedCount2">
            <div className="abtFC2User">
                <div className='abtFC2UserIcon'> 
                    <img id="abtUse1" src='images/user_icon.png' alt=''/>
                </div>
                <div className='abtFC2UserText'>  
                    <ScrollTrigger onEnter={()=> setCounterOn(true)} >
                      <h4 id="Album">
                        {counterOn &&<CountUp start={0} end={8000} duration={2} delay={0}/>}
                      </h4>
                    </ScrollTrigger>
                    <p>Jewelriess in Album</p>
                </div>
               
            </div>
          
            <div className="abtFC2User">
                    <div className='abtFC2UserIcon'> 
                        <img src='images/like_icon.png' alt=''/>
                    </div>
                    <div className='abtFC2UserText'>  
                      <ScrollTrigger onEnter={()=> setCounterOn(true)} >
                        <h4 id="Album">
                          {counterOn &&<CountUp start={0} end={10} duration={2} delay={0}/>}M
                        </h4>
                      </ScrollTrigger>
                      <p>Jewelriess in Album</p>
                    </div>
                      
                </div>
          
            
            <div className="abtFC2User">
                    <div className='abtFC2UserIcon'> 
                        <img id="abtUse2" src='images/location_icon2.png' alt=''/>
                    </div>
                    <div className='abtFC2UserText'>  
                        <ScrollTrigger onEnter={()=> setCounterOn(true)} >
                          <h4 id="Album">
                            {counterOn &&<CountUp start={0} end={100} duration={2} delay={0}/>}
                          </h4>
                        </ScrollTrigger>
                        <p>Jewelriess in Album</p>
                    </div>
            </div>
          </div>
        </div>

        <div className="abtFeedPic">
            <img src='images/neck.png' alt=''/>
            <img src='images/neck2.png' alt=''/>
        </div>

      </div>
    </div>
    </>
  )
}
