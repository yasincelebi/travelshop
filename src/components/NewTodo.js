/* eslint-disable react/prop-types */
/* eslint-disable no-debugger */
import {
  Button,
  Checkbox,
  Grid,
  LinearProgress,
  Slider,
} from "@material-ui/core";
import React, { useEffect, useRef, useState } from "react";
import TextField from "@material-ui/core/TextField";
import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";
const NewTodo = ({ setTodos, todos, edit, setEdit }) => {
  const inputEl = useRef(0);
  const textRef = useRef(0);
  const [dateLocal, setDateLocal] = useState("2021-05-29");
  const [diff, setDiff] = useState();
  const [range, setrange] = useState(0);
  const [bilmem, setBilmem] = useState(false);
  const [textInput, setTextInput] = useState("");
  const [slider, setSlider] = useState(0);
  const changePercent = (e, n) => {
    setSlider(n);
    setrange(n);
  };
  useEffect(() => {
    if (edit[0]) {
      setTextInput(edit[0].name);
      setDateLocal(edit[0].date);
      setrange(edit[0].progress);
      setSlider(edit[0].progress);
      inputEl.current.value = edit[0].progress;
      setBilmem(edit[0].status);
    }
    console.log(textRef);
  }, [edit, dateLocal]);
  const handleDateChange = (date) => {
    let formatted = `${new Date().getFullYear()}-${
      new Date().getMonth() + 1
    }-${new Date().getDate()}`;
    let a = Date.parse(formatted) - Date.parse(date.target.value);
    setDateLocal(date.target.value);
    if (a / 86400000 > 0) {
      setDiff("You should not select an old date");
      document.querySelector(".diff").style.display = "none";
    } else {
      setDiff(Math.abs(parseInt(a / 86400000)));
      document.querySelector(".diff").style.display = "inline-block";
    }
  };
  const handleTextInput = (e) => {
    setTextInput(e.target.value);
  };
  const handleReset = (e) => {
    setEdit([]);
    setTextInput("");
    setSlider(0);
    setBilmem(false);
    e.preventDefault();
    e.target.reset();
    setDateLocal("2021-05-29");
    setDiff("");
    inputEl.current.value = 0;
    setrange(0);
  };
  const handleCheck = () => {
    setBilmem(!bilmem);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const same = [...todos].find((f) => f.if === todos.length + 1);
    if (same !== undefined) {
      setTodos([
        ...todos,
        {
          id: todos.length + 2,
          name: textInput,
          status: bilmem,
          progress: slider,
          date: dateLocal,
        },
      ]);
    } else {
      setTodos([
        ...todos,
        {
          id: todos.length + 1,
          name: textInput,
          status: bilmem,
          progress: slider,
          date: dateLocal,
        },
      ]);
    }
    handleReset(e);
  };
  const changePercentInput = (e) => {
    setSlider(e.target.value);
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <Grid
        container
        direction="row"
        spacing={3}
        justify="center"
        alignItems="center"
        className="newTodo"
      >
        <Grid item xl={3}>
          <TextField
            id="outlined-basic"
            label="New Todo Name"
            name="newtodo-textinput"
            ref={textRef}
            onChange={handleTextInput}
            value={textInput}
            variant="outlined"
            className="newtodo-textinput"
          />
        </Grid>
        <Grid item xl={3} className="diff" style={{ display: "none" }}>
          {diff} day{diff > 1 ? "s" : null} left
        </Grid>
        <Grid item xl={3}>
          <TextField
            id="date"
            label="Date for to do"
            type="date"
            onChange={handleDateChange}
            value={dateLocal}
            className="asd"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>

        <Grid item xl={3} className="percent">
          % {slider ? slider : 0}
          <Slider
            defaultValue={3}
            onChange={changePercent}
            aria-labelledby="continuous-slider"
            ref={inputEl}
            min={0}
            max={100}
            value={slider}
          />
          <TextField
            id="outlined-basic"
            label={slider + "%"}
            name="newtodo-textinput"
            onChange={changePercentInput}
            value={slider}
            variant="outlined"
            className="newtodo-textinput"
          />
        </Grid>

        <Grid item xl={3} style={{ textAlign: "center" }}>
          Status
          <Checkbox
            color="primary"
            inputProps={{ "aria-label": "secondary checkbox" }}
            checked={bilmem}
            onChange={handleCheck}
            style={{ width: "90%" }}
          />
        </Grid>

        <div className="form-buttons">
          <Button
            type="submit"
            disabled={textInput.length > 0 ? false : true}
            variant="contained"
            color="primary"
            size="small"
            startIcon={<SaveIcon />}
          >
            Add list
          </Button>
          <Button
            onClick={handleReset}
            color="secondary"
            variant="contained"
            startIcon={<DeleteIcon />}
          >
            Reset Form
          </Button>
        </div>
      </Grid>
    </form>
  );
};

export default NewTodo;
