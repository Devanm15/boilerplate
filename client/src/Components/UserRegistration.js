import React, { useState, useRef } from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { useForm } from "react-hook-form";
import axios from "axios";

function UserRegistration(props) {
  const { register, handleSubmit, errors, getValues } = useForm();

  const onSubmit = data => {
    console.log(data);
    axios
      .post(
        "http://localhost:3000/api/registrations",
        {
          user: {
            first_name: data.firsName,
            last_name: data.lastName,
            username: data.username,
            email: data.email,
            password: data.password,
            password_confirmation: data.password_confirmation
          }
        },
        { withCredentials: true }
      )
      .then(response => {
        if (response.data.status === "created") {
          console.log("registration res", response);
        }
      })
      .catch(error => {
        console.log("reg error", error);
      });
    event.preventDefault();
  };

  function handleChange(event) {
    console.log(event.target);
  }

  return (
    <div className="Register">
      <form onSubmit={handleSubmit(onSubmit)} className="Register-form">
        <div className="Reg-firstName">
          <label>FirstName: </label>
          <input
            name="firstName"
            type="firstName"
            ref={register({ required: true })}
            onChange={handleChange}
          />
          <div className="error-message">
            {errors.username && "Please enter your first name"}
          </div>
        </div>
        <div className="Reg-lastName">
          <label>lastName: </label>
          <input
            name="lastName"
            type="lastName"
            ref={register({ required: true })}
            onChange={handleChange}
          />
          <div className="error-message">
            {errors.username && "Please enter your last name"}
          </div>
        </div>
        <div className="Reg-Username">
          <label>Username: </label>
          <input
            name="username"
            type="username"
            ref={register({ required: true })}
            onChange={handleChange}
          />
          <div className="error-message">
            {errors.username && "A username is required"}
          </div>
        </div>
        <div className="Reg-Email">
          <label>Email: </label>
          <input
            name="email"
            type="email"
            ref={register({ required: true })}
            onChange={handleChange}
          />
          <div className="error-message">
            {errors.email && "an email is required"}
          </div>
        </div>
        <div className="reg-password">
          <label>Password: </label>
          <input
            name="password"
            type="password"
            ref={register({ required: true, minLength: 8 })}
            onChange={handleChange}
          />
          <div className="error-message">
            {errors.password && errors.password.type === "required" && (
              <p>Your input is required</p>
            )}
            {errors.password && errors.password.type === "minLength" && (
              <p>Your password needs to be a minimum of 8 characters</p>
            )}
          </div>
        </div>
        <div className="reg-password-confirmation">
          <label>Password Confirmation: </label>
          <input
            name="passwordConfirmation"
            type="password"
            ref={register({
              required: true,
              validate: {
                matchesPreviousPassword: value => {
                  const { password } = getValues();
                  return password === value || <p>Passwords Should Match</p>;
                }
              }
            })}
            onChange={handleChange}
          />
          <div className="error-message">
            {errors.passwordConfirmation && errors.passwordConfirmation.message}
          </div>
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

export default UserRegistration;
