import React, { Component } from 'react'
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
        .get("http://svcs.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findItemsAdvanced&SECURITY-APPNAME=JamesFra-Immortal-PRD-b8e35c535-2b37f584&RESPONSE-DATA-FORMAT=JSON&REST-PAYLOAD&itemFilter(0).name=Seller&itemFilter(0).value(0)=immortalorigin&itemFilter(1).name=LocatedIn&itemFilter(1).value=WorldWide&paginationInput.entriesPerPage=3")
        .then(function(result) {    
          console.log(result.data)
          _this.setState({
            jobs: result.data
          })
        })
  }

  componentWillUnmount() {
    this.serverRequest.abort()
  }

  render() {
    return (
      <div className="container products">
        <h1>About Our Products</h1>
        <p>
          We focus on cell phones, computers and tablets for all the major manufacturers. However we also have a variety of home goods, clothing, office products and other consumer electronics. Our products come in various conditions: New, Used, and Non-Functional. 
        </p>
        <div className="ebay-list">
          {this.state.jobs.toString()}
        </div>
      </div>
    )
  }
}

export default Products
