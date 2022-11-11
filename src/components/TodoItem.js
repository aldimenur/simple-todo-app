import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/system/Box";
import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, editTodo } from "../redux/todoSlice";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTodo({ id: todo.id }));
  };

  const handleEdit = () => {
    dispatch(editTodo());
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
        padding: 1,
        borderRadius: 2,
        outline: "1px solid",
        my: 2,
      }}
      key={todo.id}
    >
      <Box sx={{ width: "80%" }}>
        <Typography variant="h6" fontWeight={600}>
          {todo.title}
        </Typography>
        <Typography>{todo.desc}</Typography>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <Button
          variant="contained"
          color="error"
          disableElevation
          onClick={handleDelete}
        >
          Delete
        </Button>
        <Button
          variant="contained"
          color="secondary"
          disableElevation
          onClick={handleEdit}
        >
          Edit
        </Button>
      </Box>
    </Box>
  );
};

export default TodoItem;
