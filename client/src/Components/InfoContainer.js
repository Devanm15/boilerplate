import React, { useEffect, useState, Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import Cultures from "./Cultures.js";

function infoContainer(props) {
  return (
    <div className="Info-Container">
      {props.showCultureComponent && <Cultures />}
    </div>
  );
}

export default infoContainer;
