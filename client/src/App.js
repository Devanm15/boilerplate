import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import "./App.css";
import "antd/dist/antd.css";
import MapContainer from "./Components/MapContainer.js";
import InfoContainer from "./Components/InfoContainer.js";
import Navbar from "./Components/NavBar.js";
import { Button } from "antd";

function App(props) {
  const [cultures, setCultures] = useState([]);
  const [showCultureMarkers, setShowCultureMarkers] = useState(false);
  const [showCultureComponent, setShowCultureComponent] = useState(false);
  const [showFormComponent, setShowFormComponent] = useState(false);
  const [cultureId, setCultureId] = useState();
  const [loggedInStatus, setLoggedInStatus] = useState("Not Logged In");
  const [loggedInUser, setUser] = useState();
  let userEmail = Cookies.get("email");

  useEffect(
    state => {
      axios.get("/api/index").then(response => {
        setCultures({
          cultures: response.data
        });
      });
      axios
        .get("http://localhost:3000/api/logged_in", {
          withCredentials: true
        })
        .then(response => {
          if (response.data.user.email === userEmail) {
            setLoggedInStatus("Logged In");
            setUser(response.data.user.username);
          } else {
            setLoggedInStatus("Not Logged In");
            setUser();
          }
        })
        .catch(error => {
          console.log("check login error", error);
        });
    },

    [props]
  );

  function handleLogin() {
    axios
      .get("http://localhost:3000/api/logged_in", {
        withCredentials: true
      })
      .then(response => {
        if (response.data.user.email === userEmail) {
          setLoggedInStatus("Logged In");
          setUser(response.data.user.username);
        }
      })
      .catch(error => {
        console.log("check login error", error);
      });
  }

  function handleLogout() {
    setLoggedInStatus("Not Logged In");
    setUser();
    Cookies.remove("email");
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
  }

  return (
    <div className="App">
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
        showCultureComponent={showCultureComponent}
        showFormComponent={showFormComponent}
        cultureClickHandler={onCultureClick}
        loggedInStatus={loggedInStatus}
        cultures={cultures}
      />
    </div>
  );
}

export default App;
