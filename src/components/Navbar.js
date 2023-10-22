import React from 'react'
import '../css/Navbar.css'
import '../css/Navbar_mobileview.css'
import { FaRegUser } from 'react-icons/fa'
import {BiSearch,BiShoppingBag} from 'react-icons/bi'
import {MdOutlineSort} from 'react-icons/md'
import {SlCalender} from 'react-icons/sl'
import {GrFacebookOption} from 'react-icons/gr'
import {AiOutlineTwitter} from 'react-icons/ai'
import {RiLinkedinFill} from 'react-icons/ri'
import {IoLogoPinterest} from 'react-icons/io'
import {RxCross2} from 'react-icons/rx'
import { Link } from 'react-router-dom'
import { useRef, useLayoutEffect } from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import {BsFillBagHeartFill} from 'react-icons/bs'
import { useState } from 'react'

export default function Navbar() {
  const stickyHeader = useRef();
  useLayoutEffect(() => {
    const topHeader = document.getElementById("nav");
    let fixedTop = stickyHeader.current.offsetTop;
    const fixedHeader = () => {
      if (window.pageYOffset > fixedTop) {
        topHeader.classList.add("fixedTop");
      } else {
        topHeader.classList.remove("fixedTop");
      }
    };
    window.addEventListener("scroll", fixedHeader);
  }, []);
 
  function popup(){
    document.querySelector(".popup-img").style.display="block";
  }
  function news_popup(){
    // document.querySelector(".latest-news").style.display="block";
    document.querySelector(".latest-news").style.left=0+"px";
  }
  function show_cart(){
    document.querySelector(".shopping-cart").style.display="block";
  }
  function cancel(){
    document.querySelector(".popup-img").style.display="none";
  }
  function cancel1(){
    document.querySelector(".latest-news").style.left=-34+"%";
  }
  function cancel2(){
    document.querySelector(".shopping-cart").style.display="none";
  }

  




// const mainMenu = document.querySelector('.mainMenu');
// const closeMenu = document.querySelector('.closeMenu');
// const openMenu = document.querySelector('.Ham_menu1');
// const menu_items = document.querySelectorAll('.mainMenu li a');


// openMenu.addEventListener('click',show);
// closeMenu.addEventListener('click',close);

// // close menu when you click on a menu item 
// menu_items.forEach(item => {
//     item.addEventListener('click',function(){
//         close();
//     })
// })

// function show(){
//     mainMenu.style.display = 'flex';
//     mainMenu.style.top = '0';
// }
// function close(){
//     mainMenu.style.top = '-100%';
// }

const [show,setshow]=useState(true);






  return (<>
    <div className="nav" id="nav" ref={stickyHeader}>
      <div><img src="/images/logo1.svg" id="pic1" alt=""/></div>
      
      <div class="dropdowns">
      <div class="dropdown">
        <span><Link to="/">Home</Link></span>
        </div>

        <div class="dropdown">
        <span><Link to="">Blog</Link></span>
        </div>

        <div class="dropdown">
        <span><Link to="">Categories</Link></span>
        <div class="dropdown-content">
         <div>
          <ul>
            <Link to="#">Rings</Link>
            <Link to="#">Earings</Link>
            <Link to="#">Bracelets</Link>
            <Link to="#">Pendants</Link>
            <Link to="#">Necklaces</Link>
          </ul>
         </div>
         </div>
        </div>

        <div class="dropdown">
        <span><Link to="/gallery">Memory</Link></span>
        </div>

        <div class="dropdown">
        <span><Link to="/shop">Shop</Link></span>
        </div>

        {/* <div class="dropdown">
        <span><Link to="/aboutus">About Us</Link></span>
        </div> */}

        <div class="dropdown">
        <span><Link to="/contact">Contact Us</Link></span>
        </div>

        <div class="dropdown">
        <Link class="drop-box" to="/account"><FaRegUser></FaRegUser></Link>
        </div>

        <div class="dropdown">
        <span class="drop-box" onClick={popup}><BiSearch></BiSearch></span>
        <div className="popup-img" style={{ display: "none" }}>
            <span className="cross" onClick={cancel}>&times;</span>
            <input type='text' placeholder='Search...' className='search-bar'/>
            <div className='search-icon'><BiSearch></BiSearch></div>
          </div>
        </div>
        

        <div class="dropdown">
        <span class="drop-box" onClick={news_popup}><MdOutlineSort></MdOutlineSort></span>
        <div className="latest-news" >
            <span className=" cross-latest" onClick={cancel1}>&times;</span>
            <div class="latest-news1">
              <div class="ver-line"><p class="news-text">Search</p></div>
              <div class="news-searchbar">
                <input type='text' placeholder='Search...' class="news-input"/>
                <div class="news-search-icon"><BiSearch></BiSearch></div>
              </div>
              <div class="ver-line"><p class="news-text">Latest News</p></div>
              <div class="news-bar">
                <div class="news-image"><img src="/images/news-bar-img.jpg" class="news-img"/></div>
                <div class="img-details">
                  <p>How Are Colored Diamonds Formed?</p>
                  <div class="news-date"><SlCalender></SlCalender>
                  <p > November 25, 2020</p> </div>
                </div>
              </div>

              <div class="news-bar">
                <div class="news-image"><img src="/images/news-bar-img.jpg" class="news-img"/></div>
                <div class="img-details">
                  <p>How Are Colored Diamonds Formed?</p>
                  <div class="news-date"><SlCalender></SlCalender>
                  <p > November 25, 2020</p> </div>
                </div>
              </div>

              <div class="news-bar">
                <div class="news-image"><img src="/images/news-bar-img.jpg" class="news-img"/></div>
                <div class="img-details">
                  <p>How Are Colored Diamonds Formed?</p>
                  <div class="news-date"><SlCalender></SlCalender>
                  <p > November 25, 2020</p> </div>
                </div>
              </div>
              <div class="ver-line"><p class="news-text">Follow Us</p></div>
              <div class="news-social-icons"><GrFacebookOption></GrFacebookOption>
              <AiOutlineTwitter></AiOutlineTwitter> <RiLinkedinFill></RiLinkedinFill>
              <IoLogoPinterest></IoLogoPinterest>
              </div>
            </div>
          </div>
        </div>

        <div class="dropdown">
        <span class="drop-box" onClick={show_cart}><BiShoppingBag></BiShoppingBag></span>
        <div class="dropdown-content1 shopping-cart">
         <div class="shopping">
            <div class="shop1">
            <span className="cross cross1" onClick={cancel2}>&times;</span>
              <Link to="#" id="prod-image"><img src="/images/news-bar-img.jpg" class="shop-img" alt=""/></Link>
              <div>
              <Link to="#" id="prod-name"><span class="shop-name">Golden<br/>Pendant</span></Link>
              <p class="shop-price">1*$220.00</p>
              </div>
            </div>
            <div class="shop2">
              <h5>Subtotal:</h5>
              <h5>$220.00</h5>
            </div>
            <div class="hr-line"><hr/></div>
            <div class="shop3">
              <Link to="#" class="shop-btn btn-1"><h6 class="btn-name1">VIEW CART</h6></Link>
              <Link to="#" class="shop-btn btn-2"><h6 class="btn-name2">CHECKOUT</h6></Link>
            </div>

         </div>
         </div>
        </div>

        

        </div>  

      

        <div className='Ham_menu'  >
            <BsFillBagHeartFill className='wish_lst'></BsFillBagHeartFill>
            <GiHamburgerMenu className='Ham_menu1' onClick={()=>setshow(!show)}></GiHamburgerMenu>
            {!show && <ul class="mainMenu">
              <div><img src="/images/logo1.svg" id="pic2" alt=""/></div>
                <li><Link to="/" onClick={()=>setshow(!show)}>Home</Link></li>
                <li><Link to="" onClick={()=>setshow(!show)}>Blog</Link></li>
                <li><Link to="" onClick={()=>setshow(!show)}>Categories</Link></li>
                <li><Link to="/gallery" onClick={()=>setshow(!show)}>Memory</Link></li>
                <li><Link to="/shop" onClick={()=>setshow(!show)}>Shop</Link></li>
                <li><Link to="/aboutus" onClick={()=>setshow(!show)}>About us</Link></li>
                <li><Link to="/contact" onClick={()=>setshow(!show)}>Contact Us</Link></li>
                
                <div class="closeMenu" onClick={()=>setshow(!show)}>< RxCross2/></div>
            </ul>}
        </div>


    </div>
    </>
  )
}
