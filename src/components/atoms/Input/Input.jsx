import "./Input.css";
import React, { Component } from "react";

export default class Input extends Component {
  render() {
    return <input className="input" type="text" {...this.props} />;
  }
}
