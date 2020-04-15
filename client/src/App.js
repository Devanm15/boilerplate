import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import "antd/dist/antd.css";
import { Menu, Row, Button } from "antd";
import Cultures from "./Cultures.js";
import Locations from "./Locations.js";
import MapContainer from "./MapContainer.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cultures: [],
      locations: []
    };
  }

  render() {
    return (
      <div className="App">
        <div className="Menu">
          <Row>
            <h1>Earth Medicine App</h1>
            <Menu
              onClick={this.handleClick}
              selectedKeys={[this.state.current]}
              mode="horizontal"
            >
              <Menu.Item key="mail">Login | Register</Menu.Item>
              <Menu.Item key="app" disabled></Menu.Item>
            </Menu>
          </Row>
        </div>
        <Cultures />
        <Locations />
        <MapContainer />
        <ul>
          <Button>Discover Medicinal Plants</Button>
        </ul>
        <ul>
          <Button>Discover Medicinal Culture</Button>
        </ul>
        <ul>
          <Button>Discover Endangered Plant Species</Button>
        </ul>
      </div>
    );
  }
}

export default App;
