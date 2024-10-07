import React from "react";

// don't change the Component name "App"
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      isAgreeWithTerms: false,
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  validateEmail = () => {
    if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(this.state.email)) {
      alert("You have entered an invalid email address!");
    }
    return true;
  };
  handleCheckedChange = (e) => {
    this.setState({ [e.target.name]: e.target.checked });
  };
  validateAgree = () => {
    if (!this.state.isAgreeWithTerms) {
      alert("You have to agree with terms!");
      return false;
    }
    return true;
  };
  handleSend = () => {
    if (this.validateEmail() && this.validateAgree()){
      alert("You connected");
      this.setState( {
        email: "",
        isAgreeWithTerms: false,
      })
    }
  };

  render() {
    const { email, isAgreeWithTerms } = this.state;

    return (
      <div>
        <input
          type="email"
          name="email"
          placeholder="email"
          value={email}
          onChange={this.handleChange}
          onBlur={this.validateEmail}
        />
        <br />
        <label>
          <input
            type="checkbox"
            name="isAgreeWithTerms"
            checked={isAgreeWithTerms}
            onChange={this.handleCheckedChange}
          />
          I agree with terms and conditions
        </label>
        <br />
        <button onClick={this.handleSend}>Send</button>
      </div>
    );
  }
}
