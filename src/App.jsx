import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };

    // this.increase = this.increase.bind(this);
    // this.decrease = this.decrease.bind(this);
  }

  increase = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrease = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div>
        <button onClick={this.increase}> + </button>
        <span> {this.state.count} </span>
        <button onClick={this.decrease}> - </button>
      </div>
    );
  }
}

export default App;
