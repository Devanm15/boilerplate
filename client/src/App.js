import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";

import "./App.css";
import "antd/dist/antd.css";

import MapContainer from "./Components/MapContainer.js";
import InfoContainer from "./Components/InfoContainer.js";
import Navbar from "./Components/NavBar.js";
import Admin from "./Components/AdminDashboard.js";
import UserDashboard from "./Components/UserDashboard.js";
import { Button } from "antd";

function App(props) {
  const [cultures, setCultures] = useState([]);
  const [showCultureMarkers, setShowCultureMarkers] = useState(false);
  const [showLocateMarker, setShowLocateMarker] = useState(false);
  const [showCultureComponent, setShowCultureComponent] = useState(false);
  const [showFormComponent, setShowFormComponent] = useState(false);
  const [showAdminComponent, setShowAdminComponent] = useState(false);
  const [showUserComponent, setShowUserComponent] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isUser, setIsUser] = useState(false);
  const [cultureId, setCultureId] = useState();
  const [loggedInStatus, setLoggedInStatus] = useState("Not Logged In");
  const [loggedInUser, setLoggedInUser] = useState();
  const [user, setUser] = useState();
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
        console.log(response);
        if (response.data.logged_in && loggedInStatus === "Not Logged In") {
          setLoggedInStatus("Logged In");
          setUser(response.data.user);
          setLoggedInUser(response.data.user.username);
          setIsUser(!response.data.user.admin);
          setIsAdmin(response.data.user.admin);
        } else if (!response.data.logged_in && loggedInStatus === "Logged In") {
          setLoggedInStatus("Not Logged In");
          setLoggedInUser();
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
          setLoggedInUser(response.data.user.username);
          setUser(response.data.user);
        }
      })
      .catch(error => {
        console.log("check login error", error);
      });
  }

  function handleLogout(data) {
    setLoggedInStatus("Not Logged In");
    setLoggedInUser();
    setUser();
    setShowAdminComponent(false);
    setShowUserComponent(false);
    Cookies.remove("email");
    setIsAdmin(false);
    setIsUser(false);
  }

  function userLogin() {
    setShowUserComponent(!showUserComponent);
  }

  function adminLogin() {
    axios
      .get("http://localhost:3000/api/admin", {
        withCredentials: true
      })
      .then(response => {
        console.log(response);
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
        showUserComponent={showUserComponent}
        adminLogin={adminLogin}
        userLogin={userLogin}
        isAdmin={isAdmin}
        isUser={isUser}
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
            showUserComponent={showUserComponent}
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
      {showUserComponent && (
        <UserDashboard
          isUser={isUser}
          user={user}
          isAdmin={isAdmin}
          loggedInUser={loggedInUser}
        />
      )}
      {checkLoginStatus()}
    </div>
  );
}

export default App;
