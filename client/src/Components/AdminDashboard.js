import React, { useState, useEffect } from "react";
import axios from "axios";
import { Transfer } from "antd";

function Admin(props) {
  const [cultureDraft, setCultureDrafts] = useState([]);

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

  function showCultureDrafts() {
    if (cultureDraft) {
      return cultureDraft.map((cultureDraft, index) => {
        return (
          <div className="CultureDraftBox">
            <h2>Culture Name</h2>
            <ul key={index}>
              <p header={cultureDraft.name} key={cultureDraft.id}>
                <p>{cultureDraft.name}</p>
                <p>{cultureDraft.description}</p>
              </p>
            </ul>
          </div>
        );
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
