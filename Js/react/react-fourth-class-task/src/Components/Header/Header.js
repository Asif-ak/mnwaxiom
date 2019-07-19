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
                    <div >
                        <ul>
                            <li>
                                Info-1
                            </li>
                            <li>
                                Info-2
                            </li>
                            <li>
                                Info-3
                            </li>
                        </ul>
                    </div>
                    <div >
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
        <h3>{get}</h3>
    )
}

export default Header;