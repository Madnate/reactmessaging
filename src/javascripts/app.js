import firebase from './data/fire.js';
import React, { Component } from 'react';
import {render} from 'react-dom';

import {
    HashRouter,
    Route,
    Link,
    Switch
} from "react-router-dom";

// import store from './store';


// firebase.auth().onAuthStateChanged(function(user) {
//     if (user) {
//         console.log("HELLO USER");
//         // User is signed in.
//         // var displayName = user.displayName;
//         // var email = user.email;
//         // var emailVerified = user.emailVerified;
//         // var photoURL = user.photoURL;
//         // var isAnonymous = user.isAnonymous;
//         // var uid = user.uid;
//         // var providerData = user.providerData;
//         // ...
//         console.log(user.id);
//     } else {
//         // User is signed out.
//         // ...
//     }
// });
// var email = 'test2@test.test';
// var password = '123456';
//
// firebase.auth().signInWithEmailAndPassword(email, password)
//     .then(success=>{
//         console.log('BITCH');
//         console.log(success);
//     })
//     .catch(function(error) {
//     // Handle Errors here.
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     // ...
// });
//


let database = firebase.database();

let ref = database.ref('chats');
ref.on('value',gotData ,errData);

function gotData(data){
    console.log(data.val());
}
function errData(err){
    console.log('Firebase : No Data');
}

import PrivateRoute from './components/Router/privateRoute';

//import Full from './containers/Full/full';


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
    constructor(){
        super();
        this.state = {
            isAuthenticated : false
        }
    }

    render(){
        return(
            <HashRouter>
                <div>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/test">Test</Link></li>
                        <li><Link to="/about">About</Link></li>
                    </ul>
                    <Switch>
                        {/*<Route exact path="/" component={Home}/>*/}
                        <PrivateRoute exact path="/" component={Home} isAuthenticated={this.state.isAuthenticated}/>
                        <Route path="/about" component={About}/>
                        <Route path="/login" render={(props)=>(<Login isAuthenticated={this.state.isAuthenticated} />)} />
                        <Route component={NotFound} status={404}/>
                    </Switch>
                </div>
            </HashRouter>
        );
    }
}

render(<App />, document.getElementById('app'));