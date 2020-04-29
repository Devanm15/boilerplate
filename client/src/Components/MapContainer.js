import React, { useEffect, useState, Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import Map from "./Map.js";
import { Button } from "antd";
import Cultures from "./Cultures.js";

function MapContainer(props) {
  const [cultures, setCultures] = useState();
  const [showCultureMarkers] = useState();

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

  return (
    <div className="Map-Container">
      <Map
        center={{
          lat: 30,
          lng: 0
        }}
        height="100vh"
        cultures={cultures}
        showCultureMarkers={props.showCultureMarkers}
      />
      <div className="cultures-component"></div>
    </div>
  );
}

export default MapContainer;
