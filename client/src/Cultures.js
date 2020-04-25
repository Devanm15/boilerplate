import React, { useState, useEffect } from "react";
import axios from "axios";

function Cultures(props) {
  const [cultures, setCultures] = useState([]);

  useEffect(
    state => {
      axios.get("/api/index").then(response => {
        // console.log(response.data);
        setCultures({
          cultures: response.data
        });
      });
    },
    [props]
  );

  return (
    <div className="cultureInput">
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Cultures;
