import API from "../../api/API.js"
import React, { Component } from "react";
import geolocation from 'geolocation'
import { Section, Container, Title, SubTitle, Input, Button, Hero, Card, Content} from 'reactbulma'

const buttonStyle = {
    marginRight:"1%"
};

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
      API.getCity(query)
      .then(res => {
        console.log(res)
      })
      .catch(err => console.log(err));
    }
    this.setState({
      location: ""
    });
  };

searchCurLoc = event => {

        // Preventing the default behavior of the form submit (which is to refresh the page)
        console.log("test TEST!!!!!!");
        geolocation.getCurrentPosition((err, position) => {

            if (err) throw err
        else{
         //console.log(position)
                console.log("this", this);

                let geoloc = position.coords
          //console.log(geoloc)
          API.getRestaurants(geoloc)
          .then(res => {
            console.log(res)
            this.setState({ results: res.data })

            API.postResSearch(res).then(res => {
          console.log(res)
        })
          })
          .catch(err => console.log(err));
    }

      })
      };

render() {

    return (
      <div>
          <Section>
              <Hero>
                  <Hero.Body>
                      <Container>
                          <Title>Find Restaurants</Title>
                          <SubTitle>A simple way to find restaurants that serve <strong>vegetarian</strong> meals that you love.</SubTitle>

                          {/*/!*Future addition*!/*/}
                          {/*<form style={{marginBottom:"3%"}}>*/}
                              {/*<Input*/}
                                  {/*style={{width:"60%"}}*/}
                                  {/*primary*/}
                                  {/*large id="large"*/}
                                  {/*placeholder="Search: Tofu"*/}
                                  {/*type="text"*/}
                              {/*/>*/}

                              {/*<Container style={{marginTop:"1%"}}>*/}
                                  {/*<Button style = {buttonStyle} primary>Tofu</Button>*/}
                                  {/*<Button style = {buttonStyle} info>Soup</Button>*/}
                                  {/*<Button style = {buttonStyle} success>Sandwiches</Button>*/}
                                  {/*<Button style = {buttonStyle} warning>Noodles</Button>*/}
                                  {/*<Button style = {buttonStyle} danger>Quinoa</Button>*/}
                              {/*</Container>*/}
                          {/*</form>*/}

                          <form className="form" style={{marginTop:"2%"}}>
                              <Input
                                  style={{width:"60%"}}
                                  primary
                                  large id="large"
                                  name="location"
                                  value={this.state.location}
                                  type="text"
                                  onChange={this.handleInputChange}
                                  placeholder="City, State"
                              />
                              <br></br>
                              <Button style={{marginTop:"1.3%"}} info onClick={this.handleFormSubmit}>
                                  Search your city & state!
                              </Button>
                          </form>
                          <p>OR</p>
                          <Button danger onClick={this.searchCurLoc}>Search Current Location</Button>
                      </Container>
                  </Hero.Body>
              </Hero>
          </Section>
          <Hero warning>
              <Container style={{textAlign:"center"}}>

                  {this.state.results.map(restuarant => {
                      return (
                          //for each restaurant data object make a ui compoment

                          <div style={{display:"inline-block", width:"20%", margin:"3%" }}>
                              <Card>
                                  <Card.Header>
                                      <Card.Header.Title>
                                          {restuarant.name}
                                      </Card.Header.Title>
                                  </Card.Header>
                                  <Card.Content>
                                      <Content>
                                          {restuarant.cuisines}
                                          <br></br>
                                          <small>{restuarant.location.locality_verbose}</small>
                                      </Content>
                                  </Card.Content>
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

export default Findres;


 
