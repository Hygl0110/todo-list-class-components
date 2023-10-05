import React, { Component } from "react";
import TaskForm from "../../molecules/TaskForm/TaskForm";
import TaskList from "../../molecules/TaskList/TaskList";
import Button from "../../atoms/Button/Button";
import CheckBox from "../../atoms/CheckBox/CheckBox";

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [], //Array que contendra las tareas para mostrarlas con un .map()
      newTask: "", //Estado para contener el texto de la tarea
    };

    //Captura del value del imput para almacenalo en 'newTask'
    this.inputTask = (event) => {
      this.setState({ newTask: event.target.value });
    };

    //Agregar una nueva tarea
    this.addTask = () => {
      console.log("Aded Task: ", this.state.newTask); //mostrar que tarea se agrego
      this.setState((prevState) => ({
        tasks: [
          ...prevState.tasks,
          { task: this.state.newTask, completedTask: false }, //La tarea con su texto y estado
        ],
        newTask: "", //volvemos a tener el estado newTask en blanco
      }));
    };

    //Completar tarea
    this.complete = (index) => {
      let newTasks = [...this.state.tasks];
      console.log("Completed Task: ", newTasks[index].task); //mostrar que la tarea se completo
      newTasks[index].completedTask = !newTasks[index].completedTask;
      this.setState({ tasks: newTasks });
    };

    //Eliminar una tarea
    this.dellTask = (index) => {
      let newTasks = [...this.state.tasks];
      console.log("Deleted Task: ", newTasks[index].task); //mostrar que la tearea se elimino
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
            onChange: this.inputTask,
          }}
          onAdd={this.addTask}
        />
        <TaskList>
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
        </TaskList>
      </div>
    );
  }
}
