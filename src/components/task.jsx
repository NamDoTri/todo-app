import React, { Component } from 'react';
class Task extends Component {
    render() { 
        return <li><input type="checkbox"/>{this.props.label}</li> ;
    }
}
 
export default Task;