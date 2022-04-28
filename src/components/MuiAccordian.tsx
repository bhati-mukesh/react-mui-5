import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionSummary,
  Box,
  Typography,
  AccordionDetails,
} from "@mui/material";
import React, { useState } from "react";

const MuiAccordian = () => {
  const [selectedAccordian, setSelectedAccordian] = useState<string | null>(
    null
  );
  const handleChange = (isExpanded: boolean, panel: string): void => {
    console.log({ isExpanded, panel });
    if (selectedAccordian && !isExpanded) {
      setSelectedAccordian(null);
    } else {
      setSelectedAccordian(panel);
    }
  };
  return (
    <Box>
      <Accordion
        expanded={selectedAccordian === "panel1"}
        onChange={(_event: any, isExpanded: boolean) =>
          handleChange(isExpanded, "panel1")
        }
      >
        <AccordionSummary
          id="panel1-header"
          aria-controls="panel1-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis odit
          error nesciunt quibusdam tenetur id excepturi consectetur maiores ea
          numquam praesentium maxime eveniet est, voluptatum hic at provident.
          Eligendi, doloribus.
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={selectedAccordian === "panel2"}
        onChange={(_event: any, isExpanded: boolean) =>
          handleChange(isExpanded, "panel2")
        }
      >
        <AccordionSummary
          id="panel2-header"
          aria-controls="panel2-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis odit
          error nesciunt quibusdam tenetur id excepturi consectetur maiores ea
          numquam praesentium maxime eveniet est, voluptatum hic at provident.
          Eligendi, doloribus.
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={selectedAccordian === "panel3"}
        onChange={(_event: any, isExpanded: boolean) =>
          handleChange(isExpanded, "panel3")
        }
      >
        <AccordionSummary
          id="panel3-header"
          aria-controls="panel3-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Accordion 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis odit
          error nesciunt quibusdam tenetur id excepturi consectetur maiores ea
          numquam praesentium maxime eveniet est, voluptatum hic at provident.
          Eligendi, doloribus.
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default MuiAccordian;
