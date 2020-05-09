import React, { useEffect, useState, Component } from "react";
import { Redirect } from "react-router-dom";
import "antd/dist/antd.css";
import { Menu, Row, Modal } from "antd";
import User from "./User.js";

function NavBar(props) {
  const [show, setModal] = useState(false);

  function showModal() {
    setModal(true);
  }
  function handleCancel() {
    setModal(false);
  }
  function handleOk() {
    setModal(false);
  }
  return (
    <div className="Menu">
      <Row>
        <h1>Earth Medicine App</h1>
        <Menu mode="horizontal">
          <Menu.Item key="login" onClick={showModal}>
            Login | Register
          </Menu.Item>
        </Menu>
      </Row>
      <Modal
        visible={show}
        onCancel={handleCancel}
        onOk={handleOk}
        destroyOnClose={true}
      >
        {<User />}
      </Modal>
    </div>
  );
}

export default NavBar;
