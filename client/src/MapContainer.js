import React, { Component } from "react";
import axios from "axios";
import Map from "./Map.js";

class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: this.latitude,
      longitude: this.longitude
    };
  }

  componentWillUpdate() {
    this.fetchData();
  }

  fetchData = () => {
    axios.get("/api/index").then(response => {
      console.log(response.data[0].locations[0].latitude);
      this.setState({
        latitude: response.data[0].locations[0].latitude,
        longitude: response.data[0].locations[0].longitude
      });
    });
  };

  render() {
    return (
      <Map
        center={{
          lat: 18,
          lng: 15
        }}
        height="70vh"
        zoom={2}
        showlongitude={this.state.longitude}
      />
    );
  }
}

export default MapContainer;
