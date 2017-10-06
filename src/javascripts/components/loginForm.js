import React, { Component } from 'react';

export class loginForm extends Component{
    constructor(props){
        super();
    }

    render(){
        return(
            <div>
                <form>
                    <input type="text"/>
                    <input type="password"/>
                    <button>Log in</button>
                </form>
            </div>
        );
    }
}