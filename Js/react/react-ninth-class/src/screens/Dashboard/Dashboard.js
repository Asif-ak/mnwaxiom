import React, { Component } from 'react';
class Dashboard extends Component {
    render() { 
        console.log(this.props.history.location.state);
        return ( 
            <div>
                <p>Dashboard</p>
            </div>
         );
    }
}
 
export default Dashboard;