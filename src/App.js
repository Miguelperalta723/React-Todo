import React from 'react'

import TodoForm from './components/TodoComponents/TodoForm'
import TodoList from './components/TodoComponents/TodoList'


const data = [
  {
    task: '',
    id: Date.now(),
    completed: false
  }
];

class App extends React.Component {

  constructor() {
    super();
    this.state = {
        data: data
    };
}


addTask = taskName => {
    const newTask = {
      task: taskName,
      id: Date.now(),
      completed: false
    };

    this.setState({
      data: [...this.state.data, newTask]
    });
  };

toggleTask = id => {
    // console.log(id);
    // Update groceries on our state object
    // use this.setState
    // loop through the arr
    // find which element we clicked update the "pruchased" property
    this.setState({
      data: this.state.data.map(task => {
        if (task.id === id) {
          return {
            ...task,
            // Same as:
            // name: item.name,
            // id: item.id,
            // purchased: item.purchased,
            completed: !task.completed
          };
        } else {
          return task;
        }
      })
    });
  };
  
  clearList = () => {
    console.log('im working')
    this.setState({
      data: this.state.data.filter(item => !item.completed)
    });
  };



  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTask={this.addTask}  clear={this.clearList} />
        <TodoList data={this.state.data} toggleTask={this.toggleTask}/>
      </div>
    );
  }
}

export default App;
