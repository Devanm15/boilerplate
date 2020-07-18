import React, { useState, useEffect } from "react";
import axios from "axios";
import CultureDraftModal from "./CultureDraftModal.js";
import { Button, Modal } from "antd";

function Admin(props) {
  const [cultureDraft, setCultureDrafts] = useState();
  const [show, setModal] = useState(false);

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
        if (cultureDraft.approved == false) {
          return (
            <div className="unapproved" key={index}>
              <div className="Table">
                <table className="admin-table">
                  <tbody>
                    <tr>
                      <th>Culture Name</th>
                      <th>New Additions</th>
                      <th>Created At</th>
                      <th>Approve</th>
                    </tr>
                    <tr>
                      <td>{cultureDraft.name}</td>
                      <td>
                        <Button className="new-info-modal" onClick={showModal}>
                          Click here to view
                        </Button>
                      </td>
                      <td>{cultureDraft.created_at}</td>

                      <td>
                        <Button>Approve</Button>
                        <Button>Decline</Button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          );
        }
      });
    }
  }

  function showModal() {
    setModal(true);
  }
  function handleCancel() {
    setModal(false);
  }
  function handleOk() {
    setModal(false);
  }

  return (
    <div>
      <h1>Hello Admin</h1>
      <h4>These are the new additions to the app</h4>
      <Modal
        visible={show}
        onCancel={handleCancel}
        onOk={handleOk}
        destroyOnClose={true}
        className="draft_modal"
        width={1000}
      >
        {<CultureDraftModal cultureDraft={cultureDraft} />}
      </Modal>

      {showCultureDrafts()}
    </div>
  );
}
export default Admin;
