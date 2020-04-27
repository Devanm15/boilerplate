import React, { useEffect, useState, Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

function NavBar(props) {
  return (
    <div className="Menu">
      <Row>
        <h1>Earth Medicine App</h1>
        <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal"
        >
          <Menu.Item key="login">Login | Register</Menu.Item>
          {/* <Menu.Item key="app" disabled></Menu.Item> */}
        </Menu>
      </Row>
    </div>
  );
}

export default NavBar;
