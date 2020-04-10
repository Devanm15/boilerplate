import React, { Component } from "react";
import axios from "axios";

class Locations extends Component {
  state = {
    locations: []
  };

  componentDidMount() {
    axios.get("/api/index/").then(response => {});
  }

  render() {
    return <div></div>;
  }
}

export default Locations;
