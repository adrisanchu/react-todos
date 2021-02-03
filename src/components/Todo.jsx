import React from "react";

const Todo = ({ todo, todos, setTodos }) => {
  // Events
  const deleteHandler = () => {
    // go through all todos and filter out the selected todo to delete it!
    // a bit weird to need access to all todos from a single todo though...
    setTodos(todos.filter((el) => el.id !== todo.id));
  };
  const { text } = todo;
  return (
    <div className="todo">
      <li className="todo-item">{text}</li>
      <button className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteHandler} className="garbage-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
