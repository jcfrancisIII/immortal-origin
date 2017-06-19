import React, { Component } from 'react'
import logo from './images/logo.svg'
import {
	Navbar,
	NavItem,
	Nav,
} from 'react-bootstrap'
import {
	LinkContainer
} from 'react-router-bootstrap'

class Navigation extends Component {
	render() {
		return (
			<Navbar collapseOnSelect>
				<Navbar.Header>
					<Navbar.Brand>
						<LinkContainer to="/">
              <img src={logo} alt="Logo" />
            </LinkContainer>
					</Navbar.Brand>
          <Navbar.Toggle />
				</Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <LinkContainer exact to="/">
              <NavItem>Home</NavItem>
            </LinkContainer>
            <LinkContainer to="/products">
              <NavItem>Products</NavItem>
            </LinkContainer>
            <LinkContainer to="/contact">
              <NavItem>Contact</NavItem>
            </LinkContainer>
          </Nav>
          <Nav pullRight>
            <NavItem href="#" className="fb" >
              <svg xmlns="http://www.w3.org/2000/svg" height="22px" version="1.1" viewBox="0 0 67 67" width="22px">
                <path d="M29.765,50.32h6.744V33.998h4.499l0.596-5.624h-5.095  l0.007-2.816c0-1.466,0.14-2.253,2.244-2.253h2.812V17.68h-4.5c-5.405,0-7.307,2.729-7.307,7.317v3.377h-3.369v5.625h3.369V50.32z   M34,64C17.432,64,4,50.568,4,34C4,17.431,17.432,4,34,4s30,13.431,30,30C64,50.568,50.568,64,34,64z"/>
              </svg>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
			</Navbar>
		)
	}
}

export default Navigation
