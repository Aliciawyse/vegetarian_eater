import API from "../../api/API.js"
import React, { Component } from "react";
import geolocation from 'geolocation'
 


class Findres extends Component {
  // Setting the component's initial state
  state = {
    location: "",
    results: []
  };


handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    let query = this.state.location
    event.preventDefault();
   if (!this.state.location){
      alert("Please enter a city and state");
    } else {
      console.log(query)
      API.getCity(query)
      .then(res => {
        console.log(res)
        this.setState({ results: res.data })
      })
      .catch(err => console.log(err));
    }
    this.setState({
      location: ""
    });
  };

searchCurLoc = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    geolocation.getCurrentPosition(function (err, position) {
  if (err) throw err
    else{
     //console.log(position)
    let geoloc = position.coords
      //console.log(geoloc)

      API.getRestaurants(geoloc)
      .then(res => {
        console.log(res)
        this.setState({ results: res.data })
      })
      .catch(err => console.log(err));
}
  })
  };




  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div>
        <form className="form">
          <input
            name="location"
            value={this.state.location}
            type="text"
            onChange={this.handleInputChange}
            placeholder="City, State"
          />
          <button onClick={this.handleFormSubmit}>Submit</button>
        </form>
        <p>OR</p>
        <button onClick={this.searchCurLoc}>Search Current Location</button>
      </div>
    );
  }
}

export default Findres;


 
