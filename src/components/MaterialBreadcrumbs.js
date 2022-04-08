import React from 'react';
import { Box, Breadcrumbs, Link, Typography } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const MaterialBreadcrumbs = () => {
  return (
    <Box m={2}>
      <Breadcrumbs
        aria-label="breadcrumb"
        separator={<NavigateNextIcon fontSize="small" />}
        maxItems={2}
        itemsAfterCollapse={2}
        itemsBeforeCollapse={2}
      >
        <Link href="/" underline="none">
          Home
        </Link>
        <Link href="/catalog" underline="none">
          Catalog
        </Link>
        <Link href="/product" underline="hover">
          Products
        </Link>
        <Link href="/accessories" underline="none">
          Accessories
        </Link>
        <Typography color="text.primary">Shoes</Typography>
      </Breadcrumbs>
    </Box>
  );
};

export default MaterialBreadcrumbs;
