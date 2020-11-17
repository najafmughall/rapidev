import React, { Component } from "react";

class Alert extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="card_2 px-4 py-4 pb-2">
          <div className="alert_type">
            <div className="icon_alert">
              <i className="fas fa-exclamation-triangle"></i>
              <span>ALERT</span>
            </div>
          </div>
          <hr />
          <hr />
          <hr />
          <hr />
          <hr />
          <h6>Notification</h6>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti
            tenetur a perspiciatis fugit perferendis odit tempora quos fugiat
            quisquam molestiae!
          </p>
        </div>
      </React.Fragment>
    );
  }
}

export default Alert;
