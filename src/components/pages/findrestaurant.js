import React, { Component } from "react";

class Login extends Component {
  // Setting the component's initial state
  state = {
    location: "",
  };


  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    if (!this.state.location){
      alert("Please enter a city and state");
    } else {
      alert(`Hello`);
    }

    this.setState({
      location: ""
    });
  };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div>
        <p>
          Hello 
        </p>
        <form className="form">
          <input
            value={this.state.location}
            name="location"
            type="text"
            placeholder="city, state"
          />
          <button onClick={this.handleFormSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default Login;
