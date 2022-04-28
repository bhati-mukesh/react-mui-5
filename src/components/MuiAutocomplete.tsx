import { Autocomplete, Stack, TextField } from "@mui/material";
import React, { useState } from "react";

const skills = ["HTML", "CSS", "JS", "REACTJS", "REDUX", "TYPESCRIPT"];
type Skill = {
  id: number;
  label: string;
};
const skillsOptions = skills.map((skill, id) => ({ id, label: skill }));

const MuiAutocomplete = () => {
  const [value, setsValue] = useState<string | null>(null);
  const [skillValue, setSkillValue] = useState<Skill | null>(null);
  const handleChange = (_event: any, newValue: string | null) => {
    setsValue(newValue);
  };
  return (
    <Stack spacing={4} direction="row">
      <Stack width="250px">
        <Autocomplete
          options={skills}
          renderInput={(params) => <TextField {...params} label="Skills" />}
          value={value}
          onChange={handleChange}
        />
      </Stack>
      <Stack width="250px">
        <Autocomplete
          options={skills}
          renderInput={(params) => (
            <TextField {...params} label="Skills(freesolo)" />
          )}
          value={value}
          onChange={handleChange}
          freeSolo
        />
      </Stack>
      <Stack width="250px">
        <Autocomplete
          options={skillsOptions}
          renderInput={(params) => <TextField {...params} label="Skills" />}
          value={skillValue}
          onChange={(_event: any, newValue: Skill | null): void =>
            setSkillValue(newValue)
          }
        />
      </Stack>
    </Stack>
  );
};

export default MuiAutocomplete;
