import React from "react";
import {Card, Content, Container, Section, SubTitle} from 'reactbulma'
import API from "../../api/API.js";

const leftPanelStyle = {
    marginBottom: "1.5%",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center"
};

const cardSpacing = {
    marginBottom: "4%"
};

const findUserRestaurants = (id) => {
    return API.getrecentRest(id)
        .then(res => {
            console.log(res)
            return res.data // unstringfy this before return
        })
        .catch(err => console.log(err));
};

class Profile extends React.Component {

    constructor(props) {
        super(props);
    }

/*<<<<<<< HEAD
    findUserRestaurants = (id) => {
        API.getrecentRest(id)
            .then(res => {
                console.log("recent restaurants",res)
=======*/
    componentWillMount() {
        let userid = localStorage.getItem('id');
        findUserRestaurants(userid).then((data) => {
            this.setState({
                restaurants: data.recentres.map((restaurant) => JSON.parse(restaurant.restaurantinfo))
            })
        });
    }

    findUserRecipes = (id) => {
        API.getrecentRecs(id)
            .then(res => {
                console.log("recent recipes",res)
            })
            .catch(err => console.log(err));
    }


    findUserRecipePost = (id) => {
        API.getPostedRecipes(id)
            .then(res => {  
                console.log("recipes posted",res)
            })
            .catch(err => console.log(err));
    }

    render() {
        let userid = localStorage.getItem('id')
        // this.findUserRestaurants(userid)
        // this.findUserRecipes(userid)
        // this.findUserRecipePost(userid)

        return (
            <div style={leftPanelStyle}>

                {/*left panel*/}
                <Section style={{display: "flex", flexDirection: "column", width: "30%"}}>

                    <Card style={cardSpacing}>
                        <Card.Header>
                            <Card.Header.Title>
                                User Profile
                            </Card.Header.Title>
                        </Card.Header>
                        <Card.Content>
                            <Content>
                                Member since:
                            </Content>
                        </Card.Content>
                    </Card>

                    <Card style={cardSpacing}>
                        <Card.Header>
                            <Card.Header.Title>
                                Recent restaurant searches
                            </Card.Header.Title>
                        </Card.Header>
                        {/*<Card.Content>*/}
                        {/*<Content>*/}
                        {/*Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.*/}
                        {/*</Content>*/}
                        {/*</Card.Content>*/}
                    </Card>

                    <Card style={cardSpacing}>
                        <Card.Header>
                            <Card.Header.Title>
                                Recent recipe searches
                            </Card.Header.Title>
                        </Card.Header>
                        {/*<Card.Content>*/}
                        {/*<Content>*/}
                        {/*Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.*/}
                        {/*</Content>*/}
                        {/*</Card.Content>*/}
                    </Card>
                </Section>


                {/*right panel*/}
                <Section style={{width: "50%", height: "70%"}}>
                    <Card>
                        <Card.Header>
                            <Card.Header.Title>
                                Latest interests
                            </Card.Header.Title>
                        </Card.Header>
                        <Card.Content>
                            <Content>

                                {this.state && this.state.restaurants && this.state.restaurants.map(restaurant => {
                                    return (
                                        <div>
                                            <SubTitle>{restaurant.name}</SubTitle>
                                        </div>
                                    )
                                })
                                }

                            </Content>
                        </Card.Content>
                    </Card>
                </Section>
            </div>
        )
    }

}


export default Profile;
