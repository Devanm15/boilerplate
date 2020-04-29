import React, { useState, useEffect } from "react";
import axios from "axios";

function Cultures(props) {
  const [culturesObj, setCultures] = useState([]);

  useEffect(
    state => {
      axios.get("/api/index").then(response => {
        setCultures({
          culturesObj: response.data
        });
      });
    },
    [props]
  );

  function showCultureInfo() {
    let allCultures = culturesObj.culturesObj;
    if (allCultures) {
      return allCultures.map((culture, index) => {
        return (
          <ul>
            <h4 key={index}>{culture.name}</h4>
            {/* <p key={index}>{culture.description}</p> */}
          </ul>
        );
      });
    }
  }

  return (
    <div className="Culture-Component">
      <h1>Discover Cultures</h1>
      {showCultureInfo()}
      <div className="Culture-Info"></div>
      <div className="cultureInput">
        {/* <form>
            <label>
              Name:
              <input type="text" name="name" />
            </label>
            <input type="submit" value="Submit" />
            <label>
              Description:
              <input type="text" name="description:" />
            </label>
            <input type="submit" value="Submit" />
            <label>
              References:
              <input type="text" name="references:" />
            </label>
            <input type="submit" value="Submit" />
          </form> */}
      </div>
    </div>
  );
}

export default Cultures;
