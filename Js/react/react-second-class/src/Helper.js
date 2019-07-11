import React from 'react';

// using component class
class Myapp extends React.Component{
    render(){
        let somelist = ['khi', 'isl', 'lhr','psh','mul']
        
        return(
            <ul>
                {somelist.map((itemms)=><li>{itemms}</li>)}
            </ul>
        )
    }
}

export function anotherElementFunction(params) {
    const anotherelement=<div>
    {
       params.map((item)=><li>{item.name}
           <ol>
               {item.food.map((items) => {
                   return (
                       <li>
                           {items}
                       </li>
                   )
               })}
           </ol>
       </li>)
    }
</div>;
return anotherelement;
}

export function newElementFunction(params) {
    const newelement = <div>
    {params.map((item) => { // return is must if u r using inline html within function
        return (
            <li>
                {item}
            </li>
        )
    })}
</div>;
return newelement;
}

export {Myapp};