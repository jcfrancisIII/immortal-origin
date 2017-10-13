import React from 'react'
import icon from '../images/macbook.png'

const Macbook = () => (
  <div className="service">
    <div className="jumbotron">
      <div className="container">
        <img src={icon} alt="Cracked Macbook" />
        <h1>
          Macbook Repair
        </h1>
      </div>
    </div>
    <div class="container">
        <h2>
          Our Computer Repair Services:
        </h2>
        <p>
          Please bring in your Macbook to our store for a diagnostic test. We can then determine the options for fixing or trading in your Macbook.
        </p>
      </div>
  </div>
)

export default Macbook
