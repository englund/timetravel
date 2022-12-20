import { FC, useState } from "react";

import { Stack } from "@mui/material";
import Button from "@mui/material/Button/Button";
import TextField from "@mui/material/TextField/TextField";
import { DatePicker } from "@mui/x-date-pickers";

interface Props {
  addTime: (hours: number, date: Date) => void;
}

const TimeForm: FC<Props> = ({ addTime }) => {
  const [hours, setHours] = useState(8);
  const [date, setDate] = useState<Date>(new Date());

  return (
    <Stack direction="row" spacing={2}>
      <TextField
        type="number"
        label="Antal timmar"
        value={hours}
        onChange={(e) => setHours(+e.target.value)}
      />
      <DatePicker
        label="Datum"
        value={date}
        onChange={(newDate) => {
          if (!newDate) return;
          setDate(newDate);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={() => addTime(hours, date)}
      >
        Lägg till
      </Button>
    </Stack>
  );
};

export default TimeForm;
