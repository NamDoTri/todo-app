import React, { Component } from "react";
import Task from "./task";

class TaskList extends Component {
    constructor(props){
        super(props);
    }
  render() {
    return (
      <React.Fragment>
        {" "}
        {this.props.tasks.map(task => (
          <Task key={task.id} label={task.value} status={task.completed} onComplete={()=>this.props.onComplete(task)} onDelete={()=>this.props.onDelete(task.id)}/>
        ))}
      </React.Fragment>
    );
  }
}

export default TaskList;
