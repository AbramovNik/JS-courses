import React from  "react";
import PropTypes from "prop-types";

export class MenuItem extends React.Component {
    render() {
        return <li>
        <a href = "">{this.props.name}</a>
        </li>
    }
}

MenuItem.propTypes = {
    name: PropTypes.string
};