import "./Paje.css";
import React, { Component } from "react";
import TodoList from "../../organisms/TodoList/TodoList";

export default class Paje extends Component {
  render() {
    return (
      <div className="paje">
        {/* Header */}
        <div className="header">
          <h1>To-do List</h1>
        </div>

        {/* Main */}
        <div className="main">
          <TodoList />
        </div>

        {/* Footer */}
        <div className="footer">
          <p>by Daniel Cardona.</p>
          <a href="https://www.facebook.com/dhcardonaj">facebook</a>
        </div>
      </div>
    );
  }
}
