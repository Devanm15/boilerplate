import React, { useState, useEffect } from "react";
import axios from "axios";
import CultureDraftModal from "./CultureDraftModal.js";
import newCultureDraftModal from "./newCultureDraftModal.js";
import { Button, Modal } from "antd";

function Admin(props) {
  const [currentCultureDraft, setCurrentCultureDraft] = useState();
  const [cultureDraftCultures, setCultureDraftCultures] = useState();
  const [cultureDrafts, setCultureDrafts] = useState();
  const [cultureDraftId, setCultureDraftId] = useState();
  const [show, setModal] = useState(false);

  useEffect(() => {
    axios
      .get("/api/culture_drafts/")
      .then(response => {
        const cultureDrafts = response.data;
        let cultureDraftCultures = {};
        cultureDrafts.forEach(cultureDraft => {
          let currentCulture = props.currentCultures.find(
            currentCulture => cultureDraft.name == currentCulture.name
          );
          cultureDraftCultures[cultureDraft.name] = currentCulture;
        });

        console.log(cultureDraftCultures);
        setCultureDraftCultures(cultureDraftCultures);
        setCultureDrafts(cultureDrafts);
      })
      .catch(error => {
        console.log("No drafts loading", error);
      });
  }, [props.currentCultures]);

  function showCultureDrafts() {
    if (cultureDrafts) {
      return cultureDrafts.map((cultureDraft, index) => {
        function showModal(e) {
          setCurrentCultureDraft(cultureDraft);
          setModal(true);
        }
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
                    </tr>
                    <tr>
                      <td>{cultureDraft.name}</td>
                      <td>
                        <Button className="new-info-modal" onClick={showModal}>
                          Click here to view
                        </Button>
                      </td>
                      <td>{cultureDraft.created_at}</td>
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

  function handleCancel() {
    setModal(false);
  }
  function handleOk() {
    setModal(false);
  }

  return (
    console.log("admin props", props.currentCultures),
    (
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
          <CultureDraftModal
            currentCultureDraft={currentCultureDraft}
            cultureDraftCultures={cultureDraftCultures}
          />
          <newCultureDraftModal currentCultureDraft={currentCultureDraft} />
        </Modal>

        {showCultureDrafts()}
      </div>
    )
  );
}
export default Admin;
