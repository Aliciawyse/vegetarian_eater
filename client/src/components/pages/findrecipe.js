import API from "../../api/API.js";
import SaveButton from "./saveBut.js";
import $ from "jquery";
import React, { Component } from "react";
import { Section, Container, Title, SubTitle, Input, Button, Hero, Card, Content, Icon} from 'reactbulma'
import FontAwesome from 'react-fontawesome'


class Findrec extends Component {

    constructor(props) {
        super(props)
        this.state={
            search: "",
            results: []

        }
    }

    handleInputChange = event => {

        let value = event.target.value;
        this.setState({
            search: value
        });
    };

    handleFormSubmit = event => {

        event.preventDefault();

        let search = this.state.search

        if (!search){
            alert("Please enter a keyword");
        } 
        else {
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


    renderLikeunLike = event => {

      console.log('clicked')

      console.log(this)

      if (this.children.value === false){
        console.log(this)
        this.children.className = 'fas fa-heart'
        this.children.value = true
      }

      else if (this.children.value === true){
        console.log(this)
        this.children.className = 'far fa-heart'
        this.children.value = true
      }

    }




  render() {
    return (
      <div>
          <Section>
              <Hero>
                  <Hero.Body>
                      <Container>

                          <Title>Find Recipes</Title>

                          <SubTitle>A simple way to find <strong>recipes</strong>.</SubTitle>

                          <form className="form" style={{marginTop:"2%"}}>

                              <Input
                                  name="search"
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
                                          {/*<a onClick={this.renderLikeunLike}>
                                          <FontAwesome
                                          className='far fa-heart'
                                          value='false'
                                          />
                                          </a>*/}
                                          <SaveButton>
                                          </SaveButton>

                                      </Card.Header.Title>
                                  </Card.Header>
                                  <a  target="_blank" href={recipe.recipe.url}>View Recipe</a>

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



 
