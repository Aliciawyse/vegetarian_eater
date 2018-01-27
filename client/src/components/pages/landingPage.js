import React from "react";
import { Link } from 'react-router-dom'
import $ from "jquery";
import * as firebase from "firebase";

//bulma ui
import { Section, Container, Title, SubTitle, Input, Button } from 'reactbulma'


class LandingPage extends React.Component {
    // Set the components initial state...

    render() {

        return (

            <div>
                <Section>
                    <Container>
                        <Title>Sign up!</Title>
                        <SubTitle>
                            A faster route to the best <strong>vegetarian food</strong>.
                        </SubTitle>
                    </Container>
                </Section>
                <Section>
                    <form onSubmit={this.handleSubmit}>
                    <Container>
                        <div>
                            <label htmlFor="medium">Enter email to create account</label>
                            <Input medium id="userEmail"/>
                        </div>
                        <div>
                            <label htmlFor="medium">Enter password</label>
                            <Input medium id="userPassword"/>
                        </div>
                    </Container>
                    <Container>
                        <div>
                            {/*<Button primary><Link to="/home">Next</Link></Button>*/}
                            <Button type="submit" primary>Next</Button>
                        </div>
                    </Container>
                    </form>
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

        firebase.auth().createUserWithEmailAndPassword(userEmail, userPassword)
            .then(function(user) {
                console.log("User created!!!");
                if (user) {
                    console.log("User has successfully signed in!!!" + JSON.stringify(user));
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