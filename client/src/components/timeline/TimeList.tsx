import { FC } from "react";

import { Typography } from "@mui/material";

import { format } from "../../utils/date";
import { Time } from "./useTimeline";

interface Props {
  times: Time[];
}

const TimeList: FC<Props> = ({ times }) => {
  return (
    <>
      {times.map((time, index) => (
        <Typography key={index}>
          {format(time.date, "P")}: {time.hours}
        </Typography>
      ))}
    </>
  );
};

export default TimeList;
