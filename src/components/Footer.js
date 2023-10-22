import React from 'react'
import {FaTwitter,FaFacebookF,FaInstagram,FaPhoneAlt,FaSearch} from 'react-icons/fa'
import {IoIosArrowUp} from 'react-icons/io'
import '../css/Footer.css'
import '../css/footer_mobileview.css'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'


export default function Footer() {
  return (
    <div className='foot' >
        <div className='footMain'>
            <div className="back2top">
            <i><IoIosArrowUp></IoIosArrowUp></i>
                    <span>Back To Top </span>
            </div>
            <div className='footSec1'>
                <div className='footSec1Lft'>
                    <img src='/images/logo1.svg' alt=''/>
                    <ul>
                        <img id="IconsImg" src='/images/daimon_icon.png' alt=''/><span ><Link class="footer-link" to="/">Home</Link></span>
                        <img id="IconsImg" src='/images/daimon_icon.png' alt=''/><span ><Link class="footer-link" to="/blog">Blog</Link></span>
                        <img id="IconsImg" src='/images/daimon_icon.png' alt=''/><span ><Link class="footer-link" to="/gallery">Memory</Link></span>
                        <img id="IconsImg" src='/images/daimon_icon.png' alt=''/><span ><Link class="footer-link" to="/shop">Shop</Link></span>
                        <img id="IconsImg" src='/images/daimon_icon.png' alt=''/><span ><Link class="footer-link" to="/aboutus">About Us</Link></span>
                        <img id="IconsImg" src='/images/daimon_icon.png' alt=''/><span ><Link class="footer-link" to="/contact">Contact Us</Link></span>
                        <img id="IconsImg" src='/images/daimon_icon.png' alt=''/><span ><Link class="footer-link" to="/">Privacy Policy</Link></span>
                        
                    </ul>
                </div>
                <div className='footSec1rgt'>
                    <ul>
                        <li><a href=""><FaFacebookF/></a></li>
                        <li><a href=""><FaInstagram/></a></li>
                        <li><a href=""><FaTwitter/></a></li>
                    </ul>
                </div>
            </div>
            <div className="footSec2">
                <div className="footSec2Phone">
                    <div className="footSec2PhoneImg">
                        <img id="IconsImg2" src='/images/phone_icon.png' alt=''/>
                    </div>
                    <div className='footSec2Phone1'>
                        <h4>Phone Number</h4>
                        <h6>+987 876 765 76 577</h6>
                    </div>
                </div>
                <div className="footSec2Email">
                    <div className="footSec2EmailImg">
                        <img id="IconsImg2" src='/images/mail_icon.png' alt=''/>
                    </div>
                    <div className='footSec2Email1'>
                        <h4>Email Address</h4>
                        <h6>info@examle.com</h6>
                    </div>
                </div>
                <div className="footSec2Srch">
                    <div className="footSec2SrchImg">
                        <a href=""><FaSearch/></a>
                    </div>
                    <div className='footSec2Srch1'>
                        <input type='search' placeholder='Search...' id="foot-search"></input>
                    </div>
                </div>
                
                <div className="footSec2Phone">
                    <div className='footSec2add1'>
                        <h4>Office Address</h4>
                        <h6>14/A, Miranda City, NYC</h6>
                    </div>
                    <div className="footSec2addImg">
                        <img id="IconsImg2" src='/images/location_icon.png' alt=''/>
                    </div>
                </div>
            </div>

        </div>


        <div class="container_mob">
            <div class="mobfoot">
                <div class="mobfoot_btn">
                    <NavLink to="/" id="mobfoot_btn_input1" name="mobfoot_btn_input" >
                    <div class="mobfoot_btn_input1_icon">
                        <img src='/images/foot_home.png'></img>
                    </div> 
                    </NavLink>
                </div>

                <div class="mobfoot_btn">
                    <NavLink to="/shop" id="mobfoot_btn_input2" name="mobfoot_btn_input">
                    <div class="mobfoot_btn_input1_icon">
                        <img src='/images/foot_shop.png'></img>
                    </div>
                    </NavLink>
                </div>

                <div class="mobfoot_btn">
                    <NavLink to="/cart" id="mobfoot_btn_input1" name="mobfoot_btn_input" >
                    <div class="mobfoot_btn_input1_icon">
                        <img src='/images/foot_cart.png'></img>
                    </div> 
                    </NavLink>
                </div>

                <div class="mobfoot_btn">
                    <NavLink to="/search" id="mobfoot_btn_input1" name="mobfoot_btn_input" >
                    <div class="mobfoot_btn_input1_icon">
                        <img src='/images/foot_search.png'></img>
                    </div> 
                    </NavLink>
                </div>

                <div class="mobfoot_btn">
                    <NavLink to="/account" id="mobfoot_btn_input1" name="mobfoot_btn_input" >
                    <div class="mobfoot_btn_input1_icon">
                        <img src='/images/foot_account.png'></img>
                    </div> 
                    </NavLink>
                </div>
            </div>
        </div>


    </div>
  )
}