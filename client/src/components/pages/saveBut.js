import React, { Component } from "react";


class SaveButton extends Component {

    constructor(props) {
        super(props)
        this.state={
            clicked: 'false',
            text: 'Save?'
        }
    }

    //let clicked = this.state.clicked;

    render() {

        return (
          <div>
            <button className={this.state.clicked} onClick={this.onClick}>{this.state.text}</button>
            </div>

        )
    }


    onClick = event => {
    	  if(this.state.clicked == 'true'){
      	    this.setState({ 
      		      clicked: 'false',
                text: 'Save?'
      	    });
            console.log(this.state.clicked)
        }
        else if (this.state.clicked =='false'){
      	    this.setState({
        	      clicked: 'true',
                text: 'Unsave?'
      	    });
            console.log(this.state.clicked)
        }
        else undefined;
    }
};
export default SaveButton;


