import React, { useState } from 'react'
import Bill from './AddressForm/bill'
import Shipping from './AddressForm/shipping'

const BillPage = () => {
    const [activeComponent, setActiveComponent] = useState('default')

    const handleAddClick = (componentName) => {
        setActiveComponent(componentName)
    }

    const handleShippingClick = (componentName) => {
        setActiveComponent(componentName)
    }

    return (
        activeComponent === 'bill' ? (
            <Bill />
        ) : activeComponent === 'shipping' ? (
            <Shipping />
        ) : (
            <div className="addressBox">
                <h4>The following addresses will be used on the checkout page by default.</h4>
                <div className="addressAddBox">
                    <h2>Billing address</h2>
                    <h5 onClick={() => handleAddClick('bill')}>Add</h5>
                </div>
                <h4>You have not set up this type of address yet.</h4>
                <div className="addressAddBox">
                    <h2>Shipping address</h2>
                    <h5 onClick={() => handleShippingClick('shipping')}>Add</h5>
                </div>
                <h4>You have not set up this type of address yet.</h4>
            </div>
        )
    )
}

export default BillPage