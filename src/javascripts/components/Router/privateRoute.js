import React, { Component } from 'react';

import {
    Route,
    Redirect
} from 'react-router-dom';


class PrivateRoute extends Component{
    constructor(props){
        super();
        this.state = {
            isAuthenticated: props.isAuthenticated,
            exact : props.exact
        }
        console.log('PrivateRoute Component!');
    }

    render(){
        console.log(this.state.isAuthenticated);
        const ProtectedComponent = this.props.component;
        console.log('Passed Props');
        console.log(ProtectedComponent);
        return(
            <Route
                exact={this.state.exact}
                component={
                    props => (
                        this.state.isAuthenticated ? <ProtectedComponent {...this.props.componentProps}/> : <Redirect to="/login"/>
                    )
                }
            />
        );
    }
}
// Not defined ? BUG
// PrivateRoute.propTypes = {
//     isAuthenticated : React.PropTypes.string,
//     exact : React.PropTypes.string
// }

export default PrivateRoute;