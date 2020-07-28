import React, { useEffect, useState, Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import Cultures from "./Cultures.js";
import InputForm from "./Form.js";
import Admin from "./AdminDashboard.js";

function infoContainer(props) {
  return (
    <div className="Info-Container">
      {props.showCultureComponent && (
        <Cultures
          onClick={props.cultureClickHandler}
          cultures={props.cultures}
        />
      )}
      {props.showFormComponent && (
        <InputForm
          onClick={props.FormClickHandler}
          loggedInStatus={props.loggedInStatus}
          cultures={props.cultures}
          onClick={props.cultureClickHandler}
          radioClicked={props.radioClicked}
          locationRadioClicked={props.locationRadioClicked}
          newLatitude={props.newLatitude}
          newLongitude={props.newLongitude}
        />
      )}
      {props.showAdminComponent && (
        <Admin currentCultures={props.cultures.cultures} />
      )}
    </div>
  );
}

export default infoContainer;
