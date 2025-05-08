import React, { Component } from "react";

import Form from "./Form";
import Errors from "./Errors";
import Tasks from "./Tasks";

import "./Main.css";

export default class Main extends Component {
  /*
  essa é a forma antiga de fazer:

  constructor(props) {
    super(props);

    this.state = {
        newTask: "",
    };

    this.inputMudou = this.inputMudou.bind(this); // salvar o this
  }
  */

  // usando class field - mais moderno
  state = {
    newTask: "",
    tasks: [],
    index: -1,
    errors: [],
  };

  componentDidMount() {
    const tasks = JSON.parse(localStorage.getItem("tasks"));

    if (!tasks) return;

    this.setState({ tasks });
  }

  componentDidUpdate(prevProps, prevState) {
    const { tasks } = this.state;

    if (tasks === prevState.tasks) return;

    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  handleChange = (e) => {
    this.setState({
      newTask: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { tasks, index } = this.state;
    let { newTask } = this.state;
    newTask = newTask.trim();

    this.setState({ errors: [] }, () => {
      if (newTask === "") {
        this.handleErrors(`Não pode estar vazio!`);
        return;
      }

      if (tasks.indexOf(newTask) !== -1) {
        this.handleErrors(`Essa tarefa já existe!`);
        return;
      }

      const newsTasks = [...tasks];

      if (index === -1) {
        this.setState({
          tasks: [...newsTasks, newTask],
          newTask: "",
          errors: [],
        });
      } else {
        const newsTasks = [...tasks];
        newsTasks[index] = newTask;

        this.setState({
          tasks: [...newsTasks],
          index: -1,
          newTask: "",
          errors: [],
        });
      }
    });
  };

  handleEdit = (e, index) => {
    const { tasks } = this.state;

    this.setState({
      index: index,
      newTask: tasks[index],
    });
  };

  handleDelete = (e, index) => {
    const { tasks } = this.state;
    const newsTasks = [...tasks];
    newsTasks.splice(index, 1);

    this.setState({
      tasks: newsTasks,
    });
  };

  handleErrors = (msg) => {
    const { errors } = this.state;

    if (errors.indexOf(msg) !== -1) return;

    const errorsArr = [...errors];
    this.setState({
      errors: [...errorsArr, msg],
    });
  };

  render() {
    const { newTask, tasks, errors } = this.state;

    return (
      <div className="main">
        <h1>Lista de tarefas</h1>

        <Form
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          newTask={newTask}
        />

        <Errors errors={errors} />

        <Tasks
          tasks={tasks}
          handleEdit={this.handleEdit}
          handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}
