import React, { useState } from 'react';
import { Stack, Chip, Avatar, Tooltip, IconButton } from '@mui/material';
import FaceIcon from '@mui/icons-material/Face';

const MaterialChip = () => {
  const [chips, setChips] = useState(['Chip 1', 'Chip 2', 'Chip 3']);
  const handleDelete = (deleteChip) => {
    setChips((chips) => chips.filter((chip) => chip !== deleteChip));
  };
  return (
    <Stack direction="row" spacing={2}>
      <Chip label="Chip" color="primary" size="small" />
      <Chip label="Chip" color="primary" size="small" variant="outlined" />
      <Chip
        label="Chip"
        color="primary"
        size="small"
        variant="outlined"
        avatar={<Avatar>N</Avatar>}
      />
      <Chip
        label="Chip"
        color="primary"
        size="small"
        variant="outlined"
        icon={<FaceIcon />}
      />
      <Chip
        label="Chip"
        color="primary"
        size="small"
        variant="outlined"
        onClick={() => alert('clicked')}
      />
      <Chip
        label="Chip"
        color="error"
        size="small"
        variant="outlined"
        onClick={() => alert('clicked')}
        onDelete={() => alert('deleted')}
      />
      {chips.map((chip) => (
        <Chip label={chip} key={chip} onDelete={() => handleDelete(chip)} />
      ))}
      <Tooltip
        title="Face"
        placement="right"
        arrow
        enterdelay={500}
        leaveDelay={200}
      >
        <IconButton>
          <FaceIcon />
        </IconButton>
      </Tooltip>
    </Stack>
  );
};

export default MaterialChip;
