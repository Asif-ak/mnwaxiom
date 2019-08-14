import React, { Component, Fragment } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      text: "Old Props"
    }
  }

  render() {
    const { text } = this.state;
    return (
      <div className="App-Background">
        <button
          onClick={() => this.setState({ text: "New Props" })}>
          Change State
          </button>
        <Child value={text} />
      </div>
    )
  }
}

class Child extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: this.props.value,
      isLoading: true,
      data: []
    }
    console.log("constructor")
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("getDerivedStateFromProps");
    console.log("nextProps", nextProps);
    console.log("prevState", prevState);
    return {
      text: nextProps.value
    }
  }

  componentDidMount() {
    console.log("componentDidMount")
    fetch('https://jsonplaceholder.typicode.com/todos/')
      .then(response => response.json())
      .then(json => {
        this.setState({ data: json, isLoading: false })
      })
  }
  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //   console.log("getSnapshotBeforeUpdate");
  //   console.log("prevState", prevState);
  //   console.log("prevProps", prevProps);
  // }
  componentDidUpdate() {
    console.log("componentDidUpdate")
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  render() {
    console.log("render");

    const { text, isLoading, data } = this.state;
    return (
      <div>
        {isLoading && "Loading......."}
        {
          !!data.length && <ol>
            {
              data.map((item, index) => {
                return (
                  <li key={index}>{item.title}</li>
                )
              })
            }
          </ol>
        }
      </div>
    );
  }
}


export default App;
