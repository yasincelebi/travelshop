/* eslint-disable react/prop-types */
import {
  Button,
  Checkbox,
  Container,
  Grid,
  LinearProgress,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Confirm from "./Confirm";
const Todo = ({ todo, setEdit, edit, setTodos }) => {
  const [todoArray, settodoArray] = useState([...todo]);
  const handleComplete = (id) => {
    let updateTodos = todoArray.map((todo) => {
      console.log(id);
      if (todo.id === id) {
        todo.status = !todo.status;
      }
      return todo;
    });
    settodoArray(updateTodos);
  };
  useEffect(() => {
    settodoArray(todo);
  }, [todo]);
  const handleDelete = (id) => {
    const removedTodo = [...todoArray].filter((todo) => todo.id !== id);
    settodoArray(removedTodo);
  };
  const handleEdit = (id) => {
    const editTodo = [...todoArray].filter((todo) => todo.id === id);
    const newTodo = [...todoArray].filter((todo) => todo.id !== id);
    console.log(editTodo);
    setTodos(newTodo);
    setEdit(editTodo);
  };
  return (
    <div>
      {todoArray.map((e, i) => (
        <div key={i}>
          <Grid container spacing={1} direction="row" className="deneme">
            <Grid item xs={5}>
              <div
                className="asd"
                style={{
                  textDecoration: e.status ? "line-through" : "none",
                }}
              >
                {e.name}
              </div>
            </Grid>
            <Grid item md={7} className="edits">
              <Grid
                container
                className="todo-items"
                spacing={1}
                direction="row"
                justify="center"
                alignItems="center"
              >
                <Grid item xl={2}>
                  <Checkbox
                    onChange={() => handleComplete(e.id)}
                    color="primary"
                    inputProps={{ "aria-label": "secondary checkbox" }}
                    checked={e.status ? true : false}
                  />
                </Grid>
                <Grid item xs={2}>
                  <div className="status">{e.progress} %</div>
                </Grid>
                <Grid item xs={2}>
                  <div className="date">{e.date}</div>
                </Grid>
                <Grid item md={2}>
                  <Button
                    onClick={() => handleEdit(e.id)}
                    variant="contained"
                    color="primary"
                  >
                    Edit
                  </Button>
                </Grid>
                <Grid item xs={2}>
                  <Confirm agree={() => handleDelete(e.id)} />
                </Grid>
                <LinearProgress variant="determinate" value={3} />
              </Grid>
            </Grid>
          </Grid>
        </div>
      ))}
    </div>
  );
};

export default Todo;
