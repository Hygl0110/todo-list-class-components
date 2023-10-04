import "./Tasks.css";

import Button from "../../atoms/Button/Button";
import Input from "../../atoms/Input/Input";

import React, { Component } from "react";

export default class Tasks extends Component {
  render() {
    return (
      <div className="tasks">
        <h3>Tasks</h3>

        {/* Para agregar tareas */}
        <div className="addTask">
          <h4>addTaks</h4>
          <Input placeholder="Input new task"></Input>
          <Button text="Add"></Button>
        </div>
      </div>
    );
  }
}
