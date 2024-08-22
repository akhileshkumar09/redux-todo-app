import {createSlice} from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name : 'todos',
    initialState: {
        todos: [], // Array to hold todo items
        filter: 'all', // Default filter value
      },
    reducers : {
        addTodo : (state, action)=>{
            state.todos.push({id : Date.now(), text : action.payload, completed : false});
        },
        toggleTodo : (state, action)=>{
            const todo = state.todos.find((todo)=>todo.id === action.payload);
            if(todo){
                todo.completed = !todo.completed;
            }
        },
        deleteTodo : (state, action)=>{
            state.todos = state.todos.filter((todo)=> todo.id !== action.payload);
        },
        setFilter : (state, action)=>{
            state.filter = action.payload;
        }
    }
})

export const {addTodo, toggleTodo, deleteTodo, setFilter} = todoSlice.actions;
export default todoSlice.reducer;