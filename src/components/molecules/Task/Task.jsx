import "./Task.css";

import Button from "../../atoms/Button/Button";
import Text from "../../atoms/Text/Text";

import React, { Component } from "react";

export default class Task extends Component {
  render() {
    const { tarea, onClick } = this.props;

    return (
      <div className="task">
        <Text texto={tarea} />
        <Button value="Dell" onClick={onClick} />
      </div>
    );
  }
}
