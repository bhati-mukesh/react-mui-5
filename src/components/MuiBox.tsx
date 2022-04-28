import { Box } from "@mui/material";
import React from "react";

// in box component we can use sx and system properties, theme colors directly
// which are not possible if we use div/span or any other tag directly

const MuiBox = () => {
  return (
    <Box>
      <Box component="span">Box Component as Span</Box>
      <Box
        sx={{
          backgroundColor: "primary.main",
          color: "white",
          height: "100px",
          width: "100px",
          padding: "16px",
          "&:hover": {
            backgroundColor: "primary.light",
            cursor: "pointer",
          },
        }}
      >
        Box Component
      </Box>
      <Box
        display="flex"
        width="100px"
        height="100px"
        bgcolor="secondary.main"
        p={2}
      >
        System properties
      </Box>
    </Box>
  );
};

export default MuiBox;
