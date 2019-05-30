import React from "react";
import "./styles.scss";


export class Checkbox extends React.Component {

    render() {
        return <div className="checkbox-holder">
            <label className="checkbox-hold">Some text<input type="checkbox" className = "realCheck" />
                <div className="fake-checkbox"></div>
            </label>
            <label className="checkbox-hold">Some text<input type="checkbox" className = "realCheck" />
                <div className="fake-checkbox"></div>
            </label>
            <label className="checkbox-hold">Some text<input type="checkbox" className = "realCheck" />
                <div className="fake-checkbox"></div>
            </label>
        </div>

    }
}