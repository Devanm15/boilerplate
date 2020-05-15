import React, { useState, useRef } from "react";
import UserRegistration from "./UserRegistration";
import UserLogin from "./UserLogin";

function User(props) {
  const [isHidden, setIsHidden] = useState(true);

  function ToggleLogin() {
    setIsHidden(true);
  }

  function ToggleRegister() {
    setIsHidden(false);
  }

  return (
    <div className="user-credentials">
      <div className="Login-Register-Buttons">
        <button className="Login" onClick={ToggleLogin}>
          Login
        </button>
        <button className="Register" onClick={ToggleRegister}>
          Register
        </button>
      </div>
      {isHidden && (
        <UserLogin handleSuccessfulAuth={props.handleSuccessfulAuth} />
      )}

      {!isHidden && (
        <UserRegistration handleSuccessfulAuth={props.handleSuccessfulAuth} />
      )}
    </div>
  );
}

export default User;
