import React from 'react';
// import logo from './logo.svg';
import './App.css';
import UserInput from './ContolledComponent/CC'


// never call state in render method of a component class
// to change the state use setstate() method
// never initialize state with props
// download --save prop-types dependency for checking props type
// practice pro-types at home


class App extends React.Component {
  constructor(props){
    super(props);
  

    this.state = { number: 0 };
  
}
  numberupdate = () => {
    this.setState({number:this.state.number+1})
  }
  numberrefresh =()=>{this.setState({number:0})}
  
  render(){
    return (
      <div className="App">

        <p>
          {this.state.number}
        </p>
        
        <button onClick={this.numberupdate} type="submit">Click</button>
        {/* do not pass the method with paranthesis in onclick bcoz we want to pass js method deficition not method itself */}
        {/* it will fire onload with paranthesis */}
        {/* <input type="text" placeholder="hello"></input> */}
        <button onClick={this.numberrefresh} type="submit">Refresh</button>
        <UserInput />


        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
      </div>
    );
  }
}

export default App;
