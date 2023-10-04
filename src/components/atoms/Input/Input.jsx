import "./Input.css";
import React, { Component } from "react";

export default class Input extends Component {
  render() {
    const { onChange, value, placeholder } = this.props;

    return (
      <input
        className="input"
        type="text"
        onChange={onChange}
        value={value}
        placeholder={placeholder}
      />
    );
  }
}
