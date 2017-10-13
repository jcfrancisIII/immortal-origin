import React from 'react'
import icon from '../images/ipad.png'
import prices from '../images/iPadService.png'

const iPad = () => (
  <div className="service">
    <div className="jumbotron">
      <div className="container">
        <img src={icon} alt="Cracked iPad" />
        <h1>
          iPad Repair
        </h1>
      </div>
    </div>
    <div className="container text-left">
      <img src={prices} className="bigImg tabletPricing" alt="Service Pricing" />
    </div>
  </div>
)

export default iPad
