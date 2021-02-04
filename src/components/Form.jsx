import React from "react";

const Form = ({ todos, setTodos, inputText, setInputText }) => {
  const inputTextHandler = (e) => {
    // get the input text from the form via event
    setInputText(e.target.value);
  };
  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        text: inputText,
        completed: false,
        isFadingOut: false,
        id: Math.floor(Math.random() * 1000),
      },
    ]);
    setInputText("");
  };
  return (
    <form>
      <input
        value={inputText}
        onChange={inputTextHandler}
        type="text"
        placeholder="Type something..."
        className="todo-input"
      />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
    </form>
  );
};

export default Form;
