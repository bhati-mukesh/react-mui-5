import { Stack, TextField, InputAdornment } from "@mui/material";
import React, { useState } from "react";

const MuiTextFields = () => {
  const [value, setValue] = useState<string>("");
  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction="row">
        <TextField label="Name" variant="outlined" />
        <TextField label="Name" variant="filled" />
        <TextField label="Name" variant="standard" />
      </Stack>
      <Stack spacing={2} direction="row">
        <TextField label="undefined" variant="outlined" />
        <TextField
          label="medium secondary"
          size="medium"
          variant="outlined"
          color="secondary"
        />
        <TextField
          label="small waning"
          size="small"
          variant="outlined"
          color="warning"
        />
      </Stack>
      <Stack spacing={2} direction="row">
        <TextField label="username" variant="outlined" required />
        <TextField
          label="password"
          variant="outlined"
          type="password"
          required
          helperText="Do Not Share Your Password With Anyone!"
        />
        <TextField label="Disabled Field" variant="outlined" disabled />
        <TextField
          label="Read Only"
          variant="outlined"
          InputProps={{ readOnly: true }}
        />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField
          label="Amount"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          label="Weight"
          InputProps={{
            endAdornment: <InputAdornment position="end">Kg</InputAdornment>,
          }}
        />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField
          label="Form Input"
          value={value}
          required
          onChange={(e) => setValue(e.target.value)}
          error={!value}
          helperText={
            !value ? "Required" : "Do not share your password with anyone"
          }
        />
      </Stack>
    </Stack>
  );
};

export default MuiTextFields;
