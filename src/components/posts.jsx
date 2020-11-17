import React, { Component } from "react";
import like from "../images/like.png";
import angry from "../images/angry.png";
import shocked from "../images/shocked.png";
import heart from "../images/heart.png";
import sad from "../images/sad.png";
import laughing from "../images/laughing.png";

class Posts extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="bg_color p-0 pt-2">
          <div className="container d-flex justify-content-evenly">
            <h6 className="pr-5">Total Posts</h6>
            <h6 className="pr-3">1050</h6>
          </div>
        </div>
        <div className="emoji_body">
          <div className="row p-2 px-3">
            <div className="col-6">
              <div className="d-flex">
                <img src={like} alt="" />
                <h6>Total Likes(400)</h6>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex">
                <img src={shocked} alt="" />
                <h6>Total Likes(400)</h6>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex mt-3">
                <img src={heart} alt="" />
                <h6>Total Likes(400)</h6>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex mt-3">
                <img src={laughing} alt="" />
                <h6>Total Likes(400)</h6>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex mt-3">
                <img src={sad} alt="" />
                <h6>Total Likes(400)</h6>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex mt-3">
                <img src={angry} alt="" />
                <h6>Total Likes(400)</h6>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Posts;
