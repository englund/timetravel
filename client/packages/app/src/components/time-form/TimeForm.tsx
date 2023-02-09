import { FC, useState } from "react";

import { Alert, Stack } from "@mui/material";
import Button from "@mui/material/Button/Button";
import TextField from "@mui/material/TextField/TextField";
import { DatePicker } from "@mui/x-date-pickers";

import { usePostTimeline } from "@/api/timeline/usePostTimeline";

const TimeForm: FC = () => {
  const { post } = usePostTimeline();

  const [hours, setHours] = useState(8);
  const [date, setDate] = useState<Date>(new Date());
  const [error, setError] = useState<string>();

  const onSubmit = async () => {
    const result = await post({ hours, date });
    if (!result) {
      setError("Det finns redan en sparad tid på valt datum.");
    }
  };

  const onHoursChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError(undefined);
    setHours(+e.target.value);
  };

  const onDateChange = (newDate: Date | null) => {
    setError(undefined);

    if (!newDate) return;
    setDate(newDate);
  };

  return (
    <>
      <Stack direction="row" spacing={2}>
        <TextField
          type="number"
          label="Antal timmar"
          value={hours}
          onChange={onHoursChange}
        />
        <DatePicker
          label="Datum"
          value={date}
          onChange={onDateChange}
          renderInput={(params) => <TextField {...params} />}
        />
        <Button variant="contained" color="primary" onClick={onSubmit}>
          Lägg till
        </Button>
      </Stack>
      {!!error && (
        <Alert severity="error" onClose={() => setError(undefined)}>
          {error}
        </Alert>
      )}
    </>
  );
};

export default TimeForm;
