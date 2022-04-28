import { Link, Stack, Typography } from "@mui/material";
import React from "react";

const MuiLink = () => {
  return (
    <Stack spacing={2} m={4} direction="row">
      <Link href="#">Link</Link>
      <Link href="#" color="secondary">
        Secondary
      </Link>
      <Link href="#" underline="hover">
        Underline Hover
      </Link>
      <Link href="#" underline="none">
        Underline None
      </Link>
      <Link href="#" variant="body2">
        body 2 variant
      </Link>
      <Typography variant="h6">
        <Link href="#">Wrapped by typography</Link>
      </Typography>
    </Stack>
  );
};

export default MuiLink;
