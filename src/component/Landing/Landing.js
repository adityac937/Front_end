import React, { Component } from "react";
import Aux from "../../hoc/Aux/Aux";
import "./Landing.scss";
class Landing extends Component {
  render() {
    return (
      <Aux>
        <div class="container">
          <input type="text" placeholder="Enter Location"></input>
          <div class="search"></div>
        </div>
      </Aux>
    );
  }
}
export default Landing;
