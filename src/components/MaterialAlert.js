import React from 'react';
import { Stack, Alert, AlertTitle } from '@mui/material';

const MaterialAlert = () => {
  return (
    <Stack spacing={4} direction="row">
      <Stack spacing={2}>
        <Alert severity="error">Error Alert</Alert>
        <Alert severity="warning">Warning Alert</Alert>
        <Alert severity="success">Success Alert</Alert>
        <Alert severity="info">Info Alert</Alert>
      </Stack>
      <Stack spacing={2}>
        <Alert variant="outlined" severity="error">
          Error Alert
        </Alert>
        <Alert variant="outlined" severity="warning">
          Warning Alert
        </Alert>
        <Alert variant="outlined" severity="success">
          Success Alert
        </Alert>
        <Alert variant="outlined" severity="info">
          Info Alert
        </Alert>
      </Stack>
      <Stack spacing={2}>
        <Alert
          variant="filled"
          severity="error"
          onClose={() => alert('close alert')}
        >
          <AlertTitle>Error</AlertTitle>
          Error Alert
        </Alert>
        <Alert variant="filled" severity="warning">
          <AlertTitle>Warning</AlertTitle>
          Warning Alert
        </Alert>
        <Alert variant="filled" severity="success">
          <AlertTitle>Success</AlertTitle>
          Success Alert
        </Alert>
        <Alert variant="filled" severity="info">
          <AlertTitle>Info</AlertTitle>
          Info Alert
        </Alert>
      </Stack>
    </Stack>
  );
};

export default MaterialAlert;
