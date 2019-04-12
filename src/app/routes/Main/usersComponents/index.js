import React from "react";
// import PropTypes from "prop-types";
import "./styles.scss";
import "../../../../utils/images/icomoon/fonts/icomoon.svg"
import {Col} from "reactstrap"
const users = [];

export class UserItem extends React.Component {
render(){
    const {user} = this.props;
    return (
        <Col  xs = "12" sm = "6" md = "4" lg = "3">
            <div className = "user-hold">
                <div className = "image-hold">
                    <img src = {user.avatar_url}/>
                </div>
                <div className = "user-info">
                    <strong className = "user-name">{`User login - ${user.login}`}</strong>
                </div>
                <div className = "hover-info">
                        <ul className = "social-media">
                            <li><a href="#"><span className="icon-facebook"></span></a></li>
                            <li><a href="#">Twitter</a></li>
                            <li><a href="#">LinkedIn</a></li>
                        </ul>
                    </div>
            </div>
         </Col>
    )
}

}