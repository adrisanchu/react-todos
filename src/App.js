import './App.css';
import React, { useState } from "react";
// components
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  // inputText gets the text collected by setInputText
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
    <header>
        <h1>Todo List</h1>
    </header>
    <Form todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText} />
    <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
