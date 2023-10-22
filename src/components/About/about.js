import React, { useState } from 'react'
import './about.css'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'

const About = () => {
    const[counterOn,setCounterOn]= useState(false);
    return (
        <>
            <div className="about-box1">
                <img src="images/about_bg2.jpg" alt="" />
            </div>
            <div className="about-box2">
                <h4>SINCE <span>1194</span></h4>
                <p>Hello. Our store has been present for over 30 years . We give assurance to all customers.</p>
            </div>
            <div className="about-box3">
                <div className="box3">
                    <div className="upper_box3">
                        <div className="boxes">
                            <p>ANKLETS</p>
                        </div>
                        <div className="boxes">
                            <p>armlets</p>
                        </div>
                        <div className="boxes">
                            <p>bracelets</p></div>
                        <div className="boxes">
                            <p>earrings</p>
                        </div>
                        <div className="boxes">
                            <p>neacklecs</p>
                        </div>
                    </div>
                    <div className="lower_box3">
                        <div className="lower_box3_left">
                            <img src="images/about-content.jpg" alt="" />
                        </div>
                        <div className="lower_box3_right">
                            <h4>get 50 % off</h4>
                            <p>Get All Gold Jewelry At 50 Percent, Grab It Now</p>
                            <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tem por incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</h5>
                            <p>Best Jewelry Products with Great Discounts</p>
                        </div>
                    </div>
                </div>
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
                                <img id="abtUse1" src='images/user_icon.png' alt='' />
                            </div>
                            <div className='abtFC2UserText'>
                                <ScrollTrigger onEnter={() => setCounterOn(true)} >
                                    <h4 id="Album">
                                        {counterOn && <CountUp start={0} end={8000} duration={2} delay={0} />}
                                    </h4>
                                </ScrollTrigger>
                                <p>Happy Users</p>
                            </div>

                        </div>

                        <div className="abtFC2User">
                            <div className='abtFC2UserIcon'>
                                <img src='images/like_icon.png' alt='' />
                            </div>
                            <div className='abtFC2UserText'>
                                <ScrollTrigger onEnter={() => setCounterOn(true)} >
                                    <h4 id="Album">
                                        {counterOn && <CountUp start={0} end={10} duration={2} delay={0} />}M
                                    </h4>
                                </ScrollTrigger>
                                <p>Reviews & Appericiate</p>
                            </div>

                        </div>


                        <div className="abtFC2User">
                            <div className='abtFC2UserIcon'>
                                <img id="abtUse2" src='images/location_icon2.png' alt='' />
                            </div>
                            <div className='abtFC2UserText'>
                                <ScrollTrigger onEnter={() => setCounterOn(true)} >
                                    <h4 id="Album">
                                        {counterOn && <CountUp start={0} end={100} duration={2} delay={0} />}
                                    </h4>
                                </ScrollTrigger>
                                <p>Country Coverage</p>
                            </div>
                        </div>
                    </div>
                    <div className="box4">
                        <img src="images/neck.jpg" alt="" />
                        <img src="images/neck2.jpg" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
