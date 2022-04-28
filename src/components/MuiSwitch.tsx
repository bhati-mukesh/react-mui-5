import { Box, FormControlLabel, Switch } from "@mui/material";
import React, { useState } from "react";

const MuiSwitch = () => {
  const [checked, setChecked] = useState(false);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const value = event.target.checked;
    setChecked(value);
  };
  return (
    <Box>
      <FormControlLabel
        label="Dark Mode"
        control={
          <Switch value={checked} onChange={handleChange} color="secondary" />
        }
      />
    </Box>
  );
};

export default MuiSwitch;
