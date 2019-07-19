import React from 'react';
import './Header.css';
import logo from './logo.svg';

class Header extends React.Component {
    constructor(props){
        super(props);
        // this.statesetting=this.statesetting.bind(this);
        // this.li1=React.createRef();
    }

    // state={info1:"Info-1", info2:"Info-2", info3:"Info-3"}
    state={info:""};

    // statesetting=(e)=>{
    //     const target=e.target;
    //     const value=target.value;
    //     e.preventDefault();
    //     this.setState({info:value});
    //     // this.setState({info:this.li1.current.value});
    // }

    // sir amir's solution worked

    handleLiValue = (liValue) =>{
        this.setState({info: liValue});
    }
    

    render(){
        console.log(this.state.info);

        return(
            <div className='header-container'>
               
                <div className='header-nav-bar header-default-margin'>
                   
                    <div className='header-logo'>
                        <img src={logo} className="App-logo" alt="logo" />
                    </div>
                    <div >
                        <ul>
                            <li onClick={() => this.handleLiValue("info-1")}>
                                Info-1
                            </li>
                            <li onClick={() => this.handleLiValue("info-2")}>
                                Info-2
                            </li>
                            <li onClick={() => this.handleLiValue("info-3")}>
                                Info-3
                            </li>
                        </ul>
                    </div>
                    <div >
                        <span>
                            <GetDate />
                        </span>

                    </div>

                </div>

            </div>
        );
    };

    
}
function GetDate (){
    let today = new Date();
    var get= today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
    return(
        <h3>{get}</h3>
    )
}

export default Header;