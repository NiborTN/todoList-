import React from "react";

const Todo = ({ text, todo, todos, setTodos }) => {
  //events
  var edit = text;
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  const editHandler = (e) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          if (!item.edit) {
            return {
              ...item,
              edit: !item.edit,
            };
          } else {
            e.preventDefault();
            return {
              ...item,
              text: edit,
              edit: !item.edit,
            };
          }
        }
        return item;
      })
    );
  };

  const editTextHandler = (e) => {
    console.log(e.target.value);
    edit = e.target.value;
  };

  return (
    <div className={`task ${todo.completed ? "completed" : ""}`}>
      <div className="ckbox">
        <input
          type="checkbox"
          className="check"
          name="task-check"
          id={todo.id}
          onClick={completeHandler}
        />
        <label className="check-label" htmlFor={todo.id}></label>
      </div>
      <div className="content">
        <textarea
          className="text"
          onChange={editTextHandler}
          readOnly={!todo.edit}
          defaultValue={!todo.edit ? text : edit}
        />
      </div>
      <div className="actions">
        <button
          className="edit"
          onClick={editHandler}
          disabled={todo.completed}
        >
          {!todo.edit ? "Edit" : "save"}
        </button>
        <button
          className="delete"
          onClick={deleteHandler}
          disabled={todo.completed}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Todo;
