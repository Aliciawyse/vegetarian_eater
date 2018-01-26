import React, { Component } from "react";

class Postrec extends Component {
  // Setting the component's initial state
  state = {
    title: "",
    link: "",
    ingredients: "",
    instructions:""
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
    let query = this.state.name
    event.preventDefault();
    if (!this.state.name){
      alert("Please enter a name for this recipe");
    } else {
      console.log(query)

    this.setState({
    title: "",
    link: "",
    ingredients: "",
    instructions:""
    });

  }
  };

render() {
  return (
  <div>
    <h1>Post Recipes Page</h1>
    <form className="form">
          <input
            name="title"
            value={this.state.title}
            type="text"
            onChange={this.handleInputChange}
            placeholder="name of recipe"
          />
          <input
            name="link"
            value={this.state.link}
            type="text"
            onChange={this.handleInputChange}
            placeholder="link to recipe"
          />
          <input
            name="ingredients"
            value={this.state.ingredients}
            type="text"
            onChange={this.handleInputChange}
            placeholder="Enter Ingredients"
          />
          <input
            name="instructions"
            value={this.state.instructions}
            type="text"
            onChange={this.handleInputChange}
            placeholder="Enter Instructions"
          />
          <button onClick={this.handleFormSubmit}>Submit</button>
        </form>
  </div>
  )
}
}
export default Postrec;
