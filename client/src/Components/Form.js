import React, { useState, useEffect } from "react";
import { Form, Input, Button, Radio, DatePicker } from "antd";
import { useForm } from "react-hook-form";
import axios from "axios";

function InputForm(props) {
  const [cultureLatitude, setCultureLatitude] = useState();
  const [cultureLongitude, setCultureLongitude] = useState();
  const [cultureId, setCultureId] = useState();
  const [cultureNameList, setCultureNameList] = useState([]);
  const [activeSuggestion, setActiveSuggestion] = useState(0);
  const [filteredSuggestions, setFilteredSuggestion] = useState([]);
  const [showNames, setShowNames] = useState(false);
  const [cultureNameInput, setCultureNameInput] = useState("");
  const [sourceInfo, setSourceInfo] = useState("");
  const [description, setDescription] = useState("");
  const [startYear, setStartYear] = useState();
  const [lastYear, setLastYear] = useState();
  const { RangePicker } = DatePicker;
  const { handleSubmit, errors } = useForm();
  const [form] = Form.useForm();

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

  function handleDescriptionInput(e) {
    setDescription(e.target.value);
  }

  useEffect(function handleLocationInput() {
    props.cultures.cultures.map(cultures => {
      if (cultureNameInput == cultures.name) {
        props.onClick(cultures.id);
        setCultureLatitude(cultures.locations[0].latitude);
        setCultureLongitude(cultures.locations[0].longitude);
        setCultureId(cultures.id);
      }
    });
  });
  function radioClicked(e) {
    if (e.target.value == "suggest-map") {
      props.radioClicked(true);
      props.locationRadioClicked(false);
    } else if (e.target.value == "location-coordinates") {
      props.locationRadioClicked(true);
      props.radioClicked(false);
    }
  }

  function handleRangePicker(e) {
    setStartYear(e[0]._d.getFullYear());
    setLastYear(e[1]._d.getFullYear());
  }

  function handleSourceInput(e) {
    setSourceInfo(e.target.value);
  }

  function onSubmit() {
    axios
      .post("/api/culture_drafts", {
        culture_draft: {
          name: cultureNameInput,
          description: description,
          start_date: startYear,
          end_date: lastYear,
          source: sourceInfo,
          latitude: props.newLatitude,
          longitude: props.newLongitude,
          approved: false
        }
      })
      .then(response => {
        console.log(response);
      });
  }

  function handleChange(event) {
    if (event.target.value == "suggest-map") {
    }
    if (event.target.value == "location-coordinates") {
    }
  }

  return (
    <div className="contribution-form">
      <h1>Contribute information to the App:</h1>
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
          form={form}
          onSubmit={handleSubmit(onSubmit)}
        >
          <h3>Which databse would you like to contribute to?</h3>
          <Form.Item label="Contribute To:">
            <Radio.Group onChange={culturePlantSelect}>
              <Radio.Button value="Cultures">Cultures</Radio.Button>
              <Radio.Button value="Plants">Plants</Radio.Button>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="Name">
            <Input
              type="text"
              onChange={handleChange}
              onInput={handleNameInput}
              onKeyDown={onKeyDown}
              value={cultureNameInput}
              required={true}
            />

            {suggestionsListComponent}
          </Form.Item>
          <Form.Item label="Description">
            <textarea
              className="ant-input"
              type="text"
              onChange={handleDescriptionInput}
              maxLength={140}
            />
          </Form.Item>
          <Form.Item label="Location" required>
            <Radio.Group required={true} onChange={radioClicked}>
              {cultureLatitude && (
                <div className="location-display">
                  <p>
                    <Radio
                      value="location-coordinates"
                      onChange={handleChange}
                    />
                    These are the coordinates we have saved in the database does
                    this look right to you?
                  </p>
                  <p>Latitude:{cultureLatitude}</p>
                  <p>Longitude:{cultureLongitude}</p>
                </div>
              )}
              <div>
                <Radio value="suggest-map" onChange={handleChange} />
                Click here to select the location on the map:
                <p>Latitude:{props.newLatitude}</p>
                <p>Longitude:{props.newLongitude}</p>
              </div>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="DatePicker">
            <h3>
              Picking a date or Range is optional, if the information is current
              you can leave this blank
            </h3>
            <RangePicker picker="year" onChange={handleRangePicker} />
          </Form.Item>
          <Form.Item label="Sources">
            <Input onChange={handleSourceInput} required={true} />
          </Form.Item>
          <Button type="primary" htmlType="submit" onClick={onSubmit}>
            Submit
          </Button>
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
  );
}

export default InputForm;
