import React from 'react';
import BodyComponents from './../Body-Components/Body-Components';

export default class Body extends React.Component{
    render(){
        // set css and use div instead of react.fragment
        return(
            <React.Fragment> 
                <BodyComponents name="Asif" info="Some Info" contact="123456"></BodyComponents>
                <BodyComponents name="Mehreen" info="Other Info" contact="987654"></BodyComponents>
                <BodyComponents name="Sohail" info="Various Info" contact="852159"></BodyComponents>
            </React.Fragment>

        )
    }
}