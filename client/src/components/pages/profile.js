import React from "react";
import {Card, Content, Container, Section} from 'reactbulma'

const leftPanelStyle = {
    marginBottom: "1.5%",
    display:"flex",
    flexWrap:"wrap",
    justifyContent:"center"
};

const cardSpacing = {
    marginBottom: "4%"
};


class Profile extends React.Component {

    render() {
        return (
            <div style={leftPanelStyle}>

                {/*left panel*/}
                <Section style={{display:"flex", flexDirection:"column", width:"30%"}} >

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
                <Section style={{width:"50%", height:"70%"}}>
                    <Card>
                        <Card.Header>
                            <Card.Header.Title >
                                Latest interests
                            </Card.Header.Title>
                        </Card.Header>
                        <Card.Content>
                            <Content>
                                Nothing searched yet.
                            </Content>
                        </Card.Content>
                    </Card>
                </Section>
            </div>
        )
    }



}


export default Profile;
