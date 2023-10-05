import "./CheckBox.css";
import React, { Component } from "react";

export default class CheckBox extends Component {
  render() {
    return <input className="checkbox" type="checkbox" {...this.props} />;
  }
}
