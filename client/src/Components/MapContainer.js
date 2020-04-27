import React, { useEffect, useState, Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import Map from "./Map.js";
import { Button } from "antd";
import Cultures from "./Cultures.js";

function MapContainer(props) {
  const [cultures, setCultures] = useState();
  const [showCultureMarkers, setShowCultureMarkers] = useState(false);
  const [isHidden, setVisibility] = useState(true);

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

  function onCulturesButtonClick() {
    setVisibility({ isHidden: false });
    console.log(isHidden);
    renderCulturesComponent();
  }

  function renderCulturesComponent() {
    return <Cultures />;
  }

  return (
    <div className="MapContainer">
      <Map
        center={{
          lat: 30,
          lng: 0
        }}
        height="100vh"
        zoom={0.0001}
        cultures={cultures}
        showCultureMarkers={showCultureMarkers}
      />
      <div className="cultures-component">
        {isHidden && renderCulturesComponent()}
      </div>
      <div className="toggle-buttons">
        <ul>
          <Button>Discover Medicinal Plants</Button>
        </ul>
        <ul>
          <Button
            onMouseEnter={() => setShowCultureMarkers(true)}
            onMouseLeave={() => setShowCultureMarkers(false)}
            onClick={() => onCulturesButtonClick()}
          >
            Discover Medicinal Cultures
          </Button>
        </ul>
        <ul>
          <Button>Discover Endangered Plant Species</Button>
        </ul>
      </div>
    </div>
  );
}

export default MapContainer;
