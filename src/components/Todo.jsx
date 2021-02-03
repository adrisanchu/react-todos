import React from "react";

const Todo = ({ todo, todos, setTodos }) => {
  // Events
  const deleteHandler = () => {
    // go through all todos and filter out the selected todo to delete it!
    // a bit weird to need access to all todos from a single todo though...
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        // go through all todos and check if completed is set to true or false
        if (item.id === todo.id) {
          return {
            // return all items changing the completed property to the opposite of the previous !
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  const { text } = todo;
  return (
    <div className="todo">
      <li className="todo-item">{text}</li>
      <button onClick={completeHandler} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteHandler} className="garbage-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
