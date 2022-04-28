import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

const MuiCards = () => {
  return (
    <Box width="300px">
      <Card>
        <CardMedia
          component="img"
          height="140px"
          image="https://source.unsplash.com/random"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            React
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas
            commodi ducimus quibusdam a consequatur minima ratione obcaecati
            repudiandae. Placeat suscipit molestiae impedit nisi fuga eum ab
            neque eius aliquam veritatis.
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="outlined" size="small">
            Share
          </Button>
          <Button variant="outlined" size="small" color="success">
            Learn more
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default MuiCards;
