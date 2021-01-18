import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div>
                
                <Link  to={'/Login/:adminUserName/:adminPassword'}><u><h1>Admin Login</h1></u></Link>
                <h5>Click on Admin Login for the login.</h5>
                
            </div>
        );
    }
}

export default Home;