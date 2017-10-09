import firebase from './data/fire.js';
import React, { Component } from 'react';
import {render} from 'react-dom';
import {connect, Provider} from 'react-redux';
import {
    HashRouter,
    Route,
    Link,
    Switch
} from "react-router-dom";

import store from './store';

//Action 
import { login, logout } from './actions/UserAction';

import PrivateRoute from './components/Router/privateRoute';

//Views
import Home from './views/home';
import Login from './views/login';
import { NotFound } from './views/pageNotFound';

const About = () => (
    <div>
        <h1>About this website</h1>
        <p>
            This is an app powered by React, Redux and Firebase. <br/>
            Messenger like application.
        </p>
    </div>
);


class App extends Component {

    render(){
        console.log(this.props.user);
        return(
            <Provider store={this.props.store}>
                <HashRouter>
                    <div>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/test">Test</Link></li>
                            <li><Link to="/about">About</Link></li>
                        </ul>
                        <Switch>
                            <PrivateRoute 
                                exact 
                                path="/" 
                                isAuthenticated={this.props.user.uid}
                                componentProps={this.props.user}
                                component={Home}
                             />
                            <Route path="/about" component={About}/>
                            <Route path="/login" render={(props)=>(<Login user={this.props.user}handleForm={(userEmail,userPassword)=> this.props.login(userEmail,userPassword)} />)} />
                            <Route component={NotFound} status={404}/>
                        </Switch>
                    </div>
                </HashRouter>
            </Provider>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        login: (userEmail,userPassword) => {
            dispatch(login(userEmail,userPassword))
        }
    }
}
const Root = connect(mapStateToProps, mapDispatchToProps)(App);

render(<Root store={store} />, document.getElementById('app'));