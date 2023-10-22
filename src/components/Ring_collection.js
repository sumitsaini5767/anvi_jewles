import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Ring_collection.css'

export default function Ring_collection() {
    
    // function show_content(){
    //     console.log("in");
    //     var x= document.getElementById("filter");
    //     var y= document.getElementById("filter_btn_div");
    //     var z= document.getElementById("filter_content");
    
    //     var w= document.getElementById("filter_btn");
    //     if(z.style.display==="none"){
    //         x.style.width="40%";
    //         y.style.width="8%";
    //         w.innerHTML="^";
    //         w.style.color="black";
    //         w.style.fontSize="20px";
    //         w.style.border="none";
    //         w.style.backgroundColor="#FCD462";
    //         z.style.display="block";
    //         console.log(x);
    //     }
    //     else{
    //         x.style.width="3%";
    //         y.style.width="100%";
    //         w.innerHTML="Filters";
    //         w.style.fontSize="16px";
    //         w.style.color="#FCD462";
    //         w.style.border="2px solid #FCD462";
    //         w.style.backgroundColor="#353530";
    //         z.style.display="none";
    //     }
    // }

  return (
    <div className='Ring_page'>
      <div className="hero-sec">
        <div className="text">
            <h1>Rings<br/><span>Collection</span></h1>
            <p><b>Filters: Men, Traditional, Silver Oxide</b></p>      
        </div>
        <div className="prodbtn"> 
            <ul >
                <li className="btn1"><Link to="/"><b>Home</b></Link></li>
                <li><div className="btn2"></div></li>
                <li className="btn1"><Link to="/shop"><b>Shop</b></Link></li>
                <li><div className="btn2"></div></li>
                <li className="btn1"><Link to="/product"><b>Ring Collection</b></Link></li>
            </ul>
        </div>
    </div>

    <div className="main_div">
        <div className="ring_prod">
            <div className="prod">
                <div className="pro_img"><img src="/images/product.png"/></div>
                <div className="pro_info"></div>
            </div>
            <div className="prod">
                <div className="pro_img"><img src="/images/product.png"/></div>
                <div className="pro_info"></div>
            </div>
            <div className="prod">
                <div className="pro_img"><img src="/images/product.png"/></div>
                <div className="pro_info"></div>
            </div>
            <div className="prod">
                <div className="pro_img"><img src="/images/product.png"/></div>
                <div className="pro_info"></div>
            </div>
        </div>    

        <div className="filter" id="filter">
            <div className="filter_btn_div" id="filter_btn_div"><p id="filter_btn" /*onClick={show_content()}*/ >Filters</p></div>
            <div className="filter_content" id="filter_content" style={{display: "none"}}>
               <div className="filter_content_search">
                    <input className= "filter_content_input" type="text" placeholder="search"/>
               </div> 
               
               <div className="filter_content_gender">
                    <p>Gender:</p>
                    <div className="filter_content_gender1">
                        <button id="filter_content_gender1_btn1" >All</button>
                        <button ></button>
                        <button ></button>
                    </div>
               </div>

               <div className="filter_content_category">
                        <p>Category:</p>
                        <div className="filter_content_category1">
                            <button id="filter_content_gender1_btn1" >Rings</button>
                            <button ></button>
                            <button ></button>
                            <button ></button>
                            <button ></button>
                            <button ></button>
                            <button ></button>
                            <button ></button>
                        </div>
                </div>

                <div className="filter_content_bar">
                    <p>Range:</p>
                    <div className="filter_content_bar1">
                        <div className="filter_content_bar1_div1"></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div className="filter_content_bar1_div1"></div>
                    </div>
                </div>

                <div className="filter_content_gender">
                    <p>Colors:</p>
                    <div className="filter_content_gender1">
                        <button id="filter_content_gender1_btn1" >All</button>
                        <button >Oxide<br/>Silver</button>
                        <button >Fine<br/>Silver</button>
                    </div>
               </div>

               <div className="filter_content_category">
                <p>Jewls for:</p>
                <div className="filter_content_category1">
                    <button id="filter_content_gender1_btn1" >Rings</button>
                    <button ></button>
                    <button ></button>
                    <button ></button>
                    <button ></button>
                    <button ></button>
                </div>
                </div>


            </div>
        </div>
    </div>
    <div className="bottom_sec">
        <div className="bottom_sec_btn"><button className="bottom_sec_btn1">Load More</button></div>
        <div className="bottom_sec_img">
            <div className="bottom_sec_img1"><img src="/images/product.png"/></div>
            <div className="bottom_sec_img1"><img src="/images/product.png"/></div>
            <div className="bottom_sec_img1"><img src="/images/product.png"/></div>
            <div className="bottom_sec_img1"><img src="/images/product.png"/></div>
            <div className="bottom_sec_img1"><img src="/images/product.png"/></div>
            <div className="bottom_sec_img1"><img src="/images/product.png"/></div>
        </div>
    </div>
    <script>
        
    </script>
    </div>
  )
}
