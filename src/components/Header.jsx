import React, { Component, Link } from "react";

class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <header>
          <nav>
            <ul>
              <li>
                <Link href="#">MENU</Link>
              </li>
              <li>
                <Link href="#">PORTFOLIO</Link>
              </li>
              <li className="active">
                <Link href="#">HOME</Link>
              </li>
              <li>
                <Link href="#">ABOUT US</Link>
              </li>
              <li>
                <Link href="#">CONTACT US</Link>
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
              <Link href="#">MENU</Link>
            </li>
            <li>
              <Link href="#">PORTFOLIO</Link>
            </li>
            <li className="active">
              <Link href="#">HOME</Link>
            </li>
            <li>
              <Link href="#">ABOUT US</Link>
            </li>
            <li>
              <Link href="#">CONTACT US</Link>
            </li>
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

export default Header;
