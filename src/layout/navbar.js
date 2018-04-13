import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar-tabs">
        <div className="navbar-brand">
          <a className="navbar-burger">
            <span />
            <span />
            <span />
          </a>
        </div>
        <div className="navbar-menu">
          <div className="navbar-start">
            <div className="navbar-item is-tab">
              <Link to="/links">Links</Link>
            </div>
            <div className="navbar-item is-tab">
              <Link to="/explore">Explore</Link>
            </div>
            <div className="navbar-item is-tab">
              <Link to="/podcast">Podcast</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
