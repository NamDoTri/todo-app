import React, { Component } from "react";
class Task extends Component {
  render() {
    return (
      <tr>
        <td>
          {this.props.label}
        </td>
        <td>
          {" "}
          <button onClick={this.props.onComplete}>{this.props.status ? "✓" : "Done"}</button>
        </td>{" "}
        <td>
          <button>Delete</button>
        </td>
      </tr>
    );
  }
}

export default Task;
