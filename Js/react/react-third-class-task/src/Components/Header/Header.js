import React from 'react';
import './Header.css';
import logo from './logo.svg';

function Header() {

    // render(){
        return(
            <div className='header-container'>
               
                <div className='header-nav-bar header-default-margin'>
                   
                    <div className='header-logo'>
                        <img src={logo} className="App-logo" alt="logo" />
                    </div>
                    <div className='header-title'>
                        <h2>
                            React Third Class Task
                        </h2>
                    </div>
                    <div className='header-date-time'>
                        <p>
                            <GetDate />
                        </p>

                    </div>

                </div>

            </div>
        );
    // }
}
function GetDate (){
    let today = new Date();
    var get= today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
    return(
        <h2>{get}</h2>
    )
}

export default Header;