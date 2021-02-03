import React from "react";

const Form = ({ setInputText }) => {
  const inputTextHandler = (e) => {
    // get the input text from the form
    setInputText(e.target.value);
  };

  return (
    <form>
      <input
        onChange={inputTextHandler}
        type="text"
        placeholder="Type something..."
        className="todo-input"
      />
      <button className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
    </form>
  );
};

export default Form;
