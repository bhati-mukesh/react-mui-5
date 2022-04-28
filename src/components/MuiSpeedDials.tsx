import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import React from "react";
import CopyIcon from "@mui/icons-material/FileCopyOutlined";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";
import EditIcon from "@mui/icons-material/Edit";

const MuiSpeedDials = () => {
  return (
    <SpeedDial
      ariaLabel="Navigation speed dial"
      sx={{ position: "absolute", bottom: "16px", right: "16px" }}
      icon={<SpeedDialIcon openIcon={<EditIcon />} />}
    >
      <SpeedDialAction icon={<CopyIcon />} tooltipTitle="copy" />
      <SpeedDialAction icon={<PrintIcon />} tooltipTitle="print" />
      <SpeedDialAction icon={<ShareIcon />} tooltipTitle="share" />
    </SpeedDial>
  );
};

export default MuiSpeedDials;
