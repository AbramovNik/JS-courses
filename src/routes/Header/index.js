import React from "react";
import "./styles.scss";
import { MenuItem } from "./MenuItem";
import logo from "../../utils/images/logo.png";
import	{ Col } from "reactstrap";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

  export  class Header extends React.Component {
	constructor(props) {
	  super(props);
  
	  this.toggle = this.toggle.bind(this);
	  this.state = {
		isOpen: false
	  };
	}
	toggle() {
	  this.setState({
		isOpen: !this.state.isOpen
	  });
	}
	render() {
	  return (
		  <Navbar color="light" light expand="md">
			<div className = 'logo'><a href ="#"><img src = {logo} height = "35px"/></a></div>
			<NavbarToggler onClick={this.toggle} />
			<Collapse isOpen={this.state.isOpen} navbar>
			  <Nav className="ml-auto" navbar>
				<NavItem>
				  <NavLink href="#">Home</NavLink>
				</NavItem>
				<NavItem>
				  <NavLink href="#">About Us</NavLink>
				</NavItem>
				<NavItem>
				  <NavLink href="#">Our contacts</NavLink>
				</NavItem>
				<UncontrolledDropdown nav inNavbar>
				  <DropdownToggle nav caret>
					Our Portfolio
				  </DropdownToggle>
				  <DropdownMenu right>
					<DropdownItem>
					  Portfolio 1
					</DropdownItem>
					<DropdownItem>
					Portfolio 2
					</DropdownItem>
					<DropdownItem>
					Portfolio 3
					</DropdownItem>
					<DropdownItem>
					Portfolio 4
					</DropdownItem>
				  </DropdownMenu>
				</UncontrolledDropdown>
				<Col md="3">
					<input className="form-control" type="text" placeholder="Search" aria-label="Search" />
				</Col>
			  </Nav>
			</Collapse>
		  </Navbar>
	  );
	}
  }