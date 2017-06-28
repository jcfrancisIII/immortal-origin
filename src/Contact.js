import React, { Component } from 'react'
import Form from 'react-formal'
import yup from 'yup'
import { FormGroup, FormControl, HelpBlock } from 'react-bootstrap'



class Contact extends Component {

  constructor(props) {
    super(props)
    
    this.defaultStr = yup.string().default('')

    this.modelSchema = yup.object({

        name: yup.object({
          first: this.defaultStr.required('First name is required.'),
          last:  this.defaultStr.required('Last name is required.')
        }),

        email: this.defaultStr.required('Email is required.'),
        subject: this.defaultStr.required('Subject is required.'),
        message: this.defaultStr
      });
  }

  render() {
    return (
      <Form
        schema={this.modelSchema}
        defaultValue={this.modelSchema.default()}
      >
        <Form.Field name="name.first" placeholder="First name*"/>
        <Form.Field name="name.last" placeholder="Last name*"/>
        <Form.Message for={["name.first", "name.last"]}/>

        <Form.Field name="email" placeholder="Email*"/>
        <Form.Message for="email"/>

        <Form.Field name="subject" placeholder="Subject*"/>
        <Form.Message for="subject"/>

        <Form.Field name="message" placeholder="Message"/>

        <Form.Button type="submit" className="big-button">Submit</Form.Button>
      </Form>
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
