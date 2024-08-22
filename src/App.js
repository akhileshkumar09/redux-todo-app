
import './App.css';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import FilterControls from './components/FilterControls';

function App() {
  return (
    <div className="App">
    <h1>Todo List</h1>
     <AddTodo/>
     <FilterControls/>
     <TodoList/>
    </div>
  );
}

export default App;
