import { Rating, Stack } from "@mui/material";
import React, { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const MuiRating = () => {
  const [ratings, setRatings] = useState<number | null>(1.5);
  const handleChange = (
    _event: React.ChangeEvent<{}>,
    newValue: number | null
  ): void => {
    setRatings(newValue);
  };
  return (
    <Stack spacing={2}>
      <Rating
        value={ratings}
        onChange={handleChange}
        precision={0.5}
        size="large"
        icon={<FavoriteIcon fontSize="inherit" color="success" />}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
      />
      <Rating value={3} onChange={handleChange} size="large" readOnly />
      <Rating
        value={ratings}
        onChange={handleChange}
        size="large"
        highlightSelectedOnly
      />
    </Stack>
  );
};

export default MuiRating;
