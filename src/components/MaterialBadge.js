import React from 'react';
import { Stack, Badge } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';

const MaterialBadge = () => {
  return (
    <Stack spacing={4} p={5}direction="row">
      <Badge badgeContent={5} color='primary'>
        <MailIcon />
      </Badge>
      <Badge badgeContent={0} color='secondary' showZero>
        <MailIcon />
      </Badge>
      <Badge badgeContent={100} color='primary'>
        <MailIcon />
      </Badge>
      <Badge badgeContent={100} color='primary' max={999}>
        <MailIcon />
      </Badge>
      <Badge variant='dot' color='primary' max={999}>
        <MailIcon />
      </Badge>
      <Badge variant='dot' color='primary' max={999} invisible={true}>
        <MailIcon />
      </Badge>
    </Stack>
  );
};

export default MaterialBadge;
