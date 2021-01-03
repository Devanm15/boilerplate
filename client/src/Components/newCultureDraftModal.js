import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Input, Form } from "antd";

function NewCultureDraftModal(props) {
  const [newCultureDraft, setNewCultureDraft] = useState({
    name: "",
    description: "",
    latitude: "",
    longitude: "",
    start_date: "",
    end_date: "",
    source: ""
  });

  const [currentCultureLocation, setCurrentCultureLocaton] = useState(
    props.currentCultureDraft.latitude +
      "," +
      props.currentCultureDraft.longitude
  );

  const { TextArea } = Input;

  function formSubmit(event) {
    event.preventDefault();

    axios.put(`/api/culture_drafts/${props.currentCultureDraft.id}`, {
      approved: true
    });
    var cultureDataApproved = new FormData(event.target);
    for (var pair of cultureDataApproved.entries()) {
      console.log("pair", pair[0] + ", " + pair[1]);
      console.log("Tag", document.getElementsByTagName("*"));
    }

    axios.post("/api/cultures/", cultureDataApproved).then(response => {
      console.log("this is the response", response);
    });
  }

  function onChange(e) {
    setNewCultureDraft({ [e.target.name]: e.target.value });
    console.log("onchange", e.target);
  }

  function showCultureDrafts() {
    return (
      <div className="CultureDraftBox">
        <div className="cultureDraft newCulture">
          <h3 className="oldCultureInfo">
            This is the first draft for this culture!
          </h3>
          <h3>New Culture Information</h3>
          <form name="form" onSubmit={formSubmit}>
            <Form.Item label="Name" className="newCultureEntry">
              <Input
                className="Name"
                name="culture[name]"
                defaultValue={props.currentCultureDraft.name}
                onChange={onChange}
              ></Input>
            </Form.Item>

            <Form.Item label="Description" className="newCultureEntry">
              <TextArea
                className="culture-draft-description"
                type="text"
                name="culture[description]"
                defaultValue={props.currentCultureDraft.description}
                onChange={onChange}
              ></TextArea>
            </Form.Item>

            <Form.Item label="Location" className="newCultureEntry">
              <Input
                className="Latitude"
                name="culture[locations_attributes][0][latitude]"
                defaultValue={props.currentCultureDraft.latitude}
                onChange={onChange}
              ></Input>
              <Input
                className="Longitude"
                name="culture[locations_attributes][0][longitude]"
                defaultValue={props.currentCultureDraft.longitude}
                onChange={onChange}
              ></Input>
            </Form.Item>

            <Form.Item label="Start_date" className="newCultureEntry">
              <Input
                className="Start_date"
                name="culture[start_date]"
                defaultValue={props.currentCultureDraft.start_date}
                onChange={onChange}
              ></Input>
            </Form.Item>

            <Form.Item label="End_date" className="newCultureEntry">
              <Input
                className="End_date"
                name="culture[end_date]"
                defaultValue={props.currentCultureDraft.end_date}
                onChange={onChange}
              ></Input>
            </Form.Item>

            <Form.Item label="Source" className="newCultureEntry">
              <Input
                className="Source"
                name="culture[source]"
                defaultValue={props.currentCultureDraft.source}
                onChange={onChange}
              ></Input>
            </Form.Item>

            <button type="submit">Approve</button>
          </form>
        </div>
      </div>
    );
  }

  return (
    // display_location(),
    <div className="modal-container">
      <div className="newCultureDraft">{showCultureDrafts()}</div>
    </div>
  );
}

export default NewCultureDraftModal;
