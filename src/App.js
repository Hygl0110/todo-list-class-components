/* Cree una aplicación React usando create-react-app o una configuración similar.

Utilice componentes de clase para crear la aplicación.

Implemente una lista de tareas pendientes con las siguientes características:

Añade tareas.
Mostrar una lista de tareas.
Marque las tareas como completadas o incompletas.
Eliminar tareas.
Demostrar el uso de métodos de ciclo de vida de componentes de
clase (por ejemplo, componenteDidMount, componenteDidUpdate,
componenteWillUnmount) para gestionar el estado y los efectos secundarios. */

import "./App.css";
import Paje from "./components/pages/Page/Paje";
import React, { Component } from "react";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Paje />
      </div>
    );
  }
}
