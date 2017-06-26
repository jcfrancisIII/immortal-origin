import React, { Component } from 'react'
import logo from './images/logo.svg'
import {
	Navbar,
	NavItem,
	Nav
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
            {/* placeholder for right side nav */}
          </Nav>
        </Navbar.Collapse>
			</Navbar>
		)
	}
}

export default Navigation
