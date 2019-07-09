// let a ={"a":"b","b":"c"};
let b=[1,2,3,4,5];


for (let index = 0; index < b.length; index++) {
    console.log(b[index]);
}

const a = new Date();
console.log(a.getFullYear());

const teacher = ["Asif","Bashir","Cassum","Daddy"];
console.log(teacher.map(a=> "Mr."+a));
console.log(teacher.filter(b=>b.length>=5));


// React first code
// the below will not work
// u have to create app using create-react-app
// but first install create-react-app

import React from "react";
import ReactDOM from "react-dom";

const element =React.createElement('div',null,'Hello World');

ReactDOM.render(element,document.getElementById('root'));