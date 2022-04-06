import React, { useState } from 'react';
import {
  Stack,
  Button,
  IconButton,
  ButtonGroup,
  ToggleButtonGroup,
  ToggleButton,
} from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';

const MaterialButton = () => {
  const [formats, setFormats] = useState([]);

  console.log({ formats });

  const handleFormat = (event, updatedFormat) => {
    setFormats(updatedFormat);
  };

  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction="row">
        <Button variant="text" href="https://google.com">
          Text
        </Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <Button variant="text" color="primary">
          primary
        </Button>
        <Button variant="text" color="secondary">
          secondary
        </Button>
        <Button variant="text" color="error">
          error
        </Button>
        <Button variant="text" color="info">
          info
        </Button>
        <Button variant="text" color="success">
          success
        </Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <Button variant="contained" color="primary">
          primary
        </Button>
        <Button variant="contained" color="secondary">
          secondary
        </Button>
        <Button variant="contained" color="error">
          error
        </Button>
        <Button variant="contained" color="info">
          info
        </Button>
        <Button variant="contained" color="success">
          success
        </Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <Button variant="outlined" color="primary">
          primary
        </Button>
        <Button variant="outlined" color="secondary">
          secondary
        </Button>
        <Button variant="outlined" color="error">
          error
        </Button>
        <Button variant="outlined" color="info">
          info
        </Button>
        <Button variant="outlined" color="success">
          success
        </Button>
      </Stack>
      <Stack display="block" spacing={2} direction="row">
        <Button variant="outlined" size="small" color="primary">
          small
        </Button>
        <Button variant="outlined" size="medium" color="secondary">
          medium
        </Button>
        <Button variant="outlined" size="large" color="error">
          large
        </Button>
      </Stack>
      <Stack display="block" spacing={2} direction="row">
        <Button
          variant="contained"
          color="success"
          startIcon={<GoogleIcon />}
          disableRipple
        >
          Google Log In
        </Button>
        <Button
          variant="contained"
          color="success"
          endIcon={<GoogleIcon />}
          disableElevation
        >
          Google Log In
        </Button>
        <IconButton
          aria-label="google"
          color="primary"
          size="medium"
          onClick={() => alert('You Clicked Me')}
        >
          <GoogleIcon />
        </IconButton>
      </Stack>
      <Stack spacing={2} direction="row">
        <ButtonGroup variant="outlined">
          <Button>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>
      <Stack spacing={2} direction="row">
        <ButtonGroup
          variant="outlined"
          orientation="vertical"
          size="large"
          color="error"
          aria-label="alignment button group"
        >
          <Button onClick={() => alert('Left Clicked')}>Left</Button>
          <Button onClick={() => alert('Center Clicked')}>Center</Button>
          <Button onClick={() => alert('Right Clicked')}>Right</Button>
        </ButtonGroup>
      </Stack>
      <Stack spacing={2} direction="row">
        <ToggleButtonGroup
          aria-label="text formating"
          value={formats}
          onChange={handleFormat}
          size="medium"
          color="success"
          orientation="vertical"
          exclusive
        >
          <ToggleButton value="bold" aria-label="bold">
            <FormatBoldIcon />
          </ToggleButton>
          <ToggleButton value="italic" aria-label="italic">
            <FormatItalicIcon />
          </ToggleButton>
          <ToggleButton value="underlined" aria-label="underlined">
            <FormatUnderlinedIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  );
};

export default MaterialButton;
