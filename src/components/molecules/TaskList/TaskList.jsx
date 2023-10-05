import React, { Component } from "react";

export default class TaskList extends Component {
  componentDidMount() {
    console.log("El componente TaskList se ha desmontado");
  }
  componentWillMount() {
    console.log("El componente TaskList se ha montado");
  }
  componentDidUpdate() {
    console.log("El componente TaskList se ha actualizado");
  }

  render() {
    return <ul {...this.props}></ul>;
  }
}
