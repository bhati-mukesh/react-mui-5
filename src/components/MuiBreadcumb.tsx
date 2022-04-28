import { NavigateNext } from "@mui/icons-material";
import { Box, Breadcrumbs, Link, Typography } from "@mui/material";
import React from "react";

const MuiBreadcumb = () => {
  return (
    <Box m={2}>
      <Box m={2}>
        <Breadcrumbs aria-label="breadcumb">
          <Link underline="hover" href="#">
            Home
          </Link>
          <Link underline="hover" href="#">
            Catalog
          </Link>
          <Link underline="hover" href="#">
            Accessories
          </Link>
          <Typography color="text.primary">Shoes</Typography>
        </Breadcrumbs>
      </Box>
      <Box m={2}>
        <Breadcrumbs aria-label="breadcumb" separator="-">
          <Link underline="hover" href="#">
            Home
          </Link>
          <Link underline="hover" href="#">
            Catalog
          </Link>
          <Link underline="hover" href="#">
            Accessories
          </Link>
          <Typography color="text.primary">Shoes</Typography>
        </Breadcrumbs>
      </Box>
      <Box m={2}>
        <Breadcrumbs aria-label="breadcumb" separator={<NavigateNext />}>
          <Link underline="hover" href="#">
            Home
          </Link>
          <Link underline="hover" href="#">
            Catalog
          </Link>
          <Link underline="hover" href="#">
            Accessories
          </Link>
          <Typography color="text.primary">Shoes</Typography>
        </Breadcrumbs>
      </Box>
      <Box m={2}>
        <Breadcrumbs
          aria-label="breadcumb"
          separator={<NavigateNext />}
          maxItems={3}
        >
          <Link underline="hover" href="#">
            Home
          </Link>
          <Link underline="hover" href="#">
            Catalog
          </Link>
          <Link underline="hover" href="#">
            Accessories
          </Link>
          <Typography color="text.primary">Shoes</Typography>
        </Breadcrumbs>
      </Box>
      <Box m={2}>
        <Breadcrumbs
          aria-label="breadcumb"
          separator={<NavigateNext />}
          maxItems={3}
          itemsBeforeCollapse={2}
        >
          <Link underline="hover" href="#">
            Home
          </Link>
          <Link underline="hover" href="#">
            Catalog
          </Link>
          <Link underline="hover" href="#">
            Accessories
          </Link>
          <Typography color="text.primary">Shoes</Typography>
        </Breadcrumbs>
      </Box>
      <Box m={2}>
        <Breadcrumbs
          aria-label="breadcumb"
          separator={<NavigateNext />}
          maxItems={3}
          itemsAfterCollapse={2}
        >
          <Link underline="hover" href="#">
            Home
          </Link>
          <Link underline="hover" href="#">
            Catalog
          </Link>
          <Link underline="hover" href="#">
            Accessories
          </Link>
          <Typography color="text.primary">Shoes</Typography>
        </Breadcrumbs>
      </Box>
    </Box>
  );
};

export default MuiBreadcumb;
