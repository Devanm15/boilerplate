import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import "antd/dist/antd.css";
import { Menu, Row, Modal } from "antd";
import User from "./User.js";

function NavBar(props) {
  const [show, setModal] = useState(false);
  const [login, setShowLogin] = useState(false);

  useEffect(state => {
    {
      if (props.loggedInStatus === "Logged In") {
        setShowLogin(false);
      } else if (props.loggedInStatus === "Not Logged In") {
        setShowLogin(true);
      }
    }
  });
  function showModal() {
    setModal(true);
  }
  function handleCancel() {
    setModal(false);
  }
  function handleOk() {
    setModal(false);
  }

  function handleSuccessfulAuth(data) {
    props.handleLogin(data);
    setModal(false);
  }

  function handleLogoutClick() {
    axios
      .delete("http://localhost:3000/api/logout", { withCredentials: true })
      .then(response => {
        props.handleLogout();
      })
      .catch(error => {
        console.log("logout error", error);
      });
  }

  return (
    <div className="Menu">
      <Row>
        <h1>Earth Medicine App</h1>
        <Menu mode="horizontal">
          {login && (
            <Menu.Item key="login" onClick={showModal}>
              Login | Register
            </Menu.Item>
          )}
          {!login && (
            <Menu.Item key="logout" onClick={handleLogoutClick}>
              Logout
            </Menu.Item>
          )}
        </Menu>
      </Row>
      <Modal
        visible={show}
        onCancel={handleCancel}
        onOk={handleOk}
        destroyOnClose={true}
      >
        {<User handleSuccessfulAuth={handleSuccessfulAuth} />}
      </Modal>
      <h2 classname="login-status">{props.loggedInStatus} as</h2>
      <h2 className="nav-username">{props.username}</h2>
    </div>
  );
}

export default NavBar;
