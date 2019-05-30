import React from "react";
import { Row, Col, Container } from "reactstrap";
import github_logo from "../../../utils/images/github_logo.png";
import "./styles.scss";

export class About extends React.Component {

    render() {
        return (
            <Container>
                <Col>
                    <h2>About this application</h2>
                </Col>
                <Col>
                    <p>This application exists to display information about github users.</p>
                    <h2>About GitHub</h2>
                    <p>GitHub is a web-based hosting service for version control using Git.
                    It is mostly used for computer code. It offers all of the distributed version control and source code management (SCM) functionality of Git as well as adding its own features.
                    It provides access control and several collaboration features such as bug tracking, feature requests, task management, and wikis for every project.
                    GitHub offers plans for enterprise, team, pro and free accounts which are commonly used to host open-source software projects.
                    As of January 2019, GitHub offers unlimited private repositories to all plans, including free accounts.
                    As of June 2018, GitHub reports having over 28 million users and 57 million repositories (including 28 million public repositories), making it the largest host of source code in the world.</p>
                    <Col className="git"><img src={github_logo} alt="github_logo" className="gitLogo" /></Col>
                </Col>
            </Container>
        )
    }
}