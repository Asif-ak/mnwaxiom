import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from '../components/Header/Header';
import Home from '../screens/Home/Home';
import About from '../screens/About/About';
import Profile from '../screens/Profile/Profile';
import Contact from '../screens/Contact/Contact';
import NotFound from '../screens/NotFound/NotFound';
import Dashboard from '../screens/Dashboard/Dashboard';
import PrivateRoute from './PrivateRoute';
import Login from '../screens/Login/Login';

export default class Router extends React.Component{
    state={
        isLoggedIn:true
    }
    render(){
        const {isLoggedIn}=this.state;
        return(
            <BrowserRouter>
            <Header />
            <Switch>
                <PrivateRoute exact isLoggedIn={isLoggedIn} path='/dashboard' component={Dashboard} />
                <Route exact path='/' component={Home} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/about' component={About} />
                <Route exact path='/profile' component={Profile} />
                <Route exact path='/contact' component={Contact} />
                <Route component={NotFound} />
            </Switch>
            </BrowserRouter>
        );
    }
}