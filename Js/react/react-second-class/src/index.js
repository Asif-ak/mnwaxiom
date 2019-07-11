import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import {Myapp} from './Helper'; OR we can do below line
import * as obj from './Helper';
// import App from './App';
// import * as serviceWorker from './serviceWorker';


// the below is JSX => javascriptXML. It creates objects and allow users to create HTML in xml.
// See react docs for supported tag

// a parent element is required to encapsulated child elements
// jsx does not support writing tags in string as opposed to js.
const element = <div>
    <h1>
        Hello JSX
    </h1>
</div>;
// to write js in jsx use {}

//for e.g.
const list = ['khi', 'isl', 'lhr']
const newelement =obj.newElementFunction(list); // working
// console.log(newelement);
const newlist=[
    {name:'Khi',food:['a','b','c']},
    {name:'Isl',food:['a','b','c']},
    {name:'Lhr',food:['a','b','c']}
];

const anotherelement=obj.anotherElementFunction(newlist) // working



// for exporting single class/fucntion
// export default <classname>
// its nat necessary to import with the same name as exported default name
// only one default export is allowed per file/module
// we can also export function with including export default in fucntion signature


// for exporting multiple classes/fucntions
// export {<classA>.<classB>}
// we can also use alias while deshtructureing object export for name change
// we can also export function with including export in  multiple fucntions signature
// <* as some to call whole object instead of particular fuction or class 

// another way to render class inherited from React.Component
ReactDOM.render(<div>{element}{anotherelement}{newelement}</div>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
