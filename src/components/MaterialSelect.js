import React, { useState } from 'react';
import {
  Box,
  TextField,
  MenuItem,
  Typography,
  FormControl,
  FormLabel,
  RadioGroup,
  FormGroup,
  FormHelperText,
  FormControlLabel,
  Radio,
  Checkbox,
} from '@mui/material';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';

const MaterialButton = () => {
  const [age, setAge] = useState([]);
  const [skills, setSkills] = useState([]);
  const [experience, setExperience] = useState('');
  const [acceptTnC, setAcceptTnC] = useState(false);
  console.log({ age });
  console.log({ experience });
  console.log({ acceptTnC });
  console.log({ skills });

  const handleChange = (e) => {
    // setAge(e.target.value);
    // setExperience(e.target.value);
    setAcceptTnC(e.target.checked);
  };

  const handleSkillChange = (e) => {
    const index = skills.indexOf(e.target.value);
    if (index === -1) {
      setSkills([...skills, e.target.value]);
    } else {
      setSkills(skills.filter((skill) => skill !== e.target.value));
    }
  };

  return (
    <Box width="250px">
      <Box>
        <Typography variant="h4">Check Box</Typography>
        <FormControlLabel
          control={<Checkbox checked={acceptTnC} onChange={handleChange} />}
          label="I accept all term and condition"
        />
      </Box>
      <Box>
        <Typography variant="h4">Radio Button</Typography>
        <FormControl>
          <FormLabel id="job-experience-group-label">
            Year Of Experience
          </FormLabel>
          <RadioGroup
            aria-labelledby="job-experience-group-label"
            value={experience}
            onChange={handleChange}
            name="job-experience-group"
            row
          >
            <FormControlLabel
              value="0-2"
              control={<Radio size="medium" color="secondary" />}
              label="0-2"
            />
            <FormControlLabel value="3-5" control={<Radio />} label="3-5" />
            <FormControlLabel value="6-10" control={<Radio />} label="6-10" />
          </RadioGroup>
        </FormControl>
      </Box>
      <Box>
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
      <Box>
        <Checkbox
          checked={acceptTnC}
          icon={<BookmarkBorderIcon />}
          checkedIcon={<BookmarkIcon />}
          onChange={handleChange}
        />
      </Box>
      <Box>
        <FormControl error> 
          <FormLabel>Skills</FormLabel>
          <FormGroup row size='small'>
            <FormControlLabel
              control={
                <Checkbox
                  checked={skills.includes('html')}
                  onChange={handleSkillChange}
                />
              }
              label="HTML"
              value="html"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={skills.includes('css')}
                  onChange={handleSkillChange}
                />
              }
              label="CSS"
              value="css"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={skills.includes('javascript')}
                  onChange={handleSkillChange}
                />
              }
              label="JS"
              value="javascript"
            />
          </FormGroup>
          <FormHelperText>Be careful</FormHelperText>
        </FormControl>
      </Box>
    </Box>
  );
};

export default MaterialButton;
