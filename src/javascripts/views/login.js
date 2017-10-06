import React, { Component } from 'react';

import {
    Redirect
} from "react-router-dom";

export default class Login extends Component {
    constructor(props){
        super();
        console.log(props);
        this.state = {
            "email" : ""
        }
    }
    handleSubmit(){
        console.log('submitted data form !')
    }

    render(){
        if(this.props.isAuthenticated){
            return(
                <Redirect to="/" />
            );
        } else {
            return(
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="email"/> <br/>
                    <input type="password" placeholder="password"/> <br/>
                    <button>Log in</button>
                </form>
            );


        }
    }

}