import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';



// let element = React.createElement('ul',{},React.createElement('li',null,'1'));
class element extends React.Component{
    constructor(props)
    {
        super(props);
        
    }
    // this.some:
    render()
    {
        let someobject=[{'name':'Ali','class':'3'},
            { 'name': 'Osama', 'class': '4' },
            { 'name': 'Faraz', 'class': '5' }];
        return (
            <ul>
                {someobject.map(function(a){
                    return (
                        <dl>
                            <li>
                                <dt> Name:
                                    {a.name}
                                </dt>
                                <dd > Class:
                                    {a.class}
                                </dd>
                            </li>

                        </dl>
                    )
                })}
            </ul>        )
    }
}

ReactDOM.render(React.createElement(element,null,null), document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
