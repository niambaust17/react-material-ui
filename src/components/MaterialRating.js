import React, { useState } from 'react';
import { Stack, Rating } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const MaterialRating = () => {
  const [rating, setRating] = useState(null);
  console.log({ rating });
  const handleChange = (e, updatedRating) => {
    setRating(updatedRating);
  };
  return (
    <Stack spacing={2}>
      <Rating value={rating} onChange={handleChange} precision={0.5} />
      <Rating
        value={rating}
        onChange={handleChange}
        precision={0.5}
        icon={<FavoriteIcon fontSize="inherit" color="error" />}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
        // readOnly
        highlightSelectedOnly
      />
    </Stack>
  );
};

export default MaterialRating;
