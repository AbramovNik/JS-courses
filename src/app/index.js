import React, { Component } from 'react';
import { Layout } from "./components";
import { Main, UserPage, About, Contacts, SearchUsers } from './routes';
import './styles.scss';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";

class App extends Component {
  render() {
    return (
      <Provider store = {store}> 
        <BrowserRouter>
          <Layout>
            <Switch>
              <Route path="/About" component={About} />
              <Route path="/Contacts" component={Contacts} />
              <Route path='/SearchUsers' component={SearchUsers} />
              <Route exact path="/" component={Main} />
              <Route path="/user/:login" component={UserPage} />
              <Route path="/404" component={() => <div>Not found</div>} />
            </Switch>
          </Layout>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
