/* eslint-disable no-unused-vars */
import React from "react";
import "./TodoLists.css";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TotalItems from "./TotalItems";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../redux/todoSlice";

// const TODOS = [
//   {
//     title: "Title Here",
//     content: (
//       <>
//         is simply dummy text of the printing and typesetting industry. Lorem
//         Ipsum has been the industry's standard dummy text ever since the 1500s,
//         when an unknown printer took a galley of type and scrambled it to make a
//         type specimen book.
//       </>
//     ),
//   },
// ];

const TodoLists = () => {
  const dispatch = useDispatch();
  const TODOS = useSelector((state) => state.todos);

  const handleDelete = () => {
    dispatch(deleteTodo());
  };

  return (
    <>
      <Box
        sx={{
          height: 600,
          backgroundColor: "#EDEDED",
          borderRadius: 4,
          overflow: "scroll",
        }}
      >
        <Box>
          <Box
            sx={{
              position: "sticky",
              bgcolor: "#EDEDED",
              top: 0,
              width: "100%",
              zIndex: 100,
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontWeight: 600,
                textAlign: "center",
                my: 2,
              }}
            >
              To Do List
            </Typography>
          </Box>
          <Box sx={{ paddingX: 2 }}>
            {TODOS.map((e, index) => {
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
                  key={index}
                >
                  <Box sx={{ width: "80%" }}>
                    <Typography variant="h6" fontWeight={600}>
                      {e.title}
                    </Typography>
                    <Typography>{e.desc}</Typography>
                  </Box>
                  <Box
                    sx={{ display: "flex", flexDirection: "column", gap: 1 }}
                  >
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
                    >
                      Edit
                    </Button>
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default TodoLists;
