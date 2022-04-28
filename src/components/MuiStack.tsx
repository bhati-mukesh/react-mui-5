import { Box, Stack, Divider } from "@mui/material";
import React from "react";

// useful for 1D arrangement

const MuiStack = () => {
  return (
    <>
      <Stack sx={{ border: "1px solid red" }}>MuiStack</Stack>
      <Stack
        spacing={2}
        divider={<Divider orientation="vertical" flexItem />}
        direction="row"
        sx={{ border: "1px solid cyan" }}
      >
        <Box
          display="flex"
          width="100px"
          height="100px"
          bgcolor="secondary.main"
          p={2}
        >
          System properties 1
        </Box>
        <Box
          display="flex"
          width="100px"
          height="100px"
          bgcolor="primary.main"
          p={2}
        >
          System properties 2
        </Box>
      </Stack>
    </>
  );
};

export default MuiStack;
