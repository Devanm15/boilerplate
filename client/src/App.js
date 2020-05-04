import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";
import "./App.css";
import "antd/dist/antd.css";
import MapContainer from "./Components/MapContainer.js";
import InfoContainer from "./Components/InfoContainer.js";
import Navbar from "./Components/NavBar.js";
import { Button } from "antd";
// import Plants from "./Plants.js";

function App(props) {
  const [showCultureMarkers, setShowCultureMarkers] = useState(false);
  const [culturesButtonClick, setCulturesButtonClick] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [cultureId, setCultureId] = useState();

  function handleCultureClick(e) {
    if (clickCount == 0) {
      setCulturesButtonClick(true);
      setShowCultureMarkers(true);
      setClickCount(1);
    } else if (clickCount == 1) {
      setCulturesButtonClick(false);
      setClickCount(0);
    }
  }

  function handleMouseLeave(e) {
    if (culturesButtonClick == true) {
    }
    if (culturesButtonClick == false) {
      setShowCultureMarkers(false);
    }
  }
  function onCultureClick(cultureId) {
    setCultureId(cultureId);
    console.log(cultureId);
  }

  return (
    <div className="App">
      <Navbar />
      <div className="toggle-buttons">
        <Button>Discover Medicinal Plants</Button>
        <Button
          onMouseEnter={() => setShowCultureMarkers(true)}
          onMouseLeave={() => handleMouseLeave()}
          onClick={() => handleCultureClick()}
        >
          Discover Medicinal Cultures
        </Button>

        <Button>Discover Endangered Plant Species</Button>
      </div>

      <MapContainer
        showCultureMarkers={showCultureMarkers}
        cultureId={cultureId}
      />

      <InfoContainer
        showCultureComponent={culturesButtonClick}
        cultureClickHandler={onCultureClick}
      />
    </div>
  );
}

export default App;
