import React from "react";
import {Card, Content, Container} from 'reactbulma'
import API from "../../api/API.js";


class Profile extends React.Component {
    
    State = {
        results: ""
    };


    findUserRestaurants = (id) => {
        API.getrecentRest(id)
            .then(res => {
                console.log(res)
            })
            .catch(err => console.log(err));
    }


    findUserRecipes = (id) => {
        API.getrecentRecs(id)
            .then(res => {
                console.log(res)
            })
            .catch(err => console.log(err));
    }


    findUserRecipePost = (id) => {
        API.getPostedRecipes(id)
            .then(res => {
                console.log(res)
            })
            .catch(err => console.log(err));
    }

    render() {
        let userid = localStorage.getItem('id')
        this.findUserRestaurants(userid)
        this.findUserRecipes(userid)
        this.findUserRecipePost(userid)

        return (
            <div style={{display:"flex", flexWrap:"wrap", justifyContent:"center"}}>

                {/*left panel*/}
                <Container style={{display:"flex", flexDirection:"column", width:"30%"}} >

                    <Card >
                        <Card.Header>
                            <Card.Header.Title>
                                Component
                            </Card.Header.Title>
                        </Card.Header>
                        <Card.Content>
                            <Content>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
                            </Content>
                        </Card.Content>
                    </Card>

                    <Card>
                        <Card.Header>
                            <Card.Header.Title>
                                Component
                            </Card.Header.Title>
                        </Card.Header>
                        <Card.Content>
                            <Content>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
                            </Content>
                        </Card.Content>
                    </Card>

                    <Card>
                        <Card.Header>
                            <Card.Header.Title>
                                Component
                            </Card.Header.Title>
                        </Card.Header>
                        <Card.Content>
                            <Content>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
                            </Content>
                        </Card.Content>
                    </Card>

                    <Card>
                        <Card.Header>
                            <Card.Header.Title>
                                Component
                            </Card.Header.Title>
                        </Card.Header>
                        <Card.Content>
                            <Content>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
                            </Content>
                        </Card.Content>
                    </Card>

                </Container>


                {/*right panel*/}

                    <Card>
                        <Card.Header>
                            <Card.Header.Title>
                                Component
                            </Card.Header.Title>
                        </Card.Header>
                        <Card.Content>
                            <Content>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
                            </Content>
                        </Card.Content>
                    </Card>
            </div>
        )
    }

}


export default Profile;
