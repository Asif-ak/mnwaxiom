import React from 'react';

export default function BodyComponent(props) {
    return(
        <div>
            <p>
                {props.name}
            </p>
            <p>
                {props.info}
            </p>
            <p>
                {props.contact}
            </p>
        </div>
    )
}