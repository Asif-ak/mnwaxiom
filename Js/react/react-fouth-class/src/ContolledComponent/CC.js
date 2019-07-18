import React from 'react';

export default class UserInput extends React.Component{
    
    state ={value:"DUmmy"}

    changestgate =(e)=>{
        this.setState({value:e.target.value.toUpperCase()}) // toUpperCase will work because we are recieiveing data in string form
    }
    
    render(){
        return(
            <form>
                <input type='text' onChange={this.changestgate} value={this.state.value} />
                {/* if we dont want the value of textbox to change we will use value */}
                {/* if we want the value of textbox to change we will use defaultvalue */}

                <p>{this.state.value}</p>
            </form>
        )
    }


}