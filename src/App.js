import { Container, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { hot } from "react-hot-loader/root";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import data from "./data.json";
const App = () => {
  const [todos, setTodos] = useState([...data]);
  const [edit, setEdit] = useState([]);
  return (
    <>
      <Container maxWidth="md">
        <Typography variant="h2" align="center">
          Todo App
        </Typography>

        <NewTodo
          setTodos={setTodos}
          todos={todos}
          edit={edit}
          setEdit={setEdit}
        />
        <Todos
          todos={todos}
          setTodos={setTodos}
          setEdit={setEdit}
          edit={edit}
        />
      </Container>
    </>
  );
};

export default hot(App);
