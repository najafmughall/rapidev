import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <header>
          <nav>
            <ul>
              <li>
                <a href="#">MENU</a>
              </li>
              <li>
                <a href="#">PORTFOLIO</a>
              </li>
              <li className="active">
                <a href="#">HOME</a>
              </li>
              <li>
                <a href="#">ABOUT US</a>
              </li>
              <li>
                <a href="#">CONTACT US</a>
              </li>
            </ul>
          </nav>
          <div className="bars" id="bars">
            <i className="fas fa-bars"></i>
          </div>
        </header>
        <div className="navbar_overlay">
          <ul>
            <li>
              <a href="#">MENU</a>
            </li>
            <li>
              <a href="#">PORTFOLIO</a>
            </li>
            <li className="active">
              <a href="#">HOME</a>
            </li>
            <li>
              <a href="#">ABOUT US</a>
            </li>
            <li>
              <a href="#">CONTACT US</a>
            </li>
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

export default Header;
