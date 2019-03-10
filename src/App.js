import React, { Component } from "react";
import TaskList from "./components/taskList";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        { id: 0, value: "Buy chicken", completed: true },
        { id: 1, value: "Play games", completed: false }
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
  completeTask = () =>{
    console.log("task completed")
  }
  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.addTask}>
          <label htmlFor="addTask">Add task</label>
          <br />
          <input id="addTask" type="text" name="taskName" required />
          <input type="submit" value="Add" />
        </form>
        <TaskList tasks={this.state.tasks} onComplete={this.completeTask}/>
      </React.Fragment>
    );
  }
}

export default App;
