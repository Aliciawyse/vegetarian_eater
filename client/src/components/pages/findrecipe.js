import API from "../../api/API.js"
import React, { Component } from "react";

class Findrec extends Component {
  // Setting the component's initial state
  state = {
    search: "",
    results: []
  };


handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    let search = this.state.search
    event.preventDefault();
    if (!this.state.search){
      alert("Please enter a keyword");
    } else {
      console.log(search)
     API.getRecipes(search)
      .then(res => {
        console.log(res)
        this.setState({ results: res.data })
      })
      .catch(err => console.log(err));
    }

    this.setState({
      search: ""
    });
  };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div>
        <form className="form">
          <input
            name="search"
            value={this.state.search}
            type="text"
            onChange={this.handleInputChange}
            placeholder="search recipes"
          />
          <button onClick={this.handleFormSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default Findrec;


 
