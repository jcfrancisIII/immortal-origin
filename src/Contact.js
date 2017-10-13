import React, { Component } from 'react'
import axios from 'axios'
import Form from 'react-formal'
import yup from 'yup'
import types from 'react-formal-bootstrap'

import FormGroup from 'react-formal-bootstrap/lib/FormGroup'

import { HelpBlock } from 'react-bootstrap'

Form.addInputTypes(types)

class Contact extends Component {

  constructor(props) {
    super(props)
    
    this.defaultStr = yup.string().default('')

    this.modelSchema = yup.object({
        name: this.defaultStr.required('Name is required.'),
        email: this.defaultStr.email('Valid email is required.').required('Email is required.'),
        subject: this.defaultStr.required('Subject is required.'),
        message: this.defaultStr
      });

    this.state = {
      model: {},
      notSubmitted: true
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  
  alphabetFlip() {
    // const jc = 'wnzrfprpvysenapvf@tznvy.pbz';
    const anil = 'fnyrf@vzzbegnybevtva.pbz';
    return anil.replace(/[a-zA-Z]/g,function(c){return String.fromCharCode((c<="Z"?90:122)>=(c=c.charCodeAt(0)+13)?c:c-26);})
  }

  handleChange(model) {
    this.setState({
      model: model
    })

    // console.log('change: ' + this.state)

  }

  handleSubmit(event) {

    // console.log(this.state)    

    const _this = this

    const anil = this.alphabetFlip();

    axios({
      method: 'post',
      url: 'https://formspree.io/' + anil, 
      data: this.state.model,
      dataType: 'json'
    })
    .then(function(result) {
      _this.handleSuccess()
    })

  }

  handleSuccess() {
    this.setState({
      notSubmitted: false
    })
  }

  render() {
    return (
      <div className="container">
        <div className="container contact">
          {this.state.notSubmitted ? (
            <div>
              <h1>Contact Us</h1>
              <p>
                Contact us for any questions, wholesale opportunities, or if you have inventory you're looking to sell.
              </p>
              <Form
                schema={this.modelSchema}
                defaultValue={this.modelSchema.default()}
                value={this.state.model}
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
              >
                <FormGroup for={"name"} controlId="field--name">
                  <Form.Field className="form-control" name="name" placeholder="Name*"/>
                  <HelpBlock>
                    <Form.Message for={"name"}/>
                  </HelpBlock>
                </FormGroup>

                <FormGroup for="email" controlId="field--email">
                  <Form.Field className="form-control" name="email" placeholder="Email*"/>
                  <HelpBlock>
                    <Form.Message for="email"/>
                  </HelpBlock>
                </FormGroup>

                <FormGroup for="subject" controlId="field--subject">
                  <Form.Field className="form-control" name="subject" placeholder="Subject*"/>
                  <HelpBlock>
                    <Form.Message for="subject"/>
                  </HelpBlock>
                </FormGroup>

                <FormGroup controlId="field--message">
                  <Form.Field className="form-control" name="message" type="textarea" placeholder="Message"/>
                </FormGroup>

                <Form.Button type="submit" className="big-button">Submit</Form.Button>
              </Form>
            </div>
          ) : (
            <div>
              <h1>Thank you!</h1>
              <p>
                We'll get back to you soon.
              </p>
            </div>
          )}
        </div>
        <div className="container map row">
          <div className="col-sm-3">
            <h2>
              Phone Number
            </h2>
            <p>
              <a href="tel:2132322345" role="button">
                940&middot;243&middot;2880 
              </a>
            </p>
            <h2>
              Address
            </h2>
            <p>
              10964 Shady Trail<br />
              Dallas, TX 75220<br />
              <a target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps/place/10964+Shady+Trail,+Dallas,+TX+75220/@32.8803293,-96.8917069,17z/data=!3m1!4b1!4m5!3m4!1s0x864e9d65238bbcd5:0x6038375e793bf793!8m2!3d32.8803293!4d-96.8895182">
                Get Directions
              </a>
            </p>
            <h2>
              Hours
            </h2>
            <p>
              Mon &mdash; Fri<br />
              10:00am &mdash; 6:00pm<br />
              Saturday<br />
              10:00am &mdash; 4:00pm<br />
              Sunday<br />
              Closed
            </p>
          </div>
          <div className="col-sm-9">
            <div id="map"></div>
          </div>
        </div> 
      </div>
    )
  }
}

export default Contact
