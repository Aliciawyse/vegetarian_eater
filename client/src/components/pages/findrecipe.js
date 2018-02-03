import API from "../../api/API.js"
import React, { Component } from "react";
import { Section, Container, Title, SubTitle, Input, Button, Hero, Card, Content} from 'reactbulma'


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

        let id = localStorage.getItem('id')
        API.postRecSearch(res, id).then(resp => {
            console.log(resp)
        }).catch(err => console.log(err))
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
        {/*<form className="form">*/}
          {/*<input*/}
            {/*name="search"*/}
            {/*value={this.state.search}*/}
            {/*type="text"*/}
            {/*onChange={this.handleInputChange}*/}
            {/*placeholder="city, state"*/}
          {/*/>*/}
          {/*<button onClick={this.handleFormSubmit}>Submit</button>*/}
        {/*</form>*/}

          <Section>
              <Hero>
                  <Hero.Body>
                      <Container>

                          <Title>Find Recipes</Title>

                          <SubTitle>A simple way to find <strong>recipes</strong>.</SubTitle>

                          <form className="form" style={{marginTop:"2%"}}>

                              <Input
                                  name="search"
                                  value={this.state.search}
                                  type="text"
                                  onChange={this.handleInputChange}
                                  placeholder="Search recipes"
                              />

                              <Button style={{marginTop:"1.3%"}} primary onClick={this.handleFormSubmit}>Search!</Button>

                          </form>

                      </Container>
                  </Hero.Body>
              </Hero>


          </Section>

          <Hero warning>
              <Container style={{textAlign:"center"}}>

                  {this.state.results.map(recipe => {
                      return (
                          //for each restaurant data object make a ui compoment

                          <div style={{display:"inline-block", width:"20%", margin:"3%" }}>
                              <Card>
                                  <Card.Image src={recipe.recipe.image} square='4by3' />
                                  <Card.Header>
                                      <Card.Header.Title>
                                          {recipe.recipe.label}
                                      </Card.Header.Title>
                                  </Card.Header>

                              </Card>
                          </div>

                      )
                  })}
              </Container>
          </Hero>
      </div>
    );
  }
}

export default Findrec;


 
