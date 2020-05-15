import React from "react";
import { Button, Checkbox } from "antd";
import { useForm } from "react-hook-form";
import axios from "axios";

function UserLogin(props) {
  const { register, handleSubmit } = useForm();

  const onSubmit = data => {
    axios
      .post(
        "http://localhost:3000/api/sessions",
        {
          user: {
            email: data.email,
            password: data.password
          }
        },
        { withCredentials: true }
      )
      .then(response => {
        if (response.data.logged_in) {
          props.handleSuccessfulAuth(response.data);
        }
      })
      .catch(error => {
        console.log("login error", error);
      });
    event.preventDefault();
  };
  function handleChange(event) {
    // console.log(event.target);
  }

  return (
    <div className="Login">
      <form onSubmit={handleSubmit(onSubmit)} className="Login-form">
        <div className="login-email">
          <label>Email: </label>
          <input
            name="email"
            type="email"
            ref={register({ required: true })}
            onChange={handleChange}
          />
        </div>
        <div className="login-password">
          <label>Password:</label>
          <input
            name="password"
            type="password"
            ref={register({ required: true })}
            onChange={handleChange}
          />
        </div>
        <Checkbox>Remember me</Checkbox>

        <Button
          type="primary"
          htmlType="submit"
          onClick={() => {
            onSubmit;
          }}
        >
          Submit
        </Button>
      </form>
    </div>
  );
}

export default UserLogin;
