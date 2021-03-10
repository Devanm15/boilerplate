import React, { useState, useEffect } from "react";
import { Button, Input, Form } from "antd";

function UserDashboard(props) {
  const [userCultureDraft, setUserCulure] = useState();
  console.log(props);

  function showCultureDrafts() {
    if (props.userCultureDrafts) {
      return props.userCultureDrafts.map((cultureDraft, index) => {
        return (
          <div className="unapproved">
            <div className="Table">
              <table className="admin-table">
                <tbody>
                  <tr>
                    <th>Culture Name</th>
                    <th>New Additions</th>
                    <th>Created At</th>
                    <th>Status</th>
                  </tr>
                  <tr>
                    <td>{cultureDraft.name}</td>
                    <td>
                      <Button
                        className="new-info-modal"
                        // onClick={showModal}
                      >
                        Click here to view/Edit
                      </Button>
                    </td>
                    <td>{cultureDraft.created_at}</td>
                    {cultureDraft.approved ? (
                      <td>Approved</td>
                    ) : (
                      <td>Pending approval</td>
                    )}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        );
      });
    }
  }
  return (
    <div className="user_component">
      <h1>Hello! {props.user.first_name}</h1>

      <p>
        This is your personal dashboard, where you can update your public
        profile, review your additions to the app and access your connections
        and communications
      </p>
      <h3> Your Drafts</h3>
      {showCultureDrafts()}
    </div>
  );
}

export default UserDashboard;
