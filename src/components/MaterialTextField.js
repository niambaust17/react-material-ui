import React, { useState } from 'react';
import { Stack, TextField, InputAdornment } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';

const MaterialTextField = () => {
  const [value, setValue] = useState('');
  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction="row">
        <TextField label="Name" variant="outlined" />
        <TextField label="Name" variant="filled" />
        <TextField label="Name" variant="standard" />
      </Stack>
      <Stack spacing={2} direction="row">
        <TextField
          label="Name"
          size="small"
          color="primary"
          variant="outlined"
        />
      </Stack>
      <Stack spacing={2} direction="row">
        <TextField
          label="Name"
          size="small"
          color="primary"
          variant="outlined"
          required
        />
      </Stack>
      <Stack spacing={2} direction="row">
        <TextField
          label="Password"
          type="password"
          size="small"
          color="primary"
          variant="outlined"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          error={!value}
          helperText={!value ? 'Required' : "Don't tell your password"}
          required
        />
      </Stack>
      <Stack spacing={2} direction="row">
        <TextField
          label="Password"
          type="password"
          disabled
          helperText="Don't tell your password"
          size="small"
          color="primary"
          variant="outlined"
          required
        />
      </Stack>
      <Stack spacing={2} direction="row">
        <TextField label="Name" InputProps={{ readOnly: true }} />
      </Stack>
      <Stack spacing={2} direction="row">
        <TextField
          label="Amount"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          label="Weight"
          InputProps={{
            endAdornment: <InputAdornment position="end">kg</InputAdornment>,
          }}
        />
        <TextField
          label="Password"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <VisibilityIcon />
              </InputAdornment>
            ),
          }}
        />
      </Stack>
    </Stack>
  );
};

export default MaterialTextField;
