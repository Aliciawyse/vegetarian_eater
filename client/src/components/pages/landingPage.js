import React from "react";
import { Link } from 'react-router-dom'
import $ from "jquery";
import API from "../../api/API.js"
import * as firebase from "firebase";

//bulma ui
import { Section, Container, Title, SubTitle, Input, Button, Card, Box, Hero} from 'reactbulma'


class LandingPage extends React.Component {
    // Set the components initial state...

    render() {

        return (

            <div style={{display:"flex", height:"100%"}}>

                <Section style={{height:"100vh", width:"50%", backgroundImage:"url(https://shk-images.s3.amazonaws.com/wp-content/uploads/2014/09/SHK-Veggie-Stuffed-Chow-Mein-4.jpg)", backgroundPosition:"center", backgroundRepeat:"None", backgroundSize:"cover", position:"relative"}}>

                    <Hero style={{position:"absolute", bottom:"40%", background:"rgba(255,255,255,0.9)", width:"75%"}}>
                        <Hero.Body >
                            <Container style={{width:"100%", textAlign:"center"}}>
                            <Title >
                                Vegetarian eater
                            </Title>
                            <SubTitle>
                                A Faster route to the best vegetarian food.
                            </SubTitle>
                            </Container>
                        </Hero.Body>
                    </Hero>

                </Section>

                <Section style={{width:"50%"}}>

                    <Container style={{width:"65%",bottom:"-30%", textAlign:"center"}}>
                        <form  onSubmit={this.handleSubmit}>

                        <div>
                            <h2>Enter email and password to create an account</h2>
                            <Input style={{marginTop:"2%", marginBottom:"2%"}} warning medium id="userEmail" placeholder="email address"/>
                        </div>
                        <div>

                            <Input style={{marginBottom:"2%"}} warning medium id="userPassword" placeholder="password"/>
                        </div>
                            <div>
                                {/*<Button primary><Link to="/home">Next</Link></Button>*/}
                                <Button  type="submit" primary>Next</Button>
                            </div>

                        </form>

                    </Container>

                </Section>
            </div>


        )
    }

    // Using an arrow function, our outer scope is maintained.
    // Used in the context of react, we maintain our outer scope which is our LandingPage component.

    handleSubmit = (e) => {
        e.preventDefault();
        //On click of submit button, grab user data and push to firebase.
        const userEmail = $("#userEmail").val().trim();
        const userPassword = $("#userPassword").val().trim();
        const push = this.props.history.push;
        const mongoUsers = [];

        firebase.auth().createUserWithEmailAndPassword(userEmail, userPassword)
            .then(function(user) {
                console.log("User created!!!");
                if (user) {
                    console.log("User has successfully signed in!!!" + JSON.stringify(user));
                    console.log(user.uid, user.email)
                    mongoUsers.push({
                    id: user.uid, 
                    email: user.email
                    })
                    console.log(mongoUsers)
                    localStorage.setItem('id', user.uid )


                     API.postMongoUser(mongoUsers)
                        .then(res => {
                        console.log(res)
                        }).catch(err => console.log(err))

                    push('/home', { user: 'Kendrick'}); // 2nd parameter is the state
                } else {
                    console.log("No user signed in...");
                }
            }).catch(function(error) {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("An error occurred creating the user: " + error.message);
        });
    }
}

export default LandingPage;