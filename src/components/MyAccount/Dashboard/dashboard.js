import React, { useState } from 'react';
import './dashboard.css';
import Component1 from './Component1';
import Component2 from './Component2';
import Component3 from './Component3';
import Component4 from './Component4';
import Component5 from './Component5';
import Bill from './AddressForm/bill';

const Dashboard = () => {
  const [activeComponent, setActiveComponent] = useState(<Component1 />);
  const [activeLi, setActiveLi] = useState(1);
  const [shouldReloadComponent1, setShouldReloadComponent1] = useState(false);

  const handleButtonClick = (component, li) => {
    if (component.type === Component1) {
      setShouldReloadComponent1(true);
    } else {
      setShouldReloadComponent1(false);
    }
    setActiveComponent(component);
    setActiveLi(li);
  };

  return (
    <div className='dashboardContainer'>
      <div className="dashBox">
        <div className="BoxLeft">
          <ul>
            <li className={activeLi === 1 ? 'active' : ''} onClick={() => handleButtonClick(<Component1 />, 1)}>Dashboard</li>
            <li className={activeLi === 2 ? 'active' : ''} onClick={() => handleButtonClick(<Component2 />, 2)}>Orders</li>
            <li className={activeLi === 3 ? 'active' : ''} onClick={() => handleButtonClick(<Component3 />, 3)}>Downloads</li>
            <li className={activeLi === 4 ? 'active' : ''} onClick={() => handleButtonClick(<Component4 />, 4)}>Addresses</li>
            <li className={activeLi === 5 ? 'active' : ''} onClick={() => handleButtonClick(<Component5 />, 5)}>Account Details</li>
            <li>Logout</li>
          </ul>
        </div>
        <div className="BoxRight">
          {shouldReloadComponent1 ? <Component1 /> : activeComponent}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;