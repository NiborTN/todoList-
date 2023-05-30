import React from "react";

const Form = ({ inputText, setInputText, setTodos, todos }) => {
  const inputTextHandler = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, edit: false, id: Date.now() },
    ]);
    setInputText("");
  };

  return (
    <form id="new-task-form" action="">
      <input
        value={inputText}
        onChange={inputTextHandler}
        type="text"
        id="new-task-input"
        placeholder="what do you have planned"
      />
      <input
        onClick={submitTodoHandler}
        type="submit"
        id="new-task-submit"
        value="Add task"
      />
    </form>
  );
};

export default Form;
