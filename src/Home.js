import React from 'react'

const HomeStyle = {
  background: 'black'
}

const Home = () => (
  <div className="homeBg" style={HomeStyle}>
    <div className="container">
      <svg height="100px" width="100%">
        <circle height="100px" width="100px" />
      </svg>
      <h1>
        Immortal Origin specializes in returned and overstock merchandise from big box retailers, with a focus on electronics. We have built a reputation of providing excellent customer service and quality products on our online selling platforms.
      </h1>
    </div>
  </div>
)

export default Home
