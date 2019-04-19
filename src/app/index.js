import React, { Component } from 'react';
import { Layout } from "./Layout";
import { Main, UserPage, About, Contacts } from './routes';
import './styles.scss';
import {BrowserRouter, Route, Switch} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='App'> 
          <Layout>
            <Switch>
              <Route path = "/About" component = {About}/>
              <Route path = "/Contacts" component = {Contacts} />
              <Route exact path = "/" component = {Main}/>
              <Route path = "/user/:login" component = {UserPage}/>
              <Route path ="/404" component = {()=> <div>Not found</div>}/> 
            </Switch>
          </Layout>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
