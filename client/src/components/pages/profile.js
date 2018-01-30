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
// const Profile = () =>
//   <div>
//     <h1>Profile Page</h1>
//     <p>
//       Nunc pharetra finibus est at efficitur. Praesent sed congue diam. Integer
//       gravida dui mauris, ut interdum nunc egestas sed. Aenean sed mollis diam.
//       Nunc aliquet risus ac finibus porta. Nam quis arcu non lectus tincidunt
//       fermentum. Suspendisse aliquet orci porta quam semper imperdiet. Praesent
//       euismod mi justo, faucibus scelerisque risus cursus in. Sed rhoncus mollis
//       diam, sit amet facilisis lectus blandit at.
//     </p>
//   </div>;

export default Profile;
