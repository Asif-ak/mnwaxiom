import React from 'react';
import './Header.css';
import './Body.css';
import logo from './logo.svg';
import Home from '../Home/Home';
import BodyComponents from './../Body-Components/Body-Components';


class Header extends React.Component {
    

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
            <React.Fragment>
                <div className='header-container'>
               
               <div className='header-nav-bar header-default-margin'>
                  
                   <div className='header-logo'>
                       <img src={logo} className="App-logo" alt="logo" onClick={()=>this.handleLiValue("home")} />
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
           
           <div>
               {
                    this.state.info === "info-1" ? <div className='body-container body-top-margin'>
                    <BodyComponents name="Info-1"
                    info="Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam."
                    contact="123456"> 
                    </BodyComponents>
                    </div>
                    : this.state.info === "info-2" ? <div className='body-container body-top-margin'>
                    <BodyComponents name="Info-2"
                    info="Donec rutrum congue leo eget malesuada. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi."
                    contact="987654">
                    </BodyComponents>
                    </div>
                    : this.state.info === "info-3" ? <div className='body-container body-top-margin'>
                    <BodyComponents name="Info-3"
                    info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a."
                    contact="852159">
                    </BodyComponents>
                    </div>
                    : this.state.info === "home" ? <Home />
                    :<Home />
                } 
           
            </div>

               }
           {/* </div> */}
           
            </React.Fragment>
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