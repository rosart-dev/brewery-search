import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navbar = ({ title, icon }) => {
  return (
    <nav className="navbar navbar-dark bg-dark shadow sticky-top mx-auto">
      <span href="#!" className="navbar-brand">
        <i className={icon} style={{ color: "gold" }}></i> {title}
      </span>
      {/* <ul className="nav">
        <li style={styles}>
          <Link to="/">Home</Link>
        </li>
        <li tyle={styles}>
          <Link to="/about">About</Link>
        </li>
      </ul> */}
    </nav>
  );
};

Navbar.defaultProps = {
  title: "Brewery Search",
  icon: "fas fa-beer"
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

const styles = {
  marginLeft: "1rem",
  marginRight: "1rem"
};

export default Navbar;
