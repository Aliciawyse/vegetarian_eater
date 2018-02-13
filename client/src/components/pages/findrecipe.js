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
            results: [],
            arr:[],
            uid:""
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
                //console.log(res)

                let id = localStorage.getItem('id')
                API.postRecSearch(res, id).then(resp => {

                    console.log(resp,resp.data[0])
                    this.setState({ 
                        results: resp.data.map((recipe)=>JSON.parse(recipe.recipeinfo)),
                        search: "",
                        arr: resp.data.map((recipe)=>(recipe._id)),
                        uid:localStorage.getItem('id')
                    })
                }).catch(err => console.log(err))
            }).catch(err => console.log(err));
        }
    };


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
                                  placeholder="Enter a keyword to search recipes"
                              />

                              <Button style={{marginTop:"1.3%"}} primary onClick={this.handleFormSubmit}>Search!</Button>

                          </form>

                      </Container>
                  </Hero.Body>
              </Hero>


          </Section>

          <Hero warning>
              <Container style={{textAlign:"center"}}>

                  {this.state.results.map((recipe,index )=> {

                      return (
                          //for each restaurant data object make a ui compoment

                          <div style={{display:"inline-block", width:"20%", margin:"3%" }}>
                              <Card>
                                  <Card.Image src={recipe.image} square='4by3' />
                                  <Card.Header>
                                      <Card.Header.Title>
                                          {recipe.recname}
                                          {/*<a onClick={this.renderLikeunLike}>
                                          <FontAwesome
                                          className='far fa-heart'
                                          value='false'
                                          />
                                          </a>*/}
                                          <SaveButton
                                          id={ this.state.arr[index] }
                                          uid={this.state.uid}
                                          >
                                          </SaveButton>

                                      </Card.Header.Title>
                                  </Card.Header>
                                  <a  target="_blank" href={recipe.url}>View Recipe</a>

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



 
