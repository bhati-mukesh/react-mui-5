import {
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
  Box,
  FormHelperText
} from "@mui/material";
import React, { useState } from "react";

const MuiRadio = () => {
  const [value, setValue] = useState<string>("");
  return (
    <Box>
      <FormControl>
        <FormLabel id="job-experience-group-label">
          Years of experience
        </FormLabel>
        <RadioGroup
          name="job-experience-group"
          aria-labelledby="job-experience-group-label"
          value={value}
          onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
            setValue(e.target.value as string)
          }
          row
        >
          <FormControlLabel
            control={<Radio size="small" color="secondary" />}
            label="0-2"
            value="0-2"
          />
          <FormControlLabel control={<Radio />} label="3-5" value="3-5" />
          <FormControlLabel
            control={<Radio size="medium" color="error" />}
            label="6-10"
            value="6-10"
          />
        </RadioGroup>
        <FormHelperText>Select YOE</FormHelperText>
      </FormControl>
    </Box>
  );
};

export default MuiRadio;
