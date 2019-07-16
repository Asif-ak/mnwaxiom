import React, { Component, Fragment } from 'react';

class OtherApp extends Component {
    render() {
        return (
            // if we are using one component we can write <Cities /> but ifwe are using more than one component 
            // we must wrap it within another tag like below
            // or we can use fragment instead of a div which allows to attached child nodes to root without adding
            // another node
            // we also use emplty tag '<> </> instead of <fragment></fragment>'

            // props are like html attributes used to pass data or cssclasses or etc.
            // props are immutable readonly objects 
            <Fragment>
                <Cities cityArray={['khi', 'lhr', 'isb', 'mlt']} name="Asif"></Cities> 
                {/* passing data as props */}
                <Cities cityArray={['hyd', 'khr', 'qta', 'gwd']} name="Akbar"></Cities>
                <Students />
            </Fragment>
        )
    }
}

class Cities extends Component {
    render() {
        // catching that passed data
        const cityArray = this.props.cityArray; 
        // const cities =['khi','lhr','isb','mlt'];
        return (
            <Fragment>
                <ul>
                    {cityArray.map(a => <li key='a'>{a}</li>)} 
                    {/* enumerating data catched from props */}
                </ul>
                <h4>{this.props.name}</h4>
            </Fragment>


        )
    }
}

function abc(props) {
    return(
        <div>
            {props.whatever}
        </div>
    )
}

// state is js object which determine how that component renders & behave
// state can only be used within class component {statefull component} not with functional component {stateless component}.
// state is private to component and can only be controlled by it.
// we shld call the construct and initialize state in it as mentioned in react docs but 
// we can initialize state will class property where there is no need of let or const.
// we shld also not pass props to state.

class Students extends Component{
    state={
        name:['a','b','c','d']
    }
    render(){
        return(
            <ul>
                {this.state.name.map(a=><li>{a}</li>)}
            </ul>
        )
    }
}

export default OtherApp;

// task 3 {create spausing react}
// create 4 componenets : header, footer, body and container
// container shall be reused
// it shall contain 3 divs with different data (pass data using props)
// use proper css styling for each component.
// folow this folder structure : in src create component. In component create folder for each component and then 
// in those folder create a js file and a css with component name.
// In css, create classes, ID and etc as {.componentname-whatever{}}

// find react supported html tags

