import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import {
  Box,
  FormControlLabel,
  Checkbox,
  FormControl,
  FormLabel,
  FormGroup,
} from "@mui/material";
import React, { useState } from "react";

const MuiCheckbox = () => {
  const [acceptTnc, setAcceptTnc] = useState(false);
  const [skills, setSkills] = useState<string[]>([]);
  const onChangeHandler = (_e: React.ChangeEvent<HTMLInputElement>): void => {
    setAcceptTnc((prev) => !prev);
  };
  const handleSkillChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const index = skills.indexOf(event.target.value);
    if (index === -1) {
      setSkills([...skills, event.target.value]);
    } else {
      setSkills([...skills.filter((skill) => skill !== event.target.value)]);
    }
  };
  return (
    <Box>
      <Box>
        <FormControlLabel
          label="I accept terms and conditions"
          control={
            <Checkbox
              checked={acceptTnc}
              onChange={onChangeHandler}
              size="small"
              color="secondary"
            />
          }
        ></FormControlLabel>
      </Box>
      <Box>
        <Checkbox
          icon={<BookmarkBorderIcon />}
          checked={acceptTnc}
          checkedIcon={<BookmarkIcon />}
          onChange={onChangeHandler}
        />
      </Box>
      <Box>
        <FormControl>
          <FormLabel>Skills</FormLabel>
          <FormGroup>
            <FormControlLabel
              label="HTML"
              control={
                <Checkbox
                  value="html"
                  checked={skills.includes("html")}
                  onChange={handleSkillChange}
                />
              }
            />
            <FormControlLabel
              label="CSS"
              control={
                <Checkbox
                  value="css"
                  checked={skills.includes("css")}
                  onChange={handleSkillChange}
                />
              }
            />
            <FormControlLabel
              label="JS"
              control={
                <Checkbox
                  value="js"
                  checked={skills.includes("js")}
                  onChange={handleSkillChange}
                />
              }
            />
          </FormGroup>
        </FormControl>
      </Box>
    </Box>
  );
};

export default MuiCheckbox;
