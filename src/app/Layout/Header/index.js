import React from "react";
import "./styles.scss";
import logo from "../../../utils/images/logo.png";

import {
	Collapse,
	Container,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem } from 'reactstrap';
	import  {Link} from "react-router-dom";

	const links = [
		{title:"Home", url:"/"},
		{title:"About", url:"/about"},
		{title:"Contacts", url:"/contacts"}
	];

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
			<header className = "header">
				<div className = "container">
					<Navbar light expand = "md">
							<Link to = "/">
							<img src = {logo} alt = "" className = "logo"  />
							</Link>
							<NavbarToggler onClick = {this.toggle} />
							<Collapse isOpen = {this.state.isOpen} navbar>
							<Nav className = "ml-auto" navbar>
								{links.map(item => (
									<NavItem key = {item.url}>
										<Link to = {item.url} className = "nav-link">{item.title}</Link>
									</NavItem>
								))}
							</Nav>
							</Collapse>
					</Navbar>
				</div>
			</header>
	  );
	}
  }