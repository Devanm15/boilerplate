import React, { useState, useEffect } from "react";
import { Button, Input, Form } from "antd";

function UserDashboard(props) {
  console.log(props);
  return (
    <div className="user_component">
      <h1>Hello! {props.user.first_name}</h1>
      <p>
        This is your personal dashboard, where you can update your public
        profile, review your additions to the app and access your connections
        and communications
      </p>
      <h3> Your Drafts</h3>
    </div>
  );
}

export default UserDashboard;
