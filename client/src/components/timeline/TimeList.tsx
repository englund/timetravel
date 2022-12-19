import { FC } from "react";

import { Typography } from "@mui/material";

import { Time } from "./useTimeline";

interface Props {
  times: Time[];
}

const TimeList: FC<Props> = ({ times }) => {
  return (
    <>
      {times.map((time, index) => (
        <Typography key={index}>
          {time.date.toLocaleString()}: {time.hours}
        </Typography>
      ))}
    </>
  );
};

export default TimeList;
