import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import "antd/dist/antd.css";
import { Menu, Row, Modal } from "antd";
import User from "./User.js";

function NavBar(props) {
  const [show, setModal] = useState(false);
  const [login, setShowLogin] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

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
    if (data.user.admin) {
      setIsAdmin(true);
    }
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
          {isAdmin && <Menu.Item key="Admin">Admin Dashboard</Menu.Item>}
        </Menu>
      </Row>
      <h2 className="login-status">{props.loggedInStatus}</h2>
      <h2 className="nav-username">{props.username}</h2>
      <Modal
        visible={show}
        onCancel={handleCancel}
        onOk={handleOk}
        destroyOnClose={true}
      >
        {<User handleSuccessfulAuth={handleSuccessfulAuth} />}
      </Modal>
    </div>
  );
}

export default NavBar;
