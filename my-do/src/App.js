import React, { Fragment, useState, useRef, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid'
import { Todolist } from "./components/Todolist";
import './App.css';
const KEY = 'todoApp.todos';

//export function App() {
export function App() {
  const [todos, setTodos] = useState([
    { id: 1, task: 'Tarea 1', completed: false }
  ]);
  const todoTaskRef = useRef();

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(KEY));
    if (storedTodos) {
      setTodos(storedTodos);
    }

  }, [])
  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(todos))
  },
    [todos]);

  const toggleTodo = (id) => {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.completed = !todo.completed;
    setTodos(newTodos);
  };
  const handleTodoAdd = () => {
    const task = todoTaskRef.current.value;
    if (task === '') return;
    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), task, completed: false }]
    })
    todoTaskRef.current.value = null;
  };
  const handleClearAll = () => {
    const newTodos = todos.filter((todo) => !todo.completed)
    setTodos(newTodos);
  }
  return (
    <Fragment>
      <div className="App">
        <button className="App-Logout" onClick={handleClearAll}>Cerrar sesión</button>
        <input className="App-find" type='text' placeholder='🔍 Busca lo que quieras' />
        <textarea className="App-input" ref={todoTaskRef}  placeholder='Añade una nota...'></textarea>
        <button className="App-add" onClick={handleTodoAdd}>➕</button>
        <button className="App-clear" onClick={handleClearAll}>🗑️</button>
        <Todolist todos={todos} toggleTodo={toggleTodo} />
        <div className="App-text">Te quedan {todos.filter((todo) => !todo.completed).length} tareas por terminar </div>
      </div>
    </Fragment>
  );
}

export default App;
/*
return (
    <div className="App">
      <header className="App-header">

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          target="_blank"
          rel="noopener noreferrer"
        >

        </a>
      </header>
    </div>
  );
}

export default App;
*/
/*
import React, {Fragment,useState,useRef,useEffect} from "react";
import {v4 as uuidv4} from 'uuid'
import { Todolist } from "./components/Todolist";
const KEY = 'todoApp.todos';
*/
/*
export function App(){
    const [todos,setTodos] = useState([
        {id:1, task: 'Tarea 1',completed:false}
    ]);
    const todoTaskRef = useRef();

    useEffect(()=> {
        const storedTodos = JSON.parse(localStorage.getItem(KEY));
        if(storedTodos){
            setTodos(storedTodos);
        }

    },[])
    useEffect(() => {
      localStorage.setItem(KEY, JSON.stringify(todos))
    },
    [todos]);

    const toggleTodo = (id) => {
        const newTodos = [...todos];
        const todo = newTodos.find((todo) => todo.id === id);
        todo.completed = !todo.completed;
        setTodos(newTodos);
    };
    const handleTodoAdd = () =>{
    const task = todoTaskRef.current.value;
    if (task === '') return;
    setTodos((prevTodos) => {
        return [...prevTodos, {id: uuidv4(),task,completed:false} ]
    })
    todoTaskRef.current.value=null;
    };
    const handleClearAll = () => {
        const newTodos = todos.filter((todo)=> !todo.completed)
        setTodos(newTodos);
    }
    return (
        <Fragment>
            <Todolist todos={todos} toggleTodo = {toggleTodo} />
            <input className = 'input' ref={todoTaskRef} type='text' placeholder='Añade una nota'/>
            <button onClick={handleTodoAdd}>➕</button>
            <button onClick = {handleClearAll}>🗑️</button>
            <div>Te quedan {todos.filter((todo)=> !todo.completed).length} tareas por terminar </div>
        </Fragment>
    );
}

export default App;
*/