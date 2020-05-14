import React, { useState, useRef } from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { useForm } from "react-hook-form";
import axios from "axios";

function User(props) {
  const [isHidden, setIsHidden] = useState(true);
  const emailValue = useRef();
  const passwordValue = useRef();
  const { register, handleSubmit, errors, getValues } = useForm();

  function ToggleLogin() {
    setIsHidden(true);
  }

  function ToggleRegister() {
    setIsHidden(false);
  }

  const onSubmit = data => {
    axios
      .post(
        "http://localhost:3000/registrations",
        {
          user: {
            email: data.email,
            password: data.password,
            password_confirmation: data.password_confirmation
          }
        },
        { withCredentials: true }
      )
      .then(response => {
        console.log("registration res", response);
      })
      .catch(error => {
        console.log("reg error", error);
      });
    event.preventDefault();
  };

  function handleLoginInput() {
    emailValue.current.focus();
    passwordValue.current.focus();
  }

  function handleChange(event) {
    console.log(event.target);
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
        <div className="Login-Form">
          <Form name="Login" initialValues={{ remember: false }}>
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your Email!"
                },
                {
                  type: "email",
                  message: "Oops! that is not a valid email"
                }
              ]}
            >
              <Input ref={emailValue} />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
                {
                  min: 8,
                  message: "Your password must be atleast 8 characters long"
                }
              ]}
            >
              <Input.Password ref={passwordValue} />
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked">
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                onClick={handleLoginInput}
              >
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      )}

      {!isHidden && (
        <div className="Register">
          <form onSubmit={handleSubmit(onSubmit)} className="Register-form">
            <div className="Reg-Email">
              <label>Email: </label>
              <input
                name="email"
                type="email"
                ref={register({ required: true })}
                onChange={handleChange}
              />
              <div className="error-message">
                {errors.email && "Email Required"}
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
                {" "}
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
                      return (
                        password === value || <p>Passwords Should Match</p>
                      );
                    }
                  }
                })}
                onChange={handleChange}
              />
              <div className="error-message">
                {errors.passwordConfirmation && (
                  <p>{errors.passwordConfirmation.message}</p>
                )}
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
      )}
    </div>
  );
}

export default User;
