import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";
import "./App.css";
import "antd/dist/antd.css";
import { Menu, Row, Button } from "antd";
import Cultures from "./Components/Cultures.js";
import Locations from "./Components/Locations.js/index.js";
import MapContainer from "./Components/MapContainer.js/index.js";
import InfoContainer from "./Components/InfoContainer.js/index.js";
import Navbar from "./Components/NavBar.js/index.js";
// import Plants from "./Plants.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: []
    };
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Route path="/cultures" component={Cultures}></Route>
        </Router>
        {/* <Locations /> */}
        <MapContainer />
        <InfoContainer />

        {/* <Plants /> */}
      </div>
    );
  }
}

export default App;
