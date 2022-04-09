import React, { useState } from 'react';
import {
  Stack,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from '@mui/material';

const MaterialDialog = () => {
  const [open, setOpen] = useState(false);
  return (
    <Stack spacing={4} p={5} direction="row">
      <Button onClick={() => setOpen(true)}>Open Dialog</Button>
      <Dialog
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
        open={open}
        onClose={() => setOpen(false)}
      >
        <DialogTitle id="dialog-title">Submit the text?</DialogTitle>
        <DialogContent>
          <DialogContentText id="dialog-description">
            To subscribe to this website, please submit. We will send updates
            occasionally.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button autoFocus onClick={() => setOpen(false)}>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </Stack>
  );
};

export default MaterialDialog;
