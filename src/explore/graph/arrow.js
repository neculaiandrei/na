import React, { Component } from "react";

class Arrow extends Component {
  render() {
    return (
      <div className="columns is-mobile is-centered">
        <div className="column is-narrow">
          <span className="icon is-large">
            <i className="fas fa-long-arrow-alt-down fa-2x" />
          </span>
        </div>
      </div>
    );
  }
}

export default Arrow;
