import { Box, Grid } from "@mui/material";
import React from "react";

// useful for 2D arrangements

const MuiGrid = () => {
  return (
    <>
      <Grid container my={4}>
        <Grid item xs={6}>
          <Box bgcolor="primary.main" p={2}>
            item 1
          </Box>
        </Grid>
        <Grid item>
          <Box bgcolor="primary.main" p={2}>
            item 2
          </Box>
        </Grid>
        <Grid item>
          <Box bgcolor="primary.main" p={2}>
            item 3
          </Box>
        </Grid>
        <Grid item>
          <Box bgcolor="primary.main" p={2}>
            item 4
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default MuiGrid;
