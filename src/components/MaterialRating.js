import React, { useState } from 'react';
import { Stack, Rating } from '@mui/material';

const MaterialRating = () => {
  const [rating, setRating] = useState(null);
  console.log({ rating });
  const handleChange = (e, updatedRating) => {
    setRating(updatedRating);
  };
  return (
    <Stack spacing={2}>
      <Rating value={rating} onChange={handleChange} />
    </Stack>
  );
};

export default MaterialRating;
