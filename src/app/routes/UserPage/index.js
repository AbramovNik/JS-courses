import React from "react";
import { Col, Container, Spinner, Row, Table } from "reactstrap";
import axios from "axios";
import moment from "moment";
import "./styles.scss";
import "../../../utils/images/icomoon/icons.css";
import {getReposSuccessAction, getUserSucessAction } from "../../store/actions/user";
import {connect} from "react-redux";



 class UserPageComponent extends React.Component {
    state = {
        err: null,
        sortKey: null
    };

    async componentDidMount() {
        try {
            const { login } = this.props.match.params;
            if (login) {
                const userResponse = await axios.get(`https://api.github.com/users/${login}`);
                const reposResponse = await axios.get(`https://api.github.com/users/${login}/repos`);
                this.props.getReposSucess(reposResponse.data);
                this.props.getUsersSucess(userResponse.data);
            }
        } catch (e) {
            console.log(e)
            this.props.history.push("/404");
        }
    }

    sortItems = id => {
        const { sortKey } = this.state;
        const {user, repos} = this.props;
        let sortedItems;
        switch (id) {
            case "id":
                if (sortKey !== "id") {
                    sortedItems = repos.sort((a, b) => a.id - b.id);
                } else if (sortKey === "id") {
                    sortedItems = repos.reverse();
                }
                this.setState({
                    repos: sortedItems,
                    sortKey: "id"
                })
                break;
            case "name":
                if (sortKey !== "name") {
                    sortedItems = repos.sort((a, b) => {
                        if (a.name > b.name) {
                            return 1;
                        }
                        if (b.name > a.name) {
                            return -1;
                        }
                        return 0;
                    });
                } else if (sortKey === "name") {
                    sortedItems = repos.reverse();
                };
            case "language":
                if (sortKey !== "language") {
                    sortedItems = repos.sort((a, b) => {
                        if (a.language > b.language) {
                            return 1;
                        }
                        if (b.language > a.language) {
                            return -1;
                        }
                        return 0;
                    });
                } else if (sortKey === "language") {
                    sortedItems = repos.reverse();
                }
                this.setState({
                    repos: sortedItems,
                    sortKey: "language"
                });
                break;
            case "createdAt":
                if (sortKey !== "createdAt") {
                    sortedItems = repos.sort((a, b) => {
                        if (a.created_at > b.created_at) {
                            return 1;
                        }
                        if (b.created_at > a.created_at) {
                            return -1;
                        }
                        return 0;
                    });
                } else if (sortKey === "createdAt") {
                    sortedItems = repos.reverse();
                }
                this.setState({
                    repos: sortedItems,
                    sortKey: "createdAt"
                });

                break;
            default: break;
        }
    }


    render() {
        const { user, repos } = this.props;

        if (!user || !repos) {
            return <Spinner color="secondary" />;
        }
        console.log(repos)
        return (
            <Container>
                <Row>
                    <Col><img src={user.avatar_url} alt="" className="user-avatar" /></Col>
                    <Col>
                        <ul className="userInfo">
                            <li><i className="icon-avatar" />User Name: {user.name}</li>
                            <li><i className="icon-blog" />Blog: {user.blog}</li>
                            <li><i className="icon-enterprise" />Company: {user.company}</li>
                            <li><i className="icon-calendar" />Date of create: {moment(user.created_at).format("ll")}</li>
                            <li><i className="icon-followers" />Followers: {user.followers}</li>
                            <li><i className="icon-follower" />Following: {user.following}1</li>
                            <li><i className="icon-location" />Location: {user.location}</li>
                            <li><i className="icon-login" />Login: {user.login}</li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <h3>Repositories</h3>
                    <Table>
                        <thead>
                            <tr>
                                <th onClick={this.sortItems.bind(this, "id")}>#</th>
                                <th onClick={this.sortItems.bind(this, "name")}>Name</th>
                                <th onClick={this.sortItems.bind(this, "language")}>Language</th>
                                <th onClick={this.sortItems.bind(this, "createdAt")}>Created at</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {repos.map(rep => (
                                <tr key={rep.id}>
                                    <th scope="row">{rep.id}</th>
                                    <td>{rep.name}</td>
                                    <td>{rep.language}</td>
                                    <td>{moment(rep.created_at).format("ll")}</td>
                                    <td>{rep.description}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Row>
            </Container>
        );
    }
}

const mapStateToProps = state => ({
    user: state.user.data,
    repos: state.user.repos
});

const mapDispatchToProps = dispatch => ({
    getReposSucess: data => dispatch(getReposSuccessAction(data)),
    getUsersSucess: data => dispatch(getUserSucessAction(data))
})

export const UserPage = connect(
    mapStateToProps,
    mapDispatchToProps
)(UserPageComponent);