import React, { Component } from 'react';
import {
    Route,
    Redirect
} from 'react-router-dom';

export default class Home extends Component {


    render(){
        return(
            <div>
            <h1>{this.props.username}</h1>
            <p>Home Connected !</p>
            </div>
        );
    }

}