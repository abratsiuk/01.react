import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    this.handleIncrease = this.handleIncrease.bind(this);
    this.handleDecrease = this.handleDecrease.bind(this);
  }

  handleIncrease() {
    this.setState({ count: this.state.count + 1 });
  }
  handleDecrease() {
    this.setState({ count: this.state.count - 1 });
  }

  render() {
    return (
      <div className="App" style={{margin:'auto',width:'300px'}}>
        <button onClick={this.handleDecrease}>-</button>
        <span style={{margin:'0 0.75rem',display:'inline-block'}}>{this.state.count}</span>
        <button onClick={this.handleIncrease}>+</button>
      </div>
    );
  }
}

export default App;
