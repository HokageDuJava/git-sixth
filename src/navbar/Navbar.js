import React from "react";
import { NavLink, withRouter } from "react-router-dom";

const Navbar = (props) => {
  setTimeout(() => {
    console.log(props.history.push("/contact"));
  }, 4000);
  return (
    <nav>
      <div className="nav-wrapper">
        <div className="container">
          <NavLink to="/" className="brand-logo">
            Todo's
          </NavLink>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default withRouter(Navbar);
