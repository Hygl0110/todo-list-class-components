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
    };

    //Cambio del Imput:Text
    this.inputChange = (event) => {
      this.setState({ newTask: event.target.value });
    };

    //Agregar una nueva tarea
    this.addTask = () => {
      console.log("Aded Task: ");
      this.setState((prevState) => ({
        tasks: [
          ...prevState.tasks,
          { task: this.state.newTask, completedTask: false },
        ],
        newTask: "",
      }));
    };

    //Completar tarea
    this.complete = (index) => {
      console.log("Completed Task: ", index);
      let newTasks = [...this.state.tasks];
      newTasks[index].completedTask = !newTasks[index].completedTask;
      this.setState({ tasks: newTasks });
    };

    //Eliminar una tarea
    this.dellTask = (index) => {
      console.log("Deleted Task: ", index);
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
              <CheckBox
                checked={task.completedTask}
                onChange={() => this.complete(index)}
              />
              {task.task}
              <Button
                onClick={() => this.dellTask(index)}
                disabled={!task.completedTask}
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
