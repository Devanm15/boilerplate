import React, { useEffect, useState, setState } from "react";
import axios from "axios";

function Plants(props) {
  //   const [cultures, setCultures] = useState();

  useEffect(state => {
    axios
      .get("https://api.gbif.org/v1/occurrence/search?year=1800,1899")
      .then(response => {
        console.log(response.data.results[0].country);
        console.log(response.data.results[0].family);
      });
  });

  return <h1>"hello"</h1>;
}

export default Plants;
