import React from 'react';
import { Box } from '@mui/material';

const MaterialResponsive = () => {
  return (
    <Box
      sx={{
        width: { xs: 100, sm: 200, md: 300, lg: 400, xl: 500 },
        height: 300,
        bgcolor: 'primary.main',
      }}
    ></Box>
  );
};

export default MaterialResponsive;
