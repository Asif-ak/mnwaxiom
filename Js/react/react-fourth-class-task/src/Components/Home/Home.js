import React from 'react';
import './Home.css';

export default class Home extends React.Component{
    render(){
        // set css and use div instead of react.fragment
        return(
            <div className='home-container home-top-margin'>
                <div className='home-default-margin'>
                    <h2>
                        This is a Home Page.
                    </h2>

                </div>
            </div>

        )
    }
}