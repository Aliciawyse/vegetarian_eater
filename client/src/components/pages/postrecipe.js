import React, { Component } from "react";


class Postrec extends Component {
  // Setting the component's initial state
  state = {
    title: "",
    link: "",
    instructions:"",
      ingredient: '',
      ingredients: [{ ingredient: '' }],
  };

 handleIngredientNameChange = (idx) => (evt) => {
    const newingredients = this.state.ingredients.map((Ingredient, sidx) => {
      if (idx !== sidx) return Ingredient;
      return { ...Ingredient, ingredient: evt.target.value };
    });

    this.setState({ ingredients: newingredients });
  }

  handleAddIngredient = () => {
    this.setState({
      ingredients: this.state.ingredients.concat([{ ingredient: '' }])
    });
  }

  handleRemoveIngredient = (idx) => () => {
    this.setState({
      ingredients: this.state.ingredients.filter((s, sidx) => idx !== sidx)
    });
  }

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
    let post = this.state.title
    event.preventDefault();
    if (!this.state.title){
      alert("Please enter a name for this recipe");
    } else {
      console.log(post)

    this.setState({
    title: "",
    link: "",
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
          {this.state.ingredients.map((Ingredient, idx) => (
          <div>
            <input
              type="text"
              placeholder={`Ingredient #${idx + 1}`}
              value={Ingredient.ingredient}
              onChange={this.handleIngredientNameChange(idx)}
            />
            <button type="button" onClick={this.handleRemoveIngredient(idx)}>-</button>
          </div>
        ))}
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
