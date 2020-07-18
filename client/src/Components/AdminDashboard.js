import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "antd";

function Admin(props) {
  const [cultureDraft, setCultureDrafts] = useState();

  useEffect(
    state => {
      axios
        .get("/api/culture_drafts/")
        .then(response => {
          setCultureDrafts(response.data);
        })
        .catch(error => {
          console.log("No drafts loading", error);
        });
    },
    [props]
  );

  function generateHeader() {
    let res = [];
  }

  const columns = [
    {
      title: "Culture Name",
      dataIndex: "name",
      key: "name"
    },
    {
      title: "New Additions",
      dataIndex: "newAdditions",
      key: "newAdditions"
    },
    {
      title: "Date Created",
      dataIndex: "created_at",
      key: "created_at"
    }
  ];

  function showCultureDrafts() {
    if (cultureDraft) {
      return cultureDraft.map((cultureDraft, index) => {
        const draftData = [
          {
            key: index,
            name: cultureDraft.name,
            newAdditions: cultureDraft.description,
            approved: cultureDraft.approved,
            created_at: cultureDraft.created_at,
            created_at: cultureDraft.created_at
          }
        ];
        if (cultureDraft.approved == false) {
          return (
            <div className="unapproved">
              <Table dataSource={draftData} columns={columns}></Table>
            </div>
          );
        }
      });
    }
  }
  return (
    console.log(cultureDraft),
    (
      <div>
        <h1>Hello Admin</h1>
        <h4>These are the new additions to the app</h4>

        {showCultureDrafts()}
      </div>
    )
  );
}
export default Admin;
