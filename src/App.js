import React, { Component } from 'react'

import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'

import Navigation from './Navigation.js'
import Home from './Home.js'
import Products from './Products.js'
import iPhone from './services/iPhone.js'
import iPad from './services/iPad.js'
import Macbook from './services/Macbook.js'
import Contact from './Contact.js'
import Footer from './Footer.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Navigation />

            <div className="content">
              <Route exact path="/" component={Home}/>
              <Route path="/products" component={Products}/>
              <Route path="/iphone" component={iPhone}/>
              <Route path="/ipad" component={iPad}/>
              <Route path="/macbook" component={Macbook}/>
              <Route path="/contact" component={Contact}/>
            </div>

            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}

export default App
