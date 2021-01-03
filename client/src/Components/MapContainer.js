import React, { useState, useEffect } from "react";
import Map from "./Map.js";

function MapContainer(props) {
  const [latitude, setLatitude] = useState(30);
  const [longitude, setLongitude] = useState(0);
  const [zoom, setZoom] = useState(1.5);

  function isolateMarkers() {
    let allCultures = props.cultures.cultures;
    if (allCultures) {
      allCultures.map(culture => {
        console.log(culture);
        if (
          culture.id !== Number(props.cultureId) &&
          latitude == culture.locations[0].latitude
        ) {
          setLatitude(30);
          setLongitude(0);
          setZoom(1.5);
        }
        if (
          culture.id === Number(props.cultureId) &&
          latitude !== culture.locations[0].latitude
        ) {
          setLatitude(culture.locations[0].latitude);
          setLongitude(culture.locations[0].longitude);
          setZoom(5);
        }
      });
    }
  }

  return (
    <div className="Map-Container">
      <Map
        center={{
          lat: latitude,
          lng: longitude
        }}
        zoom={zoom}
        height="100vh"
        cultures={props.cultures}
        showCultureMarkers={props.showCultureMarkers}
        cultureId={props.cultureId}
        showLocateMarker={props.showLocateMarker}
        getNewPosition={props.getNewPosition}
        newLatitude={props.newLatitude}
        newLongitude={props.newLongitude}
      />
      {isolateMarkers()}

      <div className="cultures-component"></div>
    </div>
  );
}

export default MapContainer;
