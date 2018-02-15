import React, { Component } from "react";
import {Card, Content, Container, Section, SubTitle} from 'reactbulma'


class Posts extends Component {

    constructor(props) {
        super(props)
        
    }


    render() {
        return (

            this.props.results.map(recipeposted => {
                                    return (
                                        <div>
                                           <a href={recipeposted.link}> <SubTitle>{recipeposted.title}</SubTitle></a>
                                        </div>
                                    )
                                })
            )
    }
};
export default Posts;