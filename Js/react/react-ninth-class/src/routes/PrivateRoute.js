import React from 'react';
import {Route, Redirect} from 'react-router-dom';

const PrivateRoute =({component:Component, isLoggedIn, ...rest}) =>{
    return(
        <Route 
        {... rest}
        render={(props)=>{
            console.log("rest ======>", rest);
            console.log("props =====>", props);

            return (isLoggedIn ? <Component {...props} /> : <Redirect exact to={{ pathname: '/login' }} />)
            
            
        }}
        />
    )    
}


export default PrivateRoute;