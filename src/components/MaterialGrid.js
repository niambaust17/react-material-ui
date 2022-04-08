import React from 'react';
import { Grid, Box, Container } from '@mui/material';

const items = [1, 2, 3, 4, 5, 6, 7, 8];

const MaterialGrid = () => {
  return (
    <Container>
    <Grid container rowSpacing={2} columnSpacing={2}>
      {items.map((item) => (
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Box bgcolor="primary.light" p={2}>
            Item-{item}
          </Box>
        </Grid>
      ))}
    </Grid>
    </Container>
  );
};

export default MaterialGrid;
