/* eslint-disable no-unused-vars */
import Button from "@mui/material/Button";
import React, { useState } from "react";
import "./AddTodo.css";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoSlice";
import FormGroup from "@mui/material/FormGroup";

const AddTodo = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [id, setId] = useState();

  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();

    if (title !== "" && desc !== "") {
      dispatch(
        addTodo({
          title: title,
          desc: desc,
        })
      );
      setTitle("");
      setDesc("");
    } else {
      alert("Title and Description must be filled");
    }
  };

  return (
    <>
      <Box
        sx={{
          height: "auto",
          backgroundColor: "#EDEDED",
          borderRadius: 4,
        }}
      >
        <Box sx={{ padding: 4 }}>
          <Typography
            variant="h5"
            sx={{ fontWeight: 600, textAlign: "center", mb: 2 }}
          >
            Add Todo
          </Typography>
          <form onSubmit={onSubmit}>
            <FormGroup>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <TextField
                  id="outlined-basic"
                  label="Title"
                  variant="outlined"
                  size="small"
                  fullWidth
                  value={title}
                  onChange={(title) => {
                    setTitle(title.target.value);
                  }}
                />
                <TextField
                  name="desc"
                  id="outlined-basic"
                  label="Description"
                  variant="outlined"
                  size="small"
                  fullWidth
                  multiline
                  rows={4}
                  value={desc}
                  onChange={(desc) => {
                    setDesc(desc.target.value);
                  }}
                />
                <Button
                  variant="contained"
                  disableElevation
                  type="submit"
                  onSubmit={onSubmit}
                >
                  Add
                </Button>
              </Box>
            </FormGroup>
            {/* <div>
              <input
                type="text"
                value={value}
                onChange={(event) => setValue(event.target.value)}
              />
              <button type="submit">Submit</button>
            </div> */}
          </form>
        </Box>
      </Box>
    </>
  );
};

export default AddTodo;
