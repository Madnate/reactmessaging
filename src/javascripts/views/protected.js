import React, { Component } from 'react';

class ProtectedPage extends Component{
    constructor(props){
        super();
        console.log('Props from InitialRoute');
        console.log(props.UserName);
    }

    render(){
        return(<p>Hello Logged User ! My name is {this.props.UserName}</p>);
    }
}

export default ProtectedPage;