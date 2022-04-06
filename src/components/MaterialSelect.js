import React, { useState } from 'react';
import { Box, TextField, MenuItem } from '@mui/material';

const MaterialButton = () => {
  const [age, setAge] = useState([]);
  console.log({ age });
  const handleChange = (e) => {
    setAge(e.target.value);
  };
  return (
    <Box width="250px">
      <TextField
        label="Select Age"
        select
        value={age}
        onChange={handleChange}
        fullWidth
        SelectProps={{ multiple: true }}
        size="small"
        color="secondary"
        helperText="Please select your age"
      >
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </TextField>
    </Box>
  );
};

export default MaterialButton;
