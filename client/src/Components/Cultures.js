import React, { useState, useEffect } from "react";
import { Modal, Button, Collapse } from "antd";
import "antd/dist/antd.css";
import axios from "axios";

function Cultures(props) {
  const [culturesObj, setCultures] = useState([]);
  const [cultureNameClick, setCultureNameClick] = useState([false]);
  const { Panel } = Collapse;

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

  function cultureMenu(key) {
    console.log(key);
    setCultureNameClick(true);
  }

  function showCulture() {
    let allCultures = culturesObj.culturesObj;
    if (allCultures) {
      return allCultures.map((culture, index) => {
        return (
          <ul key={index}>
            <Collapse onChange={cultureMenu}>
              <Panel header={culture.name} key={culture.id}>
                <Collapse>
                  <Panel header="Description" key={culture.id}>
                    <p>{culture.description}</p>
                  </Panel>
                </Collapse>
              </Panel>
            </Collapse>
          </ul>
        );
      });
    }
  }

  return (
    console.log(cultureNameClick),
    (
      <div className="Culture-Component">
        <h1>Discover Cultures</h1>
        {showCulture()}
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
    )
  );
}

export default Cultures;
