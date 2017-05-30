import React, { Component } from 'react';
import './App.css';

import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'

import Navigation from './Navigation.js'
import Home from './Home.js'
import Products from './Products.js'
import Contact from './Contact.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Navigation />

            <Route exact path="/" component={Home}/>
            <Route path="/products" component={Products}/>
            <Route path="/contact" component={Contact}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
