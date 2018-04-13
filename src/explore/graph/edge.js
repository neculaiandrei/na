import React, { Component } from "react";
import classNames from "classnames";

class Edge extends Component {
  render() {
    var containerClass = classNames({
      column: true,
      "na-edge": true,
      "na-edge--selected": this.props.selected
    });

    return (
      <div className={containerClass}>
        <div className="card">
          <div className="card-content">
            <div className="content is-small">
              <h4>Component</h4>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Edge;
