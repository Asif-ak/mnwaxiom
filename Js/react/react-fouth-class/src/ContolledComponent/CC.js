import React from 'react';

export default class UserInput extends React.Component{
    
    state ={value:"DUmmy"}

    changestgate =(e)=>{
        e.preventDefault(); // to disable default behavior of targeted element
        this.setState({value:e.target.value.toUpperCase()}) // toUpperCase will work because we are recieiveing data in string form
    }
    
    render(){
        return(
            <form>
                <input type='text' onChange={this.changestgate} value={this.state.value} />
                {/* if we dont want the value of textbox to change we will use value */}
                {/* if we want the value of textbox to change we will use defaultvalue */}
                
                {/* short circiting the value */}
                {/* {this.state.value && <p>{this.state.value}</p>} */}

                {/* using turnery operator*/}

                {this.state.value === "ASIF" ? <p><b>{this.state.value}</b></p> : <p>{this.state.value}</p> }
            </form>
        )

        // Create or update the react third class task 
        // do conditional rendering
        // create multiple views or pages
        // and navigate those pages using navbar
        // dont use actual link or <a> tag
        // use onclick event instead
        // Dont use React.RenderDom() in index.js
        // use app.js for rending instead
    }


}