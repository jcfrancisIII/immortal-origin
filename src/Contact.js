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

    //this.handleInputChange = this.handleInputChange.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  // handleInputChange(event) {
  //   const target = event.target
  //   const value = target.value
  //   const name = target.name

  //   this.setState({
  //     [name]: value
  //   })
  // }

  flip() {
    var s = 'wnzrfprpvysenapvf@tznvy.pbz';
    return s.replace(/[a-zA-Z]/g,function(c){return String.fromCharCode((c<="Z"?90:122)>=(c=c.charCodeAt(0)+13)?c:c-26);})
  }

  handleChange(model) {
    this.setState({
      model: model
    })

    console.log('change: ' + this.state)

  }

  handleSubmit(event) {

    console.log(this.state)    

    const _this = this

    axios({
      method: 'post',
      url: 'https://formspree.io/jamescecilfrancis@gmail.com', 
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
    )
  }

  /*
  constructor(props) {
    super(props)
    
    this.state = {
      form: {
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: ''
      }
    }

    this.modelSchema = 

    this.getValidationFirstName = this.getValidationFirstName.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  getValidationFirstName() {
    if ( this.state.form.firstName ) {
      return 'success'
    } 
    else if ( this.state.form.firstName === '' ) {
      return 'error'
    }
  }

  getValidationState() {

  }

  handleChange(e) {
    let form = this.state.form
    form[e.target.name] = e.target.value
    this.setState({ form })
  }

  handleSubmit(e) {

  }

  render() {
    return (
      <div className="container contact">
        <h1>Contact Us</h1>
        <p>
          Contact us for any questions, wholesale opportunities, or if you have inventory you're looking to sell.
        </p>
        <form onSubmit={this.handleSubmit}>


          <FormGroup
            controlId="firstName"
            validationState={this.getValidationFirstName()}
            bsSize="large"
          >
            <FormControl
              type="text"
              value={this.state.form.firstName}
              name="firstName"
              placeholder="First Name"
              onChange={this.handleChange}
            />
            <FormControl.Feedback />
            { this.getValidationFirstName() === 'error' &&
              <HelpBlock>First name is required.</HelpBlock>
            }
          </FormGroup>


          <FormGroup
            controlId="lastName"
            validationState={this.getValidationState()}
            bsSize="large"
          >
            <FormControl
              type="text"
              value={this.state.form.lastName}
              placeholder="Last Name"
              onChange={this.handleChange}
            />
            <FormControl.Feedback />
            <HelpBlock>Last name is required.</HelpBlock>
          </FormGroup>


          <FormGroup
            controlId="email"
            validationState={this.getValidationState()}
            bsSize="large"
          >
            <FormControl
              type="text"
              value={this.state.form.email}
              placeholder="Email"
              onChange={this.handleChange}
            />
            <FormControl.Feedback />
            <HelpBlock>Email is required.</HelpBlock>
          </FormGroup>


          <FormGroup
            controlId="subject"
            validationState={this.getValidationState()}
            bsSize="large"
          >
            <FormControl
              type="text"
              value={this.state.form.subject}
              placeholder="Subject"
              onChange={this.handleChange}
            />
            <FormControl.Feedback />
            <HelpBlock>Subject is required.</HelpBlock>
          </FormGroup>


          <FormGroup
            controlId="message"
            validationState={this.getValidationState()}
            bsSize="large"
          >
            <FormControl
              type="text"
              componentClass="textarea"
              value={this.state.form.message}
              placeholder="Your Message"
              onChange={this.handleChange}
            />
            <FormControl.Feedback />
            <HelpBlock>Message is required.</HelpBlock>
          </FormGroup>

          <button 
            type="submit" 
            className="big-button"
          >
            Submit 
          </button>

        </form>
      </div>
    )
  } */
}

export default Contact
