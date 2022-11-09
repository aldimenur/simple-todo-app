/* eslint-disable no-unused-vars */
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import React, { useState } from "react";

const TotalItems = () => {
  const [totalItems, setTotalItems] = useState(0);

  return (
    <Box sx={{ p: 1 }}>
      <Typography variant="h5">Total Items : {totalItems}</Typography>
    </Box>
  );
};

export default TotalItems;
