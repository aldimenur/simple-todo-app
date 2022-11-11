/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const TotalItems = () => {
  const [totalItems, setTotalItems] = useState();
  const TODOS = useSelector((state) => state.todos);

  useEffect(() => {
    setTotalItems((totalItems) => TODOS.length);
  }, [TODOS.length]);

  return (
    <Box sx={{ p: 1 }}>
      <Typography variant="h5">Total Items : {totalItems}</Typography>
    </Box>
  );
};

export default TotalItems;
