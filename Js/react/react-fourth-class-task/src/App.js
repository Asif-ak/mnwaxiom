import React from 'react';
import Body from './Components/Body/Body';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

class App extends React.Component {

  render(){

    
    return (
      <React.Fragment>
        <Header />
        <Body />
        <Footer />
      </React.Fragment>
    );
  }

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  
}

export default App;
