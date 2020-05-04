import React, { useEffect, useState, Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import Map from "./Map.js";
import { Button } from "antd";
import Cultures from "./Cultures.js";

function MapContainer(props) {
  const [cultures, setCultures] = useState([]);
  const [showCultureMarkers] = useState();
  const [latitude, setLatitude] = useState(30);
  const [longitude, setLongitude] = useState(0);
  const [zoom, setZoom] = useState(1.5);

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
  function isolateMarkers() {
    let allCultures = cultures.cultures;
    if (allCultures) {
      allCultures.map(culture => {
        if (
          culture.id === Number(props.cultureId) &&
          latitude !== culture.locations[0].latitude
        ) {
          setLatitude(culture.locations[0].latitude);
          setLongitude(culture.locations[0].longitude);
          setZoom(25);
        }
      });
    }
  }

  return (
    console.log(latitude),
    (
      <div className="Map-Container">
        <Map
          center={{
            lat: latitude,
            lng: longitude
          }}
          zoom={zoom}
          height="100vh"
          cultures={cultures}
          showCultureMarkers={props.showCultureMarkers}
          cultureId={props.cultureId}
        />
        {isolateMarkers()}
        <div className="cultures-component"></div>
      </div>
    )
  );
}

export default MapContainer;
