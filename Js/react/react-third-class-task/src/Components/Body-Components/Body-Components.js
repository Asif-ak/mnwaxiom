import React from 'react';
import './Body-Components.css';

export default function BodyComponent(props) {
    return(
        <div className='bodyComponent-container bodyComponent-div-border bodyComponent-default-margin'>
            <table>
                <th>
                    Name
                </th>
                <th>
                    Information
                </th>
                <th>
                    Contact
                </th>
                <tr>
                    <td>
                        {props.name}
                    </td>
                    <td>
                    {props.info}
                </td>
                <td>
                    {props.contact}
                    </td>
                </tr>
                
                
                
            </table>
            {/* <p>
                Name: {props.name}
            </p>
            <p>
                Informations: {props.info}
            </p>
            <p>
                Contact: {props.contact}
            </p> */}
        </div>
    )
}