import { FC, useState } from "react";

import Button from "@mui/material/Button/Button";
import TextField from "@mui/material/TextField/TextField";

interface Props {
  addTime: (hours: number, date: Date) => void;
}

const TimeInput: FC<Props> = ({ addTime }) => {
  const [hours, setHours] = useState(8);
  return (
    <>
      <TextField
        type="number"
        value={hours}
        onChange={(e) => setHours(+e.target.value)}
      />
      <Button onClick={() => addTime(hours, new Date())}>Lägg till</Button>
    </>
  );
};

export default TimeInput;
