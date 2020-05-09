import React, { useState, useRef, createRef } from "react";
import { Form, Input, Button, Checkbox } from "antd";

function User(props) {
  const [isHidden, setIsHidden] = useState(true);
  const emailValue = useRef();
  const passwordValue = useRef();
  function ToggleLogin() {
    setIsHidden(true);
  }

  function ToggleRegister() {
    setIsHidden(false);
  }

  function handleLoginInput(e) {
    emailValue.current.focus();
    passwordValue.current.focus();
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
          <Form name="Register" initialValues={{ remember: false }}>
            <Form.Item
              label="Username"
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please enter a username!"
                },
                {
                  min: 5,
                  max: 20,
                  message: "Your password must be between 5-20 characters long"
                }
              ]}
            >
              <Input />
            </Form.Item>
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
              <Input />
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
              <Input.Password />
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked">
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      )}
    </div>
  );
}

export default User;
