import React, { Component } from 'react';

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
    };
    handleDecrease() {
      this.setState({ count: this.state.count - 1 });
  };    

    render() {
        return (
            <div className="App">
                <button onClick={this.handleIncrease}>+</button>
                <span>{this.state.count}</span>
                <button onClick={this.handleDecrease}>-</button>
            </div>
        );
    }
}

export default App;