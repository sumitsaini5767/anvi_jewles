import React,{useState} from 'react'


export default function Contact_ii() {
  const [name,setName]=useState("");
  const [password,setPassword]=useState("");
  const [userErr,setUserErr]=useState(false);

  function loginHandle(e)
  {
    e.preventDefault()
  }
  function userHandler(e)
  {
    let item=e.target.value;
    if(item.length<3)
    {
      setUserErr(true)
    }
    else{
      setUserErr(false)
    }
    setName(item)
  }
  return (
    <>
    <div class="con2">
      <div class="main-div">
        <div class="upper-div">
          <div class="updiv1">
            <div class="updiv11">
            <div className='contact-icons'>
              <img src="images/location_icon.png" class="imgdiv1" alt=""/>
            </div>
            <div class="textdiv1">
              <h4>Office Address</h4>
              <p>19/A, Cirikon City hall Tower New York, NYC</p>
            </div>
            </div>
          </div>
          <div class="updiv1">
            <div class="updiv11">
            <div className='contact-icons'>
              <img src="images/phone.png" class="imgdiv1" alt=""/>
            </div>
            <div class="textdiv1">
              <h4>Phone Number</h4>
              <p>+ 97656 8675 7864 7<br/>+ 876 766 8675 765 6</p>
            </div>
            </div>
          </div>
          <div class="updiv1">
            <div class="updiv11">
            <div className='contact-icons'>
              <img src="images/mail_icon.png" class="imgdiv1" alt=""/>
            </div>
            <div class="textdiv1">
              <h4>Email Address</h4>
              <p>info@webmail.com<br/>jobs.webmail@mail.com</p>
            </div>
            </div>
          </div>
        
        </div>
        {/* <div class="bottom-div">
          <form onSubmit={loginHandle}>
          <div class="btm-div1">
            <div class="btm-div11">
              < div class="info-div">
                <span>
                  <img src="images/phone.png" alt="" class="imgdiv2"/>
                  <input type="text" placeholder='Your full name' onChange={userHandler} />
                </span>
              </div>
              {userErr?<p id="errmsg">The field is required.</p>:""}
        
              <div class="info-div">
                <span>
                  <img src="images/phone.png" alt="" class="imgdiv2"/>
                  <input type="text" placeholder='Add phone number' required/>
                </span>
              </div>
              <div class="details-div">
                <span class="detail-div1">
                  <img src="images/phone.png" alt="" class="imgdiv3"/>
                  <textarea type="text" placeholder='Enter message' cols="35" rows="10" required />
                </span>
              </div>
            </div>
            <div class="btm-div12">
            <div class="info-div">
                <span>
                  <img src="images/phone.png" alt="" class="imgdiv2"/>
                  <input type="text" placeholder='Enter email address' required/>
                </span>
              </div>
              <div class="info-div">
                <span>
                  <img src="images/phone.png" alt="" class="imgdiv2"/>
                  <input placeholder='Subject' required/>
                </span>
              </div>
            </div>
          </div>
          <button  type="submit" class="submitbtn">GET FREE QUOTE</button>
          </form>  

        </div> */}
      </div>
    </div>
      
    </>
  )
}
