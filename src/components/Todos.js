/* eslint-disable react/prop-types */
import React from "react";
import Todo from "./Todo";

const Todos = ({ todos, setEdit, edit, setTodos }) => {
  return (
    <div>
      <Todo todo={todos} setEdit={setEdit} edit={edit} setTodos={setTodos} />
    </div>
  );
};

export default Todos;
