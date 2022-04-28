import {
  Button,
  Stack,
  IconButton,
  ButtonGroup,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import UploadIcon from "@mui/icons-material/Upload";
import EventIcon from "@mui/icons-material/Event";
import React, { useState } from "react";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";

const MuiButtons = () => {
  const [formats, setFormats] = useState<string | null>(null);
  const handleFormatChange = (
    _event: React.MouseEvent<HTMLElement>,
    updateFormats: string | null
  ): void => {
    setFormats(updateFormats);
  };
  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction="row">
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
        <Button variant="text">Text</Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <Button variant="contained" color="primary">
          primary
        </Button>
        <Button variant="contained" color="secondary">
          secondary
        </Button>
        <Button variant="contained" color="error">
          error
        </Button>
        <Button variant="contained" color="success">
          success
        </Button>
        <Button variant="contained" color="info">
          info
        </Button>
        <Button variant="contained" color="warning">
          warning
        </Button>
      </Stack>
      <Stack display="block" spacing={2} direction="row">
        <Button variant="contained" color="primary" size="large">
          Large
        </Button>
        <Button variant="contained" color="primary" size="medium">
          Medium
        </Button>
        <Button variant="contained" color="primary" size="small">
          Small
        </Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <Button variant="contained" color="primary" startIcon={<SendIcon />}>
          Send
        </Button>
        <Button variant="contained" color="primary" endIcon={<UploadIcon />}>
          Upload
        </Button>
        <IconButton aria-label="calendar" color="success" size="medium">
          <EventIcon />
        </IconButton>
      </Stack>
      <Stack spacing={2} direction="row">
        <Button
          variant="contained"
          color="primary"
          size="medium"
          disableElevation
        >
          Disable Elevation
        </Button>
        <Button variant="contained" color="primary" size="medium" disableRipple>
          Disable Ripple
        </Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <ButtonGroup
          orientation="horizontal"
          size="small"
          aria-label="alignment button group"
          color="secondary"
        >
          <Button>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>
      <Stack spacing={2} direction="row">
        <ToggleButtonGroup
          aria-label="text formatting"
          value={formats}
          onChange={handleFormatChange}
          size="small"
          color="error"
          orientation="horizontal"
          exclusive
        >
          <ToggleButton value="bold" aria-label="bold">
            <FormatBoldIcon />
          </ToggleButton>
          <ToggleButton value="italic" aria-label="italic">
            <FormatItalicIcon />
          </ToggleButton>
          <ToggleButton value="underlined" aria-label="underlined">
            <FormatUnderlinedIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  );
};

export default MuiButtons;
