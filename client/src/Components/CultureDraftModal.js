import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Input, Form } from "antd";
import { useForm } from "react-hook-form";

function CultureDraftModal(props) {
  const { handleSubmit, errors } = useForm();
  const [form] = Form.useForm();
  const [newCultureDraft, setNewCultureDraft] = useState(props.cultureDraft);

  function onSubmit() {}

  function showCultureDrafts() {
    let correspondingCulture = props.cultureDraftCultures[newCultureDraft.name];

    return (
      <div>
        <div className="CultureDraftBox">
          <h3>New Culture Information</h3>
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
            form={form}
          >
            <div className="draft-comparison">
              <Form.Item label="Name" className="newCultureDraft">
                <Input
                  type="text"
                  required={true}
                  defaultValue={newCultureDraft.name}
                />
              </Form.Item>
              <div className="OldCultureInfo">{correspondingCulture.name}</div>
            </div>
            <div className="draft-comparison">
              <Form.Item label="Description" className="newCultureDraft">
                <textarea
                  className="ant-input"
                  type="text"
                  defaultValue={newCultureDraft.description}
                />
              </Form.Item>
              <div className="OldCultureInfo">
                {correspondingCulture.description}
              </div>
            </div>
            <div className="draft-comparison">
              <Form.Item label="Location" className="newCultureDraft">
                <Input type="number" />
              </Form.Item>
              <div className="OldCultureInfo"></div>
            </div>
            <div className="draft-comparison">
              <Form.Item label="Start Date" className="newCultureDraft">
                <Input
                  type="text"
                  defaultValue={newCultureDraft.start_date}
                ></Input>
              </Form.Item>
              <div className="OldCultureInfo">
                {correspondingCulture.start_date}
              </div>
            </div>
            <div className="draft-comparison">
              <Form.Item label="End Date" className="newCultureDraft">
                <Input
                  type="text"
                  defaultValue={newCultureDraft.end_date}
                ></Input>
                <div className="OldCultureInfo">
                  {correspondingCulture.end_date}
                </div>
              </Form.Item>
            </div>
            <div className="draft-comparison">
              <Form.Item label="Sources" className="newCultureDraft">
                <Input defaultValue={newCultureDraft.source} />
              </Form.Item>
              <div className="OldCultureInfo">
                {correspondingCulture.sources}
              </div>
            </div>

            <Button type="primary" htmlType="submit" onClick={onSubmit}>
              Submit
            </Button>
          </Form>
        </div>
      </div>
    );
  }

  return (
    <div className="modal-container">
      <div className="newCultureDraft">{showCultureDrafts()}</div>
    </div>
  );
}

export default CultureDraftModal;
