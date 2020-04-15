import React, { useEffect, useState, setState } from "react";
import axios from "axios";
import Map from "./Map.js";

function MapContainer(props) {
  const [cultures, setCultures] = useState();

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
    <Map
      center={{
        lat: 18,
        lng: 15
      }}
      height="70vh"
      zoom={2}
      cultures={cultures}
    />
  );
}

export default MapContainer;
