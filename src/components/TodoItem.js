import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo } from '../store/todoSlice';

function TodoItem({todo}) {
    const dispatch  = useDispatch();


  return (
    <div>
        <li>
            <span onClick={()=>dispatch(toggleTodo(todo.id))}
            style={{textDecoration : todo.completed ? 'line-through' : 'none'}}>
                {todo.text}
            </span>
            <button onClick={()=>dispatch(deleteTodo(todo.id))}>Delete</button>
        </li>
    </div>
  )
}

export default TodoItem