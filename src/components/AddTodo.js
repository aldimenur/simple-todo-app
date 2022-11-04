/* eslint-disable no-unused-vars */
import Button from "@mui/material/Button";
import React, { useState } from "react";
import "./AddTodo.css";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const AddTodo = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

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
              onChange={(title) => {
                setTitle(title.target.value);
              }}
            />
            <TextField
              id="outlined-basic"
              label="Description"
              variant="outlined"
              size="small"
              fullWidth
              multiline
              rows={4}
              onChange={(desc) => {
                setDesc(desc.target.value);
              }}
            />
            <Button variant="contained" disableElevation>
              Add
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default AddTodo;
