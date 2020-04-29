import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";
import "./App.css";
import "antd/dist/antd.css";
import Cultures from "./Components/Cultures.js";
import Locations from "./Components/Locations.js";
import MapContainer from "./Components/MapContainer.js";
import InfoContainer from "./Components/InfoContainer.js";
import Navbar from "./Components/NavBar.js";
import { Button } from "antd";
// import Plants from "./Plants.js";

function App(props) {
  const [showCultureMarkers, setShowCultureMarkers] = useState(false);
  const [CulturesButtonClick, setCulturesButtonClick] = useState(false);

  return (
    <div className="App">
      <Router>
        {/* <Route path="/cultures" component={Cultures}></Route> */}
      </Router>
      {/* <Locations /> */}
      <Navbar />
      <div className="toggle-buttons">
        <Button>Discover Medicinal Plants</Button>
        <Button
          onMouseEnter={() => setShowCultureMarkers(true)}
          onMouseLeave={() => setShowCultureMarkers(false)}
          onClick={() => setCulturesButtonClick(true)}
        >
          Discover Medicinal Cultures
        </Button>

        <Button onClick={() => setCulturesButtonClick(false)}>
          Discover Endangered Plant Species
        </Button>
      </div>

      <MapContainer showCultureMarkers={showCultureMarkers} />

      <InfoContainer showCultureComponent={CulturesButtonClick} />

      {/* <Plants /> */}
    </div>
  );
}

export default App;
