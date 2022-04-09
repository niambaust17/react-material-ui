import React, { useState, forwardRef } from 'react';
import { Stack, Button, Snackbar, Alert, ALertProps } from '@mui/material';

const SnackbarAlert = forwardRef(function SnackbarAlert(props, ref) {
  return <Alert elevation={6} ref={ref} {...props} />;
});

const MaterialSnackbar = () => {
  const [open, setOpen] = useState(false);
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };
  return (
    <Stack spacing={4} direction="row">
      <Button onClick={() => setOpen(true)}>Submit</Button>
      {/* <Snackbar
        message="Submitted Successfully"
        autoHideDuration={4000}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      /> */}
      <Snackbar open={open} autoHideDuration={4000} onClose={handleClose} anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }} >
        <SnackbarAlert onClose={handleClose} severity="success">
          Submitted Successfully
        </SnackbarAlert>
      </Snackbar>
    </Stack>
  );
};

export default MaterialSnackbar;
