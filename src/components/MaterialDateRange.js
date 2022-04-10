import React, { useState } from 'react';
import { Stack, TextField, Box } from '@mui/material';
import { DateRangePicker, DateRange } from '@mui/lab';

const MaterialDateRange = () => {
  const [selectedDate, setSelectedDate] = useState([null, null]);

  console.log({ selectedDate });
  return (
    <Stack spacing={4} sx={{ width: '250px' }}>
      <DateRangePicker
        startText="Check-in"
        endText="Check-out"
        renderInput={(startProps, endProps) => (
          <>
            <TextField {...startProps} />
            <Box sx={{mx:2}}>to</Box>
            <TextField {...endProps} />
          </>
        )}
        value={selectedDate}
        onChange={(newDate) => setSelectedDate(newDate)}
      />
    </Stack>
  );
};

export default MaterialDateRange;
