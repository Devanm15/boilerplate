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
    <div>
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
        <h1>Contribute to the App</h1>
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
    </div>
  );
}

export default InputForm;
