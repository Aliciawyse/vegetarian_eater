import React, { Component } from "react";

import { Input, Container } from 'reactbulma';

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


      <Container>
          <h1 style={{fontSize:"200%"}}>Post Recipes Page</h1>

          <form className="form">

        <label htmlFor="small">Name of recipe</label>
        <Input
            small
            id="small"
            name="title"
            value={this.state.title}
            type="text"
            onChange={this.handleInputChange}

        />

        <label htmlFor="normal">Link to recipe</label>
        <Input
            id="normal"
            name="link"
            value={this.state.link}
            type="text"
            onChange={this.handleInputChange}
        />

        <label htmlFor="medium">Enter ingredients</label>
        <Input medium
               id="medium"
               name="ingredients"
               value={this.state.ingredients}
               type="text"
               onChange={this.handleInputChange}
        />

        <label htmlFor="large">Enter instructions</label>
        <Input large
               id="large"
               name="instructions"
               value={this.state.instructions}
               type="text"
               onChange={this.handleInputChange}
        />

          {/*<input*/}
            {/*name="title"*/}
            {/*value={this.state.title}*/}
            {/*type="text"*/}
            {/*onChange={this.handleInputChange}*/}
            {/*placeholder="name of recipe"*/}
          {/*/>*/}
          {/*<input*/}
            {/*name="link"*/}
            {/*value={this.state.link}*/}
            {/*type="text"*/}
            {/*onChange={this.handleInputChange}*/}
            {/*placeholder="link to recipe"*/}
          {/*/>*/}
          {/*<input*/}
            {/*name="ingredients"*/}
            {/*value={this.state.ingredients}*/}
            {/*type="text"*/}
            {/*onChange={this.handleInputChange}*/}
            {/*placeholder="Enter Ingredients"*/}
          {/*/>*/}
          {/*<input*/}
            {/*name="instructions"*/}
            {/*value={this.state.instructions}*/}
            {/*type="text"*/}
            {/*onChange={this.handleInputChange}*/}
            {/*placeholder="Enter Instructions"*/}
          {/*/>*/}
          <button onClick={this.handleFormSubmit}>Submit</button>
        </form>
      </Container>
  </div>
  )
}
}
export default Postrec;
