import React from 'react'
import './bill.css'

const Bill = () => {
        return (
            <form action="" className='bill_container'>
            <h2>Billing address</h2>
            <div className="firstDiv">
              <div className="input">
                <label htmlFor="">First Name<span>*</span></label>
                <input type="text" required />
              </div>
              <div className="input">
                <label htmlFor="">Last Name<span>*</span></label>
                <input type="text" required />
              </div>
            </div>
            <div className="input">
              <label htmlFor="">Company name (optional)</label>
              <input type="text" />
            </div>
            <div className="input">
              <label htmlFor="">Country / Region<span>*</span></label>
              <input type="text" required />
            </div>
            <div className="input">
              <label htmlFor="">Street address *<span>*</span></label>
              <input type="text" placeholder='House number and street name' required />
              <input type="text" placeholder='Appartment,suite,unit,etc (optional)' />
            </div>
            <div className="input">
              <label htmlFor="">Town / City<span>*</span></label>
              <input type="text" required />
            </div>
            <div className="input">
              <label htmlFor="">State<span>*</span></label>
              <input type="text" required />
            </div>
            <div className="input">
              <label htmlFor="">ZIP Code<span>*</span></label>
              <input type="text" required />
            </div>
            <div className="input">
              <label htmlFor="">Phone<span>*</span></label>
              <input type="text" required />
            </div>
            <div className="input">
              <label htmlFor="">Email address<span>*</span></label>
              <input type="text" required />
            </div>
            <input type="submit" value="SAVE CHANGE" />
          </form>
        )
    }

export default Bill

