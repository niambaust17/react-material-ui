import React from 'react';
import { Box } from '@mui/material';

const MaterialBox = () => {
  return (
    <>
      <Box component="span">Hello Box</Box>
      <Box
        sx={{
          backgroundColor: 'primary.main',
          height: '100px',
          width: '100px',
          color: 'white',
          margin: '20px',
          '&:hover': {
            backgroundColor: 'primary.light',
          },
        }}
      ></Box>
      <Box display="flex" bgcolor="error.light">
        <Box
          sx={{
            backgroundColor: 'secondary.main',
            height: '200px',
            width: '200px',
            margin: '5px',
          }}
        ></Box>
        <Box
          sx={{
            backgroundColor: 'secondary.main',
            height: '200px',
            width: '200px',
            margin: '5px',
          }}
        ></Box>
        <Box
          sx={{
            backgroundColor: 'secondary.main',
            height: '200px',
            width: '200px',
            margin: '5px',
          }}
        ></Box>
      </Box>
    </>
  );
};

export default MaterialBox;
