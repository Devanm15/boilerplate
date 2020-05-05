import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";
import "./App.css";
import "antd/dist/antd.css";
import MapContainer from "./Components/MapContainer.js";
import InfoContainer from "./Components/InfoContainer.js";
import Navbar from "./Components/NavBar.js";
import { Button } from "antd";

function App(props) {
  const [cultures, setCultures] = useState([]);
  const [showCultureMarkers, setShowCultureMarkers] = useState(false);
  const [culturesButtonClick, setCulturesButtonClick] = useState(false);
  const [formButtonClick, setFormButtonClick] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [cultureId, setCultureId] = useState();

  useEffect(
    state => {
      axios.get("/api/index").then(response => {
        setCultures({
          cultures: response.data
        });
      });
    },
    [props]
  );

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
  function handleFormClick(e) {
    if (clickCount == 0) {
      setFormButtonClick(true);
      setClickCount(1);
    } else if (clickCount == 1) {
      setFormButtonClick(false);
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
        <Button onClick={() => handleFormClick()}>Add to the App!</Button>
      </div>
      <MapContainer
        showCultureMarkers={showCultureMarkers}
        cultureId={cultureId}
        cultures={cultures}
      />

      <InfoContainer
        showCultureComponent={culturesButtonClick}
        showFormComponent={formButtonClick}
        cultureClickHandler={onCultureClick}
      />
    </div>
  );
}

export default App;
