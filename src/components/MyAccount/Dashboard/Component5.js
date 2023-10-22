import React from 'react'

const Component5 = () => {
  return (
    <form action="">
            <div className="firstDiv">
              <div className="input">
                <label htmlFor="">First Name<span>*</span></label>
                <input type="text" />
              </div>
              <div className="input">
                <label htmlFor="">Last Name<span>*</span></label>
                <input type="text" />
              </div>
            </div>
            <div className="input">
              <label htmlFor="">Display Name<span>*</span></label>
              <input type="text" />
              <h5><i>This will be how your name will be displayed in the account section and in reviews</i></h5>
            </div>
            <div className="input">
              <label htmlFor="">Email Address<span>*</span></label>
              <input type="text" />
            </div>
            <h4>Password change</h4>
            <div className="input">
              <label htmlFor="">Current password (leave blank to leave unchanged)</label>
              <input type="password" />
            </div>
            <div className="input">
              <label htmlFor="">New password (leave blank to leave unchanged)</label>
              <input type="password" />
            </div>
            <div className="input">
              <label htmlFor="">Confirm new password (leave blank to leave unchanged)</label>
              <input type="password" />
            </div>
            <input type="submit" value="SAVE CHANGE" />
          </form>
  )
}

export default Component5
