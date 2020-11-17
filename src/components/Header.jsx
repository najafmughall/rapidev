import React, { useState } from "react";

const Header = () => {
  const [navlinkOpen, navlinkToggle] = useState(false);

  const handleNavigation = () => {
    navlinkToggle(!navlinkOpen);
  };

  const renderClasses = () => {
    let classes = "navbar_overlay";
    if (navlinkOpen) {
      classes += " navbar_overlay_active";
    }

    return classes;
  };

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
        <div onClick={handleNavigation} className="bars" id="bars">
          <i className="fas fa-bars"></i>
        </div>
      </header>
      <div className={renderClasses()}>
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
};

export default Header;
