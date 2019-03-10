import React, { Component } from 'react';
import Task from './task';

class TaskList extends Component {
    render() { 
        return ( 
            <ul>
                {this.props.tasks.map(task => <Task key={task.id} label={task.value}/>)}
            </ul>
         );
    }
}
 
export default TaskList;