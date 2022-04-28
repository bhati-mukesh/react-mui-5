import MenuIcon from "@mui/icons-material/Menu";
import { Box, Drawer, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";

const MuiDrawer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <>
      <IconButton
        size="large"
        onClick={() => setIsDrawerOpen(true)}
        color="inherit"
        aria-label="logo"
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen((prev) => !prev)}
      >
        <Box p={2} width="250px" textAlign="center" role="presentation">
          <Typography variant="h6" component="div">
            Side Panel
          </Typography>
        </Box>
      </Drawer>
    </>
  );
};

export default MuiDrawer;
