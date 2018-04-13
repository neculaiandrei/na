import React, { Component } from "react";
import Arrow from "./arrow.js";
import Edge from "./edge.js";
import Random from "./random.js";
import Vertex from "./vertex.js";

class Level extends Component {
  render() {
    return (
      <div>
        <div className="columns is-mobile is-centered">
          <Vertex />
        </div>
        <Random />
        <div className="columns is-mobile is-multiline">
          <Edge />
          <Edge selected={true} />
          <Edge />
          <Edge />
        </div>
        <Arrow />
      </div>
    );
  }
}

export default Level;
