import React, { Component } from "react";
import {Card, Content, Container, Section, SubTitle, Icon} from 'reactbulma'


class Saves extends Component {

    constructor(props) {
        super(props)
        
    }


    render() {
        return (

            this.props.results.map(recipesaved => {
                                    return (
                                        <div>
                                           <a target="_blank" href={recipesaved.url}>
                                          <SubTitle>{recipesaved.recname}</SubTitle></a>
                                        </div>
                                    )
                                })
            )
    }
};
export default Saves;
