import React from "react";
// import PropTypes from "prop-types";
import "./styles.scss";
import "../../../../utils/images/icomoon/icons.css";
import {Col} from "reactstrap";
import {Link} from "react-router-dom";


export class UserItem extends React.Component {
render(){
    const {user} = this.props;
    return (
        <Col>
            <div className = "user-hold">
                <div className = "image-hold">
                    <img src = {user.avatar_url} alt = "" className = "user-avatar" />
                </div>
                <div className = "user-info">
                    <Link to = {`user/${user.login}`}>
                        <strong className = "user-name">{`User login - ${user.login}`}</strong>
                    </Link>
                </div>
                <div className = "hover-info">
                    <ul className = "social-media">
                        <li><a href=".#"><i className = "icon-facebook" /></a></li>
                        <li><a href=".#"><i className = "icon-twitter" /></a></li>
                        <li><a href=".#"><i className = "icon-linkedin" /></a></li>
                    </ul>
                </div>
            </div>
        </Col>
    )
}

}