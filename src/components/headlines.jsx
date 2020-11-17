import React, { Component } from "react";

class Headlines extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="card_1 px-4 py-4 pb-2">
          <span className="d-block ">
            Time: 15:00 GMT <span className="ml-2">Date: 12/11/2020</span>{" "}
          </span>
          <div className="pt-4">
            <h6>Main Headline</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur,r adipisicing elit. Lorem
              ipsum dolor sit amet, consectetur adipisicing elit. Ducimus,
              accusamus?
            </p>
          </div>
          <div className="text_vertically">
            <h6>HEADLINES</h6>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Headlines;
