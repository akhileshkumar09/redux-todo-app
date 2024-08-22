import React from 'react'
import { useSelector } from 'react-redux'
import TodoItem from './TodoItem'

function TodoList() {
    const todos = useSelector((state) =>{
        console.log(state)
        return state.todos.todos});
    const filter = useSelector((state) => state.todos.filter);;

    const filterTodos = todos.filter((todo)=>{
        if(filter === 'completed') return todo.completed;
        if(filter === 'incompleted') return !todo.completed;
        return true;
    })
  return (
    <div>
        <ul>
            {filterTodos.map((todo)=>(
                <TodoItem key={todo.id} todo={todo}/>
            ))}
        </ul>
    </div>
  )
}

export default TodoList