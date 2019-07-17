import React from 'react';
import BodyComponents from './../Body-Components/Body-Components';
import './Body.css';

export default class Body extends React.Component{
    render(){
        // set css and use div instead of react.fragment
        return(
            <div className='body-container body-top-margin'> 
                <BodyComponents name="Asif" 
                info="Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam." 
                contact="123456">
                </BodyComponents>
                <BodyComponents name="Mehreen" 
                info="Donec rutrum congue leo eget malesuada. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi." 
                contact="987654">
                </BodyComponents>
                <BodyComponents name="Sohail" 
                info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a." 
                contact="852159">
                </BodyComponents>
            </div>

        )
    }
}