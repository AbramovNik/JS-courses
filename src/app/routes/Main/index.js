import React from "react";
import {Col, Row, Container} from "reactstrap";
import {UserItem} from './usersComponents'
import  axios from "axios";
const users = [{
    login : "defunkt",
    avatar_url : "https://avatars0.githubusercontent.com/u/2?v=4"

}];




export class Main extends React.Component{
state = {
    users: []
};

    componentDidMount(){
        axios.get("https://api.github.com/users")
        .then(response => {
            const { data } = response;
            this.setState({users:data});
        })
        .catch((err)=> console.log("error"));
    }

    render(){
        const{ users } = this.state;
        return <main className = "main">
        <Container>
            <Row>
                {users.map((user, id) => (
                    <UserItem user = {user} key = {id}/>))}
            </Row>
        </Container>
        
        </main>
    }

}