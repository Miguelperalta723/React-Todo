import React from 'react';
import Todo from './Todo'

const TodoList = props => {

  
    return (
      <div className="shopping-list">
      {props.data.map(item => (
        <Todo key={item.id} item={item} toggleTask={props.toggleTask}/>
      ))}
    </div>
    );
  
}

export default TodoList;
