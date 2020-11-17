import React from "react";
import Headlines from "./headlines";
import Actions from "./actions";
import Board from "./board";
import Posts from "./posts";
import Sentimental from "./sentimental";
import Time from "./time";
import Target from "./target";
import Alert from "./alert";

const Container = () => {
  return (
    <React.Fragment>
      <div className="main_content p-4" id="custom">
        <div className="row gx-3">
          <div className="col-lg-2">
            <div className="row mb-md-0 mb-3">
              <div className="col-md-12 col-sm-12">
                <Headlines />
              </div>
              <div className="col-md-12 col-sm-12">
                <Actions />
              </div>
            </div>
          </div>
          <div className="col-lg-8 pt-3">
            <div className="bg_color">
              <h5>Board</h5>
            </div>
            <div className="map">
              <Board
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDex222GgfCITg_QbFnWzf1TOF0KU2ZVxc&v=3.exp&libraries=geometry,drawing,places"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `320px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
              />
            </div>

            <div className="row map_bottom_section gx-2 mt-3">
              <div className="col-sm-5 mt-sm-0 mt-3">
                <Posts />
              </div>
              <div className="col-sm-3 mt-sm-0 mt-3">
                <Sentimental />
              </div>
              <div className="col-sm-4 mt-sm-0 mt-3">
                <Time />
              </div>
            </div>
          </div>
          <div className="col-lg-2 right_section mt-lg-0 mt-3">
            <div className="row">
              <div className="col-lg-12 col-sm-6 mt-sm-0 mt-3">
                <Target />
              </div>
              <div className="col-lg-12 col-sm-6 mt-sm-0 mt-3">
                <Alert />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Container;
