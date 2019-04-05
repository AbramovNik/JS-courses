import React from "react";
import "./styles.scss";
import { MenuItem } from "./MenuItem";
import logo from "../../utils/images/logo.png";
import	{ Col } from "reactstrap";

var links = [
	"Main",
	"About",
	"Contacts"
]
 
export class Header extends React.Component {
	render() {
		return <header className = "header">
				<div className = "container">
				<div className = "header-wrap">
					<Col className = "logo" xs = "3">
					<img className = "logo-img" src = {logo} alt=""></img>
					</Col>
					<div className = "navigation">
						<ul>
							{links.map(
								function(item, id){
									return <MenuItem name = {item} key = {item}/>
								}
							)}
						</ul>
						{/* <ul className = "navbar">
							<li><a href = "#">Home</a></li>
							<li><a href = "#">About Us</a></li>
							<li><a href = "#">Contacts</a></li>
							<li><a href = "#">Our Blogs</a></li>
						</ul> */}
					</div>
				</div>
				</div>
			</header>
	}
}