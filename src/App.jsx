import React from "react";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      isCounting: false,
    };

    this.handleStart = this.handleStart.bind(this);
    this.handleStop = this.handleStop.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.intervalTick = this.intervalTick.bind(this);

    this.timeId = null;
  }

  componentDidMount() {
    let currentCount = localStorage.getItem("s23_task1") || 0;
    this.setState({ count: +currentCount });
  }

  componentDidUpdate() {
    console.log("componentDidUpdate", this.state);

    localStorage.setItem("s23_task1", this.state.count);

    if (this.state.isCounting) {
      if (!this.timeId) {
        this.timeId = setInterval(this.intervalTick, 1000);
      }
    } else if (this.timeId) {
      clearInterval(this.timeId);
      this.timeId = null;
    }
  }

  componentWillUnmount() {
    if (this.timeId) {
      clearInterval(this.timeId);
    }
  }

  handleStart() {
    this.setState({ isCounting: true });
  }

  handleStop() {
    this.setState({ isCounting: false });
  }

  handleReset() {
    this.setState({ count: 0, isCounting: false });
  }

  intervalTick() {
    this.setState((prevState) => { return { count: prevState.count + 1 }});
  }

  render() {
    return (
      <div className="App">
        <h1>React Timer</h1>
        <h3>{this.state.count}</h3>
        {!this.state.isCounting ? (
          <button onClick={this.handleStart}>Start</button>
        ) : (
          <button onClick={this.handleStop}>Stop</button>
        )}
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}
