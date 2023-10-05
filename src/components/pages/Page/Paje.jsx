import React, { Component } from "react";
import TodoList from "../../organisms/TodoList/TodoList";

export default class Paje extends Component {
  render() {
    return (
      <div className="paje">
        {/* Header */}
        <div className="header">
          <h3>Header</h3>
          <h1>To-do List</h1>
        </div>

        {/* Main */}
        <div className="main">
          <h3>main</h3>
          <TodoList />
        </div>

        {/* Footer */}
        <div className="footer">
          <h3>footer</h3>
        </div>
      </div>
    );
  }
}
