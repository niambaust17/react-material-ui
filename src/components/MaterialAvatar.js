import React from 'react';
import { Stack, Avatar, AvatarGroup } from '@mui/material';

const MaterialAvatar = () => {
  return (
    <Stack spacing={4} direction="row">
      <Avatar variant="square" sx={{ bgcolor: 'primary.light' }}>
        NM
      </Avatar>
      <Avatar variant="rounded" sx={{ bgcolor: 'success.light' }}>
        AN
      </Avatar>
      <Avatar sx={{ bgcolor: 'primary.light', width: 48, height: 48 }}>
        AN
      </Avatar>
      <AvatarGroup max={3}>
        <Avatar sx={{ bgcolor: 'success.light' }}>AN</Avatar>
        <Avatar sx={{ bgcolor: 'success.light' }}>AN</Avatar>
        <Avatar sx={{ bgcolor: 'success.light' }}>AN</Avatar>
        <Avatar sx={{ bgcolor: 'success.light' }}>AN</Avatar>
      </AvatarGroup>
      <AvatarGroup max={3}>
        <Avatar
          src="https://source.unsplash.com/random"
          alt="John Doe"
          sx={{ bgcolor: 'success.light' }}
        >
          AN
        </Avatar>
        <Avatar
          src="https://source.unsplash.com/random"
          alt="John Doe"
          sx={{ bgcolor: 'success.light' }}
        >
          AN
        </Avatar>
        <Avatar
          src="https://source.unsplash.com/random"
          alt="John Doe"
          sx={{ bgcolor: 'success.light' }}
        >
          AN
        </Avatar>
        <Avatar
          src="https://source.unsplash.com/random"
          alt="John Doe"
          sx={{ bgcolor: 'success.light' }}
        >
          AN
        </Avatar>
      </AvatarGroup>
    </Stack>
  );
};

export default MaterialAvatar;
