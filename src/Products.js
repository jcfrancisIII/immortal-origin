import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import axios from 'axios'

class Products extends Component {
  constructor(props) {
    super(props)
    this.state = {
      jobs: []
    }
  }

  componentDidMount() {
    var _this = this
    this.serverRequest = 
      axios
        .get("/services/search/FindingService/v1?OPERATION-NAME=findItemsAdvanced&SECURITY-APPNAME=JamesFra-Immortal-PRD-b8e35c535-2b37f584&RESPONSE-DATA-FORMAT=JSON&REST-PAYLOAD&itemFilter(0).name=Seller&itemFilter(0).value(0)=immortalorigin&itemFilter(1).name=LocatedIn&itemFilter(1).value=WorldWide&paginationInput.entriesPerPage=3")
        .then(function(result) {    
          console.log(result.data.findItemsAdvancedResponse[0].searchResult[0].item)
          console.log(result.data.findItemsAdvancedResponse[0].searchResult[0].item[0].sellingStatus[0].currentPrice[0])
          _this.setState({
            jobs: result.data.findItemsAdvancedResponse[0].searchResult[0].item
          })
        })
  }

  render() {
    return (
      <div className="container products">
        <h1>About Our Products</h1>
        <p>
          We focus on cell phones, computers and tablets for all the major manufacturers. However we also have a variety of home goods, clothing, office products and other consumer electronics. Our products come in various conditions: New, Used, and Non-Functional. 
        </p>
        <Grid className="ebay-list">
          {this.state.jobs.map((obj) => 
            <Row key={obj.itemId}>
              <Col md={3}>
                <a href={obj.viewItemURL}>
                  <img src={obj.galleryURL} alt={obj.title} />
                </a>
              </Col>
              <Col md={9}>
                <a href={obj.viewItemURL}>
                  <h2>
                    {obj.title}
                  </h2>
                </a>
                <p className="category">
                  {obj.primaryCategory[0].categoryName}
                </p>
                <p className="price">
                  USD {obj.sellingStatus[0].currentPrice[0].__value__}
                </p>
                {obj.listingInfo[0].buyItNowAvailable[0] === "true" &&
                  <p className="bin">
                    Buy It Now
                  </p>
                }
                {obj.listingInfo[0].bestOfferEnabled[0] === "true" &&
                  <p className="bo">
                    Best Offer
                  </p>
                }
                <p className="fs">
                </p>
              </Col>
            </Row>
          )}
        </Grid>
      </div>
    )
  }
}

export default Products
