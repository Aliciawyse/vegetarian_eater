import React, { Component } from "react";
import API from "../../api/API.js";
import {Icon} from 'reactbulma'
import FontAwesome from 'react-fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

//import 'font-awesome/css/font-awesome.min.css';



class SaveButton extends Component {

    constructor(props) {
        super(props)
        this.state={
            clicked: false,
            value:'not saved',
            id:""
        }
    }


    componentWillReceiveProps(){
        this.setState({
            clicked: false,
            value:'not saved'
        })
    }

    render() {

        let id = this.props.id

        let childheart = null

        if (this.state.clicked == false){
            childheart = <div>
                <a onClick = {this.onClick} name = {this.state.clicked} id = {id} value= {this.state.value} >
                        <FontAwesomeIcon icon={['far', 'heart']}/>
                        </a>
                        </div>

        }
        else if (this.state.clicked == true){
            childheart = <div>
                <a onClick = {this.onClick} name = {this.state.clicked} id = {id} value= {this.state.value}  >
                        <FontAwesomeIcon icon="heart"/>
                        </a>
                        </div>
        }

        return (
            <div>
                {childheart}
            </div>
        )
    }

    onClick = event => {
        let id = this.props.id
    	  if(this.state.clicked == true){
      	    this.setState({ 
      		    clicked: false,
                value:'unsave'
      	    });
            API.savingRecipes('unsave',this.props.uid,this.props.id,this.props.url, this.props.image).then(response=>(console.log(response)))
        }
        else if (this.state.clicked ==false){
      	    this.setState({
        	    clicked: true,
                value:'save'
      	    });
            API.savingRecipes('save',this.props.uid,this.props.id, this.props.url, this.props.image).then(response=>(console.log(response)))
        }
        else undefined;
    }
};
export default SaveButton;


