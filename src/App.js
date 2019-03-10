import React, { Component } from "react";
import TaskList from "./components/taskList";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        
      ]
    };
  }
  addTask = event => {
    const tasks = [...this.state.tasks];
    let newTask = {
      id: tasks.length == 0 ? 0 : tasks[tasks.length - 1].id + 1,
      value: event.target.taskName.value,
      completed: false
    };
    tasks.push(newTask);
    this.setState({ tasks: tasks });
    event.target.taskName.value = "";
    event.preventDefault();
  };
  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.addTask}>
          <label htmlFor="addTask">Add task</label>
          <br />
          <input id="addTask" type="text" name="taskName" required />
          <input type="submit" value="Add" />
        </form>
        <TaskList tasks={this.state.tasks} />
      </React.Fragment>
    );
  }
}

export default App;
