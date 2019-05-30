import React from "react";
import { Row, Col, Container, Button } from "reactstrap";
import {  UserComponent } from './usersComponents';
import axios from "axios";
import { connect } from "react-redux";
import { getUsersSucessAction, getUsersErrorAction } from '../../store/actions/users';
import "./styles.scss";



class MainComponent extends React.Component {
    state = {
        
        sort: undefined
    };

    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }



    async  componentDidMount() {
        try {
            const { data } = await axios.get("https://api.github.com/users");
            this.props.getUsersSucess(data);
        } catch (e) {
            this.props.getUsersErr(e);
        }
    }

    sortItems = () => {
        const { sort } = this.state;
        const { usersData } = this.props;
        let sortedUsers = [...usersData];
        let sortDirection = sort;


        if (!sortDirection) {
            sortedUsers = sortedUsers.sort((a, b) => {
                const firstLogin = a.login.toLowerCase();
                const secondLogin = b.login.toLowerCase();

                if (firstLogin > secondLogin) {
                    return 1;
                }
                if (firstLogin < secondLogin) {
                    return -1;
                }
                return 0;
            });
            sortDirection = "ASC";
        } else {
            sortedUsers = sortedUsers.reverse();
            sortDirection = "DESC";
        }
        this.setState({ sort: sortDirection });
        this.props.getUsersSucess(sortedUsers);


    }

    render() {
        const { usersData, error, history } = this.props;
        return <main className="main">
            <Container>
                <Col className="sort-control">
                    <Button color="primary" onClick={this.sortItems}>Sort</Button>
                </Col>
                <Row>
                    {usersData.map((user, id) => (
                        <UserComponent user={user} key={id} />))}
                </Row>
            </Container>
        </main>
    }

}

const mapStateToProps = state => ({
    usersData: state.users.data,
    error: state.users.err
});

const mapDispatchToProps = dispatch => ({
    getUsersSucess: data => dispatch(getUsersSucessAction(data)),
    getUsersError: err => dispatch(getUsersErrorAction(err))
})

export const Main = connect(
    mapStateToProps,
    mapDispatchToProps
)(MainComponent);