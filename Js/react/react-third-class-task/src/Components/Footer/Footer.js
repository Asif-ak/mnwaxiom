import React from 'react';
import './Footer.css';

export default class Footer extends React.Component{
    render(){
        return(
            <footer className='footer-container'>
                <div className='footer-bar '>
                    <div className='footer-center-alignment'>
                        <p>
                            &#169; Axiom Education
                        </p>
                        <address >
                            Visit us &#64;: 245/M/2 Block 6 PECHS (6.40 km) 75400 Karachi, Pakistan.
                            Tel: (021)34321224&nbsp;
                            {/* Fax: (021)35830446 */}
                            Email: <a href="mailto:info@szabist.edu.pk"> info@axiom.edu.pk</a>&nbsp;
                            Facebook: <a href="https://www.facebook.com/axiom.edu.pk/" target="_blank"> Axiom</a>

                        </address>
                    </div>

                </div>

            </footer>
        )
    }
}