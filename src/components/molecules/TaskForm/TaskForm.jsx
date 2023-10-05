import React, { Component } from "react";
import Button from "../../atoms/Button/Button";
import Input from "../../atoms/Input/Input";

export default class TaskForm extends Component {
  componentDidMount() {
    console.log("El componente TaskForm se ha desmontado");
  }
  componentWillMount() {
    console.log("El componente TaskForm se ha montado");
  }

  render() {
    return (
      <div>
        <p>Add Task</p>
        <Input {...this.props.inputProps} />
        <Button onClick={this.props.onAdd}>Add</Button>
      </div>
    );
  }
}
