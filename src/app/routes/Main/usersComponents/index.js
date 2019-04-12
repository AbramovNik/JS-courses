import React from "react";
// import PropTypes from "prop-types";
import "./styles.scss";
import {Col} from "reactstrap"
const users = [];

export class UserItem extends React.Component {
render(){
    const {user} = this.props;
    return (
        <Col xs = "12" sm = "6" md = "4" lg = "3">
        <div className = "user-info">
            <img src = {user.avatar_url}/>
            <h2>{`User login - ${user.login}`}</h2>
         </div>
         </Col>
    )
}

}