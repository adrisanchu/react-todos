import './App.css';
import React, { useState } from "react";
// components
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  // inputText gets the text collected by setInputText
  const [inputText, setInputText] = useState("");

  return (
    <div className="App">
    <header>
        <h1>Todo List {inputText}</h1>
    </header>
    <Form setInputText={setInputText} />
    <TodoList />
    </div>
  );
}

export default App;
