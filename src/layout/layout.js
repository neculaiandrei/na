import React, { Component } from "react";

class Layout extends Component {
  render() {
    return <div className="na-layout container">{this.props.children}</div>;
  }
}

export default Layout;
