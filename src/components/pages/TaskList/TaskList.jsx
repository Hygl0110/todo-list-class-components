import "./TaskList.css";

import Tasks from "../../organisms/Tasks/Tasks";

import React, { Component } from "react";

export default class TaskList extends Component {
  render() {
    return (
      <div className="taskList">
        {/* Header */}
        <div className="header">
          <h1>Task-List</h1>
        </div>

        {/* Main */}
        <div className="main">
          <h2>Main</h2>
          <Tasks></Tasks>
        </div>

        {/* Footer */}
        <div className="footer">
          <h3>Footer</h3>
        </div>
      </div>
    );
  }
}
