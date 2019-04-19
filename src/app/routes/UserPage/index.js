import React from "react";
import {Col, Container, Spinner, Row} from "reactstrap";
import axios from "axios";
import "./styles.scss";
import "../../../utils/images/icomoon/icons.css";


export class UserPage extends React.Component {
    state = {
        user: null
    };

    componentDidMount(){
        const{login} = this.props.match.params;
        if(login){
            axios
            .get(`https://api.github.com/users/${login}`)
            .then(response=> {
                const {data} = response;
                this.setState({user:data});
            })
            .catch(err => this.props.history.push("/404"));
        }
    }

    render() {
        const {user} = this.state;     

        if(!user){
            return <Spinner color = "secondary"/>;
        }
        let time = user.created_at;
        let newTime = time.substr([0],[10]);
        
        
       return (
           <Container>
               <Row>
                <Col><img src = {user.avatar_url} alt = "" className = "user-avatar" /></Col>
                    <Col>
                        <ul className = "userInfo">
                            <li><i className = "icon-avatar" />User Name: {user.name}</li>
                            <li><i className = "icon-blog" />Blog: {user.blog}</li>
                            <li><i className = "icon-enterprise" />Company: {user.company}</li>
                            <li><i className = "icon-calendar" />Date of create: {newTime}</li>
                            <li><i className = "icon-followers" />Followers: {user.followers}</li>
                            <li><i className = "icon-follower" />Following: {user.following}</li>
                            <li><i className = "icon-location" />Location: {user.location}</li>
                            <li><i className = "icon-login" />Login: {user.login}</li>
                        </ul>
                    </Col>
                </Row>
           </Container>
       );
    }
}