import React, { Component } from "react";
import TaskForm from "../../molecules/TaskForm/TaskForm";
import Button from "../../atoms/Button/Button";
import CheckBox from "../../atoms/CheckBox/CheckBox";

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      newTask: "",
      completedTask: false,
    };

    //Cambio del Imput:Text
    this.inputChange = (e) => {
      this.setState({ newTask: e.target.value });
    };

    //Cambio del Imput:CheckBox
    /* this.completedTask = (index) => {
      let newTasks = [...this.state.tasks];

      this.setState({ tasks: newTasks });
    };
 */
    //Agregar una nueva tarea
    this.addTask = () => {
      this.setState((prevState) => ({
        tasks: [...prevState.tasks, this.state.newTask],
        newTask: "",
      }));
    };

    //Eliminar una tarea
    this.dellTask = (index) => {
      let newTasks = [...this.state.tasks];
      newTasks.splice(index, 1);
      this.setState({ tasks: newTasks });
    };
  }

  render() {
    return (
      <div>
        <TaskForm
          inputProps={{
            placeholder: "new task",
            value: this.state.newTask,
            onChange: this.inputChange,
          }}
          onAdd={this.addTask}
        />
        <ul>
          {this.state.tasks.map((task, index) => (
            <li key={index}>
              <CheckBox onChange={() => this.completedTask(index)} />
              {task}
              <Button
                onClick={() => this.dellTask(index)}
                disabled={!this.state.completedTask}
              >
                Dell
              </Button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
