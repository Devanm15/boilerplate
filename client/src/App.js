import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";
import "./App.css";
import "antd/dist/antd.css";
import { Menu, Row, Button } from "antd";
import Cultures from "./Cultures.js";
import Locations from "./Locations.js";
import MapContainer from "./MapContainer.js";
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
        <div className="Menu">
          <Row>
            <h1>Earth Medicine App</h1>
            <Menu
              onClick={this.handleClick}
              selectedKeys={[this.state.current]}
              mode="horizontal"
            >
              <Menu.Item key="login">Login | Register</Menu.Item>
              {/* <Menu.Item key="app" disabled></Menu.Item> */}
            </Menu>
          </Row>
        </div>

        {/* <Locations /> */}
        <MapContainer />

        {/* <Plants /> */}
      </div>
    );
  }
}

export default App;
