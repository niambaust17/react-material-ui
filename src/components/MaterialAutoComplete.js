import React, { useState } from 'react';
import { Stack, Autocomplete, TextField } from '@mui/material';

const skills = ['HTML', 'CSS', 'JavaScript', 'Redux', 'TypeScript'];

const skillOptions = skills.map((skill, index) => ({
  id: index + 1,
  label: skill,
}));

const MaterialAutoComplete = () => {
  const [value, setValue] = useState(null);
  const [skill, setSkill] = useState(null);
  console.log({ value });
  console.log({ skill });

  return (
    <Stack spacing={2}>
      <Autocomplete
        options={skills}
        renderInput={(params) => <TextField {...params} label="Skills" />}
        value={value}
        onChange={(e, updatedValue) => setValue(updatedValue)}
        freeSolo
      />
      <Autocomplete
        options={skillOptions}
        renderInput={(params) => <TextField {...params} label="Skills" />}
        value={skill}
        onChange={(e, updatedValue) => setSkill(updatedValue)}
      />
    </Stack>
  );
};

export default MaterialAutoComplete;
