import "./Text.css";

import React, { Component } from "react";

export default class Text extends Component {
  render() {
    const { texto } = this.props;

    return <p>{texto}</p>;
  }
}
