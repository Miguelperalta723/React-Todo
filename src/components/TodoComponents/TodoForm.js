import React from 'react';

class TodoForm extends React.Component {

    constructor() {
        super();
        this.state = {
        task: ''
        };
  }

handleChanges = e => {
    this.setState({[e.target.name]: e.target.value})

}

submitTask = e => {
    e.preventDefault();
    this.props.addTask(this.state.task)
}
// clearList = e => {

// }
  
  render() {
    return (
        <div>
      <form onSubmit={this.submitTask}>
        <input
            name='task' 
            type='text'
            value={this.task}
        onChange={this.handleChanges}
        />
        <button>Add To-do</button>
      </form>
      <button onClick={this.props.clear}>Clear List</button>
      </div>
    );
  }
}

export default TodoForm;
