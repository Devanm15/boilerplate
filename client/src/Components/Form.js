import React, { useState } from "react";
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch
} from "antd";

function InputForm(props) {
  return (
    <div className="contribution-form">
      <h1>Contribute to the App</h1>
      {props.loggedInStatus === "Logged In" && (
        <Form
          labelCol={{
            span: 4
          }}
          wrapperCol={{
            span: 14
          }}
          layout="horizontal"
          initialValues={{
            size: "large"
          }}
        >
          <Form.Item label="Contribute To:">
            <Radio.Group>
              <Radio.Button value="Existing Data">Existing Data</Radio.Button>
              <Radio.Button value="New Data">New Data</Radio.Button>
            </Radio.Group>
            <Radio.Group>
              <Radio.Button value="Cultures">Cultures</Radio.Button>
              <Radio.Button value="Plants">Plants</Radio.Button>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="Name">
            <Select>
              <Select.Option value="demo">Demo</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="Description">
            <Input />
          </Form.Item>
          <Form.Item label="TreeSelect">
            <TreeSelect
              treeData={[
                {
                  title: "Light",
                  value: "light",
                  children: [
                    {
                      title: "Bamboo",
                      value: "bamboo"
                    }
                  ]
                }
              ]}
            />
          </Form.Item>
          <Form.Item label="DatePicker">
            <DatePicker />
          </Form.Item>
          <Button value="Submit-Data">Submit</Button>
        </Form>
      )}
      {props.loggedInStatus === "Not Logged In" && (
        <div className="No-User">
          <h2>We would love your contributions!</h2>
          <p>
            If you would like to contribute to the Earth Medicine App, please
            register with us!
          </p>
        </div>
      )}
    </div>
  );
}

export default InputForm;
