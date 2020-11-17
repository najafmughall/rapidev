import React, { Component } from "react";

class Actions extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="card_1 mt-3 px-3 py-3 pb-3">
          <div className="col-md-12">
            <div className="flex_system">
              <div className="icon_center">
                <div className="icon">
                  <i className="fas fa-file-code"></i>
                </div>
                <h6>Menu</h6>
              </div>
              <div className="icon_play">
                <i className="fas fa-play"></i>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="flex_system">
              <div className="icon_center">
                <div className="icon">
                  <i className="fas fa-chart-area"></i>
                </div>
                <h6>ANALYZE</h6>
              </div>
              <div className="icon_play">
                <i className="fas fa-play"></i>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="flex_system">
              <div className="icon_center">
                <div className="icon">
                  <i className="fas fa-clipboard-list"></i>
                </div>
                <h6>REPORT</h6>
              </div>
              <div className="icon_play">
                <i className="fas fa-play"></i>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="flex_system">
              <div className="icon_center">
                <div className="icon">
                  <i className="fas fa-address-card"></i>
                </div>
                <h6>About Us</h6>
              </div>
              <div className="icon_play">
                <i className="fas fa-play"></i>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="flex_system">
              <div className="icon_center">
                <div className="icon">
                  <i className="fas fa-cog"></i>
                </div>
                <h6>SETTINGS</h6>
              </div>
              <div className="icon_play">
                <i className="fas fa-play"></i>
              </div>
            </div>
          </div>
          <div className="text_vertically">
            <h6>ACTIONS</h6>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Actions;
