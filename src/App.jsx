import { useState } from 'react';
import "./App.css";
import Todo from './components/Todo';
import { Todoforms } from './components/Todoforms';
import Search from './components/Search';

function App() {
  const [todos, setTodos] = useState([
    {
      id:1,
      text:"Criar funcionalidade X no sistema",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id:2,
      text:"Ir para academia",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id:3,
      text:"Estudar React",
      category: "Estudos",
      isCompleted: false,
    },
  ]);

  const [search, setSearch] = useState("");


  const addTodo = (text, category) => {

    const newTodos = [...todos, {
      id: Math.floor(Math.random()*1000),
      text, 
      category, 
      isCompleted: false, 
    }]

    setTodos(newTodos);
  };
  
  const removeTodo = (id) => {
    const newTodos = [...todos] 
    const filteredTodos = newTodos.filter((todos) => 
      todos.id !== id ? todos : null
    );
    setTodos(filteredTodos);
  }
  const completeTodo = (id) => {
    const newTodos = [...todos] 
    newTodos.map((todo) => todo.id === id ? todo.isCompleted = !todo.isCompleted :  todo);
    setTodos(newTodos);
  }
  return (<div className="app">
    <h1>Lista de Tarefas</h1>
    <Search search={search} setSearch={setSearch}/>
    <div className="todo-list">
    {todos.filter((todo) => todo.text.toLowerCase().includes(search.toLowerCase())).map((todo) => (
      <Todo key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo}/>
    ))}
      </div>
      <Todoforms addTodo={addTodo}/>
      </div>);
}

export default App;
