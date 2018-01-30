import API from "../../api/API.js"
import React, { Component } from "react";
import { Section, Container, Title, SubTitle, Input, Button, Hero} from 'reactbulma'

class Findres extends Component {
  // Setting the component's initial state
  state = {
    location: "",
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
    let query = this.state.location
    event.preventDefault();
    if (!this.state.location){
      alert("Please enter a city and state");
    } else {
      console.log(query)
      API.getRestaurants(query)
      .then(res => {
        console.log(res)
        this.setState({ results: res.data })
      })
      .catch(err => console.log(err));
    }

    this.setState({
      location: ""
    });
  };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div>


        {/*<form className="form">*/}
          {/*<input*/}
            {/*name="location"*/}
            {/*value={this.state.location}*/}
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

      <Title>Find Restuarants</Title>

      <SubTitle>A simple way to find restaurants that serve <strong>vegetarian</strong> meals that you love.</SubTitle>

      <form className="form" style={{marginTop:"2%"}}>

        <Input
                primary
                large id="large"
                name="location"
                value={this.state.location}
                type="text"
                onChange={this.handleInputChange}
                placeholder="City, State"
            />

        <Button primary>Tofu</Button>
        <Button info>Soup</Button>
        <Button success>Sandwiches</Button>
        <Button warning>Noodles</Button>
        <Button danger>Quinoa</Button>
        <br></br>

        <Button style={{marginTop:"1.3%"}} primary onClick={this.handleFormSubmit}>Search!</Button>

      </form>

    </Container>
  </Hero.Body>
</Hero>


        </Section>


      </div>
    );
  }
}

export default Findres;


 
