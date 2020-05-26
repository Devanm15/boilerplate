import React, { useState, useEffect } from "react";
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch
} from "antd";
import axios from "axios";

function InputForm(props) {
  const [cultureNameList, setCultureNameList] = useState([]);
  const [activeSuggestion, setActiveSuggestion] = useState(0);
  const [filteredSuggestions, setFilteredSuggestion] = useState([]);
  const [showNames, setShowNames] = useState(false);
  const [userInput, setUserInput] = useState("");

  function culturePlantSelect(e) {
    let newCultureList = [];
    if (e.target.value === "Cultures") {
      axios.get("/api/index").then(response => {
        response.data.map(cultures => {
          newCultureList.push((name = cultures.name));
        });
        setCultureNameList(newCultureList);
      });
      if (e.target.value === "Plants") {
      }
    }
  }

  function handleNameInput(e) {
    const userInput = e.currentTarget.value;
    const suggestions = cultureNameList;

    setFilteredSuggestion(
      suggestions.filter(
        cultureName =>
          cultureName.toLowerCase().indexOf(userInput.toLowerCase()) > -1
      )
    );
    setActiveSuggestion(0);
    setShowNames(true);
    setUserInput(e.currentTarget.value);
  }

  function onClick(e) {
    setActiveSuggestion(0);
    setFilteredSuggestion([]);
    setShowNames(false);
    setUserInput(e.currentTarget.innerText);
  }

  function onKeyDown(e) {
    setActiveSuggestion(0);
    setFilteredSuggestion(filteredSuggestions);

    if (e.keyCode === 13) {
      setActiveSuggestion(0);
      setShowNames(false);
      setUserInput(filteredSuggestions[activeSuggestion]);
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
  function handleSourceInput(e) {
    console.log(e.target.value);
  }
  let suggestionsListComponent;
  if (showNames && userInput) {
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
          <em>No suggestions, you're on your own!</em>
        </div>
      );
    }
  }

  return (
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
              value={userInput}
            />
            {suggestionsListComponent}
          </Form.Item>
          <Form.Item label="Description">
            <textarea onChange={handleDescriptionInput} />
          </Form.Item>
          <Form.Item label="Location">
            <Select></Select>
          </Form.Item>
          <Form.Item label="DatePicker">
            <DatePicker />
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
  );
}

export default InputForm;
