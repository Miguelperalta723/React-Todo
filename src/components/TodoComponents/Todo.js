import React from 'react';

import './Todo.css'

const Todo = props => {
  console.log(props.task)
  
    return (
      <div className={`Task${props.item.completed ? ' completed' : ''}`}
        onClick={() => props.toggleTask(props.item.id)}>
          {props.item.task}
      </div>
    );
  
}

export default Todo;
