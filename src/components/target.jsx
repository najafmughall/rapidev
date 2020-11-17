import React, { Component } from "react";
import capture from "../images/Capture.PNG";

class Target extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="card_2 pl-2 pr-2 pt-3 pb-2 mb-md-3 mb-0">
          <form>
            <input type="text" placeholder="Enter Target Name Here..." />
          </form>
          <div className="mt-0" style={{ position: "relative", left: "10px" }}>
            <div className="row">
              <div className="col-6 p-2">
                <div
                  className="p-2"
                  style={{
                    background:
                      "linear-gradient( 180deg, rgba(0,0,0,1) 0%, rgba(0,42,79,1) 50%, rgba(59,161,255,1) 100%)",
                  }}
                >
                  <span className="d-block">Most Recent</span>
                  <span className="d-block">Target Marked</span>
                  <span className="d-block">Alfred Bin Laden</span>
                </div>
              </div>
              <div className="col-6 img_radi">
                <img src={capture} className="img-fluid" alt="" />
              </div>
            </div>
          </div>
          <h6 style={{ fontSize: "11px", marginTop: "5px" }}>Update!</h6>
          <div className="update_section">
            <div className="container">
              <div className="row">
                <div
                  className="col-3 d-flex"
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <i
                    style={{
                      fontSize: "22px",
                      position: "relative",
                      right: "-10px",
                    }}
                    className="fas fa-globe"
                  ></i>
                </div>
                <div className="col-9 py-2">
                  <h6>Goble News Monitor Summary</h6>
                  <hr />
                  <hr />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-2" style={{ maxWidth: "140px", margin: "0 auto" }}>
            <div className="progress">
              <div
                className="progress-bar progress-bar-striped"
                role="progressbar"
                style={{
                  width: "60%",
                  background:
                    "linear-gradient( 180deg, rgb(155, 155, 155) 0%, rgb(250, 250, 250) 50%, rgb(134, 134, 134) 100%)",
                }}
                aria-valuenow="10"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <h6 className="text-center mt-1" style={{ fontSize: "8px" }}>
              Search on Target Processing Status
            </h6>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Target;
