import { Box, TextField, MenuItem } from "@mui/material";
import React, { useState } from "react";

const MuiSelect = () => {
  const [country, setCountry] = useState<string[]>([]);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const value = event.target.value;
    setCountry(typeof value === "string" ? value.split(",") : value);
  };
  return (
    <Box width="250px">
      <TextField
        label="Select Country(multi-select)"
        select
        onChange={handleChange}
        fullWidth
        SelectProps={{ multiple: true }}
        value={country}
        size="small"
        color="secondary"
        helperText="Please select atleast 1 country"
      >
        <MenuItem value="in">India</MenuItem>
        <MenuItem value="us">USA</MenuItem>
        <MenuItem value="ua">Australia</MenuItem>
      </TextField>
    </Box>
  );
};

export default MuiSelect;
