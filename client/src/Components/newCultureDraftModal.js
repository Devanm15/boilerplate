import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Input, Form } from "antd";

function newCultureDraftModal(props) {
  const [newCultureDraft, setNewCultureDraft] = useState({
    name: "",
    description: "",
    latitude: "",
    longitude: "",
    start_date: "",
    end_date: "",
    source: ""
  });
  const [correspondingCulture, setCorrespondingCulture] = useState(
    props.cultureDraftCultures[props.currentCultureDraft.name]
  );
  const [currentCultureLocation, setCurrentCultureLocaton] = useState(
    props.currentCultureDraft.latitude +
      "," +
      props.currentCultureDraft.longitude
  );
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();

  const [completeCultureDraft, setCompleteCultureDraft] = useState({
    name: "",
    description: "",
    location: "",
    start_date: "",
    end_date: "",
    source: ""
  });

  const { TextArea } = Input;

  function formSubmit(event) {
    event.preventDefault();
    if (correspondingCulture) {
      var cultureDataApproved = new FormData(event.target);
      for (var pair of cultureDataApproved.entries()) {
        console.log("pair", pair[0] + ", " + pair[1]);
      }
      console.log("corresponding", correspondingCulture);
      axios
        .put(`/api/cultures/${correspondingCulture.id}`, cultureDataApproved)
        .then(response => {
          console.log("this is the response", response);
        });
    }
    console.log("newCulture", newCultureDraft);
  }
  function onChange(e) {
    setNewCultureDraft({ [e.target.name]: e.target.value });
    console.log("onchange", e.target);
  }
  function onCompleteformChange(e) {
    var regExp = /\[([^)]+)\]/;
    let stateCultureInputName = regExp.exec(e.target.name);
    setCompleteCultureDraft({
      ...completeCultureDraft,
      [stateCultureInputName[1]]: e.target.value
    });

    console.log("onchange", e.target);
  }

  function approve(e) {
    e.preventDefault();
    axios.put(`/api/culture_drafts/${props.currentCultureDraft.id}`, {
      approved: true
    });

    var cultureDraftApproved = new FormData(e.target);
    for (var pair of cultureDraftApproved.entries()) {
      const key = pair[0];
      pair.forEach(value => {
        if (correspondingCulture[key] != null) {
          setCompleteCultureDraft(completeCultureDraft => ({
            ...completeCultureDraft,
            [key]: correspondingCulture[key] + ", " + value
          }));
        } else {
          setCompleteCultureDraft(completeCultureDraft => ({
            ...completeCultureDraft,
            [key]: value
          }));
        }
      });
    }
  }

  // function display_location() {
  //   console.log("locations", correspondingCulture);
  //   var correspondingCultureLocations = correspondingCulture.locations.map(
  //     location => {
  //       setLatitude(location.latitude);
  //       setLongitude(location.longitude);
  //     }
  //   );
  //   return correspondingCultureLocations;
  // }

  function showCultureDrafts() {
    return (
      <div className="CultureDraftBox">
        <div className="cultureDraft newCultureInfo">
          <h3>New Culture Information</h3>
          <form name="form" onSubmit={approve}>
            <Form.Item label="Name" className="newCultureEntry">
              <Input
                className="Name"
                name="name"
                defaultValue={props.currentCultureDraft.name}
                onChange={onChange}
              ></Input>
            </Form.Item>

            <Form.Item label="Description" className="newCultureEntry">
              <TextArea
                className="culture-draft-description"
                type="text"
                name="description"
                defaultValue={props.currentCultureDraft.description}
                onChange={onChange}
              ></TextArea>
            </Form.Item>

            <Form.Item label="Location" className="newCultureEntry">
              <Input
                className="Location"
                name="location"
                defaultValue={currentCultureLocation}
                onChange={onChange}
              ></Input>
            </Form.Item>

            <Form.Item label="Start_date" className="newCultureEntry">
              <Input
                className="Start_date"
                name="start_date"
                defaultValue={props.currentCultureDraft.start_date}
                onChange={onChange}
              ></Input>
            </Form.Item>

            <Form.Item label="End_date" className="newCultureEntry">
              <Input
                className="End_date"
                name="end_date"
                defaultValue={props.currentCultureDraft.end_date}
                onChange={onChange}
              ></Input>
            </Form.Item>

            <Form.Item label="Source" className="newCultureEntry">
              <Input
                className="Source"
                name="source"
                defaultValue={props.currentCultureDraft.source}
                onChange={onChange}
              ></Input>
            </Form.Item>

            <button>Approve</button>
          </form>
        </div>

        <div className="cultureDraft existingCultureData">
          {/* {!correspondingCulture ? ( */}
          <h3 className="oldCultureInfo">
            This is the first draft for this culture!
          </h3>
          {/* ) : ( */}
          <div>
            <h3 className="oldCultureInfo">Existing Culture Information</h3>
            {/* )} */}
            <form onSubmit={formSubmit} name="form">
              <Form.Item label="Name" className="newCultureEntry">
                <Input
                  className="Name"
                  type="text"
                  name="culture[name]"
                  value={completeCultureDraft.name}
                  onChange={onCompleteformChange}
                ></Input>
              </Form.Item>

              <Form.Item label="Description" className="newCultureEntry">
                <TextArea
                  className="culture-draft-description"
                  type="text"
                  name="culture[description]"
                  value={completeCultureDraft.description}
                  onChange={onCompleteformChange}
                ></TextArea>
              </Form.Item>

              <Form.Item label="Location" className="newCultureEntry">
                <div>{correspondingCulture.locations[0].latitude}</div>
                {/* <Input
                    className="Location"
                    name="culture[location]"
                    value={latitude}
                    onChange={onCompleteformChange}
                  ></Input>*/}
                {/* {console.log(correspondingCulture.locations[0].latitude)} */}
              </Form.Item>

              <Form.Item label="Start_date" className="newCultureEntry">
                <Input
                  className="Start_date"
                  name="culture[start_date]"
                  value={completeCultureDraft.start_date}
                  onChange={onCompleteformChange}
                ></Input>
              </Form.Item>

              <Form.Item label="End_date" className="newCultureEntry">
                <Input
                  className="End_date"
                  name="culture[end_date]"
                  value={completeCultureDraft.end_date}
                  onChange={onCompleteformChange}
                ></Input>
              </Form.Item>

              <Form.Item label="Source" className="newCultureEntry">
                <Input
                  className="Source"
                  name="culture[source]"
                  value={completeCultureDraft.source}
                  onChange={onCompleteformChange}
                ></Input>
              </Form.Item>

              <button type="submit">Submit</button>
            </form>
          </div>
          {/* )} */}
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

export default newCultureDraftModal;
