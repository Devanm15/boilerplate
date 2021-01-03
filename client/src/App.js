import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";

import "./App.css";
import "antd/dist/antd.css";

import MapContainer from "./Components/MapContainer.js";
import InfoContainer from "./Components/InfoContainer.js";
import Navbar from "./Components/NavBar.js";
import Admin from "./Components/AdminDashboard.js";
import { Button } from "antd";

function App(props) {
  const [cultures, setCultures] = useState([]);
  const [showCultureMarkers, setShowCultureMarkers] = useState(false);
  const [showLocateMarker, setShowLocateMarker] = useState(false);
  const [showCultureComponent, setShowCultureComponent] = useState(false);
  const [showFormComponent, setShowFormComponent] = useState(false);
  const [showAdminComponent, setShowAdminComponent] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [cultureId, setCultureId] = useState();
  const [loggedInStatus, setLoggedInStatus] = useState("Not Logged In");
  const [loggedInUser, setUser] = useState();
  const [newLatitude, setNewLatitude] = useState(0);
  const [newLongitude, setNewLongitude] = useState(0);
  let userEmail = Cookies.get("email");

  useEffect(
    state => {
      axios.get("/api/index/").then(response => {
        setCultures({
          cultures: response.data
        });
      });
    },

    [props]
  );
  function checkLoginStatus() {
    axios
      .get("http://localhost:3000/api/logged_in", {
        withCredentials: true
      })
      .then(response => {
        if (response.data.logged_in && loggedInStatus === "Not Logged In") {
          setLoggedInStatus("Logged In");
          setUser(response.data.user.username);
          setIsAdmin(response.data.user.admin);
        } else if (!response.data.logged_in && loggedInStatus === "Logged In") {
          setLoggedInStatus("Not Logged In");
          setUser();
        }
      })
      .catch(error => {
        console.log("check login error", error);
      });
  }
  function handleLogin() {
    axios
      .get("http://localhost:3000/api/logged_in", {
        withCredentials: true
      })
      .then(response => {
        console.log(response.data);
        if (response.data.user.email === userEmail) {
          setLoggedInStatus("Logged In");
          setUser(response.data.user.username);
        }
      })
      .catch(error => {
        console.log("check login error", error);
      });
  }

  function handleLogout(data) {
    setLoggedInStatus("Not Logged In");
    setUser();
    setShowAdminComponent(false);
    Cookies.remove("email");
    setIsAdmin(false);
  }

  function adminLogin() {
    axios
      .get("http://localhost:3000/api/admin", {
        withCredentials: true
      })
      .then(response => {
        if (response.data.admin == true && showAdminComponent == false) {
          setShowAdminComponent(true);
        } else {
          setShowAdminComponent(false);
        }
      })
      .catch(error => {
        console.log("No admin", error);
      });
  }

  function handleCultureClick(e) {
    if (showCultureComponent === false) {
      setShowCultureComponent(true);
      setShowCultureMarkers(true);
      setShowFormComponent(false);
    } else {
      setShowCultureComponent(false);
    }
  }
  function handleFormClick(e) {
    setShowCultureComponent(false);
    if (showFormComponent === false) {
      setShowFormComponent(true);
    } else {
      setShowFormComponent(false);
      setShowLocateMarker(false);
      setShowCultureMarkers(false);
    }
  }

  function handleMouseLeave(e) {
    if (showCultureComponent == true) {
    }
    if (showCultureComponent == false) {
      setShowCultureMarkers(false);
    }
  }
  function onCultureClick(cultureId) {
    setCultureId(cultureId);
    setShowCultureMarkers(true);
  }

  function radioClicked(key) {
    if (key === true && showFormComponent === true) {
      setShowLocateMarker(true);
    }
  }

  function locationRadioClicked(key) {
    if (key === true && showFormComponent === true) {
      setShowLocateMarker(false);
    }
  }

  function getNewPosition(e) {
    if (e) {
      setNewLatitude(e.latLng.lat());
      setNewLongitude(e.latLng.lng());
    }
  }
  return (
    <div className="App">
      <Navbar
        loggedInStatus={loggedInStatus}
        handleLogin={handleLogin}
        handleLogout={handleLogout}
        username={loggedInUser}
        showAdminComponent={showAdminComponent}
        adminLogin={adminLogin}
        isAdmin={isAdmin}
      />
      <div className="toggle-buttons">
        <Button>Discover Medicinal Plants</Button>
        <Button
          onMouseEnter={() => setShowCultureMarkers(true)}
          onMouseLeave={() => handleMouseLeave()}
          onClick={() => handleCultureClick()}
        >
          Discover Medicinal Cultures
        </Button>

        <Button>Discover Endangered Plant Species</Button>
        <Button onClick={() => handleFormClick()}>Add to the App!</Button>
      </div>

      {showAdminComponent || (
        <div>
          <MapContainer
            showCultureMarkers={showCultureMarkers}
            showLocateMarker={showLocateMarker}
            cultureId={cultureId}
            cultures={cultures}
            getNewPosition={getNewPosition}
            newLatitude={newLatitude}
            newLongitude={newLongitude}
            showFormComponent={showFormComponent}
          />

          <InfoContainer
            showCultureComponent={showCultureComponent}
            showFormComponent={showFormComponent}
            showAdminComponent={showAdminComponent}
            cultureClickHandler={onCultureClick}
            radioClicked={radioClicked}
            locationRadioClicked={locationRadioClicked}
            loggedInStatus={loggedInStatus}
            cultures={cultures}
            newLatitude={newLatitude}
            newLongitude={newLongitude}
          />
        </div>
      )}
      {showAdminComponent && <Admin currentCultures={cultures.cultures} />}
      {checkLoginStatus()}
    </div>
  );
}

export default App;
