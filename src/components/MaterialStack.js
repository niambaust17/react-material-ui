import React from 'react';
import { Box, Stack, Divider } from '@mui/material';

const MaterialBox = () => {
  return (
    <Stack
      sx={{ border: '1px solid' }}
      direction="row"
      spacing={2}
      divider={<Divider orientation="vertical" flexItem />}
    >
      <Box
        sx={{
          backgroundColor: 'primary.main',
          height: '100px',
          width: '100px',
        }}
      ></Box>
      <Box
        sx={{
          backgroundColor: 'primary.main',
          height: '100px',
          width: '100px',
        }}
      ></Box>
      <Box
        sx={{
          backgroundColor: 'primary.main',
          height: '100px',
          width: '100px',
        }}
      ></Box>
      <Box
        sx={{
          backgroundColor: 'primary.main',
          height: '100px',
          width: '100px',
        }}
      ></Box>
    </Stack>
  );
};

export default MaterialBox;
