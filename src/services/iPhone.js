import React from 'react'
import icon from '../images/iphone.png'
import prices from '../images/iPhoneService.png'

const iPhone = () => (
  <div className="service">
    <div className="jumbotron">
      <div className="container">
        <img src={icon} alt="Cracked iPhone" />
        <h1>
          iPhone Repair
        </h1>
      </div>
    </div>
    <div className="container text-left">
      <img src={prices} className="bigImg iphonePricing" alt="Service Pricing" />
    </div>
  </div>
)

export default iPhone
