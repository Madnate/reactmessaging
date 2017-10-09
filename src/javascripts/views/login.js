import React, { Component } from 'react';

import {
    Redirect
} from "react-router-dom";

export default class Login extends Component {
    constructor(props){
        super(props);
        console.log(props);

        // this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            email : "",
            password: ""
        }
    }


    handleSubmit(event){
        console.log(this.state);
        this.props.handleForm(this.state.email, this.state.password);

    }

    render(){
        if(this.props.user.uid){
            console.log(this.props.user);
            return(
                <Redirect to="/" />
            );
        } else {
            return(
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange = {(event) => {this.setState({email:event.target.value});console.log(event.target.value)}} placeholder="email"/> <br/>
                    <input type="password" onChange = {(event) => this.setState({password:event.target.value})} placeholder="password"/> <br/>
                {/* <form onSubmit={this.handleSubmit}>
                    <input type="text" value="test2@test.test" placeholder="email"/> <br/>
                    <input type="password" value="123456" placeholder="password"/> <br/> */}
                    <button>Log in</button>
                </form>
            );


        }
    }

}