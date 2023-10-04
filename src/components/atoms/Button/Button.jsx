import "./Button.css";
import React, { Component } from "react";

export default class Button extends Component {
  render() {
    const { onClick, text, disabled } = this.props;

    return (
      <button className="button" onClick={onClick} disabled={disabled}>
        {text}
      </button>
    );
  }
}
