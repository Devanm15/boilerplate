import React, { useState, useEffect } from "react";
import { Modal, Button, Collapse } from "antd";
import "antd/dist/antd.css";
import axios from "axios";

function Cultures(props) {
  const [culturesObj, setCultures] = useState([]);
  const [culture] = useState();
  const [cultureKey, setCultureKey] = useState();
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
    setCultureKey(key);
    props.onClick(key);
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
    <div className="Culture-Component">
      <h1>Discover Cultures</h1>
      {showCulture()}
    </div>
  );
}

export default Cultures;
