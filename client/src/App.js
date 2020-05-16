import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import "antd/dist/antd.css";
import MapContainer from "./Components/MapContainer.js";
import InfoContainer from "./Components/InfoContainer.js";
import Navbar from "./Components/NavBar.js";
import { Button } from "antd";

function App(props) {
  const [cultures, setCultures] = useState([]);
  const [showCultureMarkers, setShowCultureMarkers] = useState(false);
  const [culturesButtonClick, setCulturesButtonClick] = useState(false);
  const [formButtonClick, setFormButtonClick] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [cultureId, setCultureId] = useState();
  const [loggedInStatus, setLoggedInStatus] = useState("Not Logged In");
  const [loggedInUser, setUser] = useState();

  useEffect(
    state => {
      axios.get("/api/index").then(response => {
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
    setLoggedInStatus("Logged In");
  }

  function handleLogout() {
    setLoggedInStatus("Not Logged In");
    setUser();
  }

  function handleCultureClick(e) {
    if (clickCount == 0) {
      setCulturesButtonClick(true);
      setShowCultureMarkers(true);
      setClickCount(1);
    } else if (clickCount == 1) {
      setCulturesButtonClick(false);
      setClickCount(0);
    }
  }
  function handleFormClick(e) {
    if (clickCount == 0) {
      setFormButtonClick(true);
      setClickCount(1);
    } else if (clickCount == 1) {
      setFormButtonClick(false);
      setClickCount(0);
    }
  }

  function handleMouseLeave(e) {
    if (culturesButtonClick == true) {
    }
    if (culturesButtonClick == false) {
      setShowCultureMarkers(false);
    }
  }
  function onCultureClick(cultureId) {
    setCultureId(cultureId);
  }

  return (
    <div className="App">
      {checkLoginStatus()}
      <Navbar
        loggedInStatus={loggedInStatus}
        handleLogin={handleLogin}
        handleLogout={handleLogout}
        username={loggedInUser}
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
      <MapContainer
        showCultureMarkers={showCultureMarkers}
        cultureId={cultureId}
        cultures={cultures}
      />

      <InfoContainer
        showCultureComponent={culturesButtonClick}
        showFormComponent={formButtonClick}
        cultureClickHandler={onCultureClick}
        loggedInStatus={loggedInStatus}
      />
    </div>
  );
}

export default App;
