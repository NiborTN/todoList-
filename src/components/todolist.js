import React from "react";

//component import
import Todo from "./Todo";

const TodoList = ({ setTodos, todos, editText, setEditText }) => {
  return (
    <section className="task-list">
      <h2>Tasks</h2>
      <div id="tasks">
        {todos.map((todo) => (
          <Todo
            setTodos={setTodos}
            todo={todo}
            todos={todos}
            text={todo.text}
            key={todo.id}
          />
        ))}
      </div>
    </section>
  );
};

export default TodoList;
