import React from "react";
import {Card, Content, Container} from 'reactbulma'


class Profile extends React.Component {

    render() {
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
