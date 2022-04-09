import React, { useState } from 'react';
import { Stack, TextField } from '@mui/material';
import { DatePicker, TimePicker, DateTimePicker } from '@mui/lab';

const MaterialDate = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedDateTime, setSelectedDateTime] = useState(null);
  // console.log({ selectedDate });
  // console.log({
  //   selectedTime: selectedTime && selectedTime.toLocaleTimeString(),
  // });
  console.log({ selectedDateTime });
  return (
    <Stack spacing={4} sx={{ width: '250px' }}>
      <DatePicker
        label="Date Picker"
        renderInput={(params) => <TextField {...params} />}
        value={selectedDate}
        onChange={(newDate) => setSelectedDate(newDate)}
      />
      <TimePicker
        label="Time Picker"
        renderInput={(params) => <TextField {...params} />}
        value={selectedTime}
        onChange={(newTime) => setSelectedTime(newTime)}
      />
      <DateTimePicker
        label="Date Time Picker"
        renderInput={(params) => <TextField {...params} />}
        value={selectedDateTime}
        onChange={(newDateTime) => setSelectedDateTime(newDateTime)}
      />
    </Stack>
  );
};

export default MaterialDate;
