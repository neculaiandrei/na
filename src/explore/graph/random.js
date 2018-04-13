import React, { Component } from "react";

class Random extends Component {
  render() {
    return (
      <div className="columns is-mobile is-centered">
        <div className="column is-narrow">
          <span className="icon is-large">
            <i className="fas fa-random fa-2x" />
          </span>
        </div>
      </div>
    );
  }
}

export default Random;
