import React, { useEffect, useState, Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import Cultures from "./Cultures.js";
import InputForm from "./Form.js";

function infoContainer(props) {
  return (
    <div className="Info-Container">
      {props.showCultureComponent && (
        <Cultures onClick={props.cultureClickHandler} />
      )}
      {props.showFormComponent && (
        <InputForm
          onClick={props.FormClickHandler}
          loggedInStatus={props.loggedInStatus}
        />
      )}
    </div>
  );
}

export default infoContainer;
