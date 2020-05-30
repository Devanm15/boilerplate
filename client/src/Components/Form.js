import React, { useState, useEffect } from "react";
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  DatePicker,
  Checkbox,
  InputNumber,
  TreeSelect,
  Switch
} from "antd";
import axios from "axios";

function InputForm(props) {
  const [cultureLatitude, setCultureLatitude] = useState();
  const [cultureLongitude, setCultureLongitude] = useState();
  const [cultureNameList, setCultureNameList] = useState([]);
  const [activeSuggestion, setActiveSuggestion] = useState(0);
  const [filteredSuggestions, setFilteredSuggestion] = useState([]);
  const [showNames, setShowNames] = useState(false);
  const [cultureNameInput, setCultureNameInput] = useState("");

  function culturePlantSelect(e) {
    let newCultureList = [];
    if (e.target.value === "Cultures") {
      props.cultures.cultures.map(cultures => {
        newCultureList.push((name = cultures.name));
      });
      setCultureNameList(newCultureList);
    }
    if (e.target.value === "Plants") {
    }
  }

  function handleNameInput(e) {
    const cultureNameInput = e.currentTarget.value;
    const suggestions = cultureNameList;

    setFilteredSuggestion(
      suggestions.filter(
        cultureName =>
          cultureName.toLowerCase().indexOf(cultureNameInput.toLowerCase()) > -1
      )
    );
    setActiveSuggestion(0);
    setShowNames(true);
    setCultureNameInput(e.currentTarget.value);
  }

  function onClick(e) {
    setActiveSuggestion(0);
    setFilteredSuggestion([]);
    setShowNames(false);
    setCultureNameInput(e.currentTarget.innerText);
  }

  function onKeyDown(e) {
    setActiveSuggestion(0);
    setFilteredSuggestion(filteredSuggestions);

    if (e.keyCode === 13) {
      setActiveSuggestion(0);
      setShowNames(false);
      setCultureNameInput(filteredSuggestions[activeSuggestion]);
    } else if (e.keyCode === 38) {
      if (activeSuggestion === 0) {
        return;
      }

      setActiveSuggestion(activeSuggestion - 1);
    } else if (e.keyCode === 40) {
      if (activeSuggestion - 1 === filteredSuggestions.length) {
        return;
      }

      setActiveSuggestion(activeSuggestion + 1);
    }
  }

  function handleDescriptionInput(e) {
    console.log(e.target.value);
  }

  useEffect(function handleLocationInput() {
    props.cultures.cultures.map(cultures => {
      if (cultureNameInput == cultures.name) {
        console.log(cultures);
        console.log(cultures.id);
        props.onClick(cultures.id);
        setCultureLatitude(cultures.locations[0].latitude);
        setCultureLongitude(cultures.locations[0].longitude);
      }
      [cultures.locations];
    });
  });
  function handleSourceInput(e) {
    console.log(e.target.value);
  }
  let suggestionsListComponent;
  if (showNames && cultureNameInput) {
    if (filteredSuggestions.length) {
      suggestionsListComponent = (
        <ul className="suggestions">
          {filteredSuggestions.map((suggestion, index) => {
            let className;
            if (index === activeSuggestion) {
              className = "suggestion-active";
            }

            return (
              <li className={className} key={suggestion} onClick={onClick}>
                {suggestion}
              </li>
            );
          })}
        </ul>
      );
    } else {
      suggestionsListComponent = (
        <div className="no-suggestions">
          <em>This is the first entry for this Culture!</em>
        </div>
      );
    }
  }

  return (
    console.log(cultureLatitude),
    (
      <div className="contribution-form">
        <h1>Contribute to the App</h1>
        {props.loggedInStatus === "Logged In" && (
          <Form
            labelCol={{
              span: 4
            }}
            wrapperCol={{
              span: 14
            }}
            layout="horizontal"
            initialValues={{
              size: "large"
            }}
          >
            <Form.Item label="Contribute To:">
              <Radio.Group onChange={culturePlantSelect}>
                <Radio.Button value="Cultures">Cultures</Radio.Button>
                <Radio.Button value="Plants">Plants</Radio.Button>
              </Radio.Group>
            </Form.Item>
            <Form.Item label="Name">
              <Input
                type="text"
                onChange={handleNameInput}
                onKeyDown={onKeyDown}
                value={cultureNameInput}
              />

              {suggestionsListComponent}
            </Form.Item>
            <Form.Item label="Description">
              <textarea
                className="ant-input"
                type="text"
                onChange={handleDescriptionInput}
              />
            </Form.Item>
            <Form.Item label="Location">
              {cultureLatitude && (
                <div className="location-display">
                  <p>
                    <Checkbox className="location-coordinates" checked={true} />
                    These are the coordinates we have saved in the database does
                    this look right to you?
                  </p>
                  <p>Latitude: {cultureLatitude}</p>
                  <p>Longitude:{cultureLongitude}</p>
                </div>
              )}
              <p>
                <Checkbox></Checkbox>Select here for a google maps generated
                list:
              </p>
              <Select></Select>
              <p>
                <Checkbox></Checkbox>Or Click here to select the location on the
                map:
              </p>
            </Form.Item>
            <Form.Item label="DatePicker">
              <DatePicker picker="year" />
            </Form.Item>
            <Form.Item label="Sources">
              <Input onChange={handleSourceInput} />
            </Form.Item>
            <Button value="Submit-Data">Submit</Button>
          </Form>
        )}
        {props.loggedInStatus === "Not Logged In" && (
          <div className="No-User">
            <h2>We would love your contributions!</h2>
            <p>
              If you would like to contribute to the Earth Medicine App, please
              register with us!
            </p>
          </div>
        )}
      </div>
    )
  );
}

export default InputForm;
