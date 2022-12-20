import { FC } from "react";

import { Typography } from "@mui/material";

import { formatDate } from "@/utils/date";

import { useGroupByWeek } from "./useGroupByWeek";
import { Time } from "./useTimeline";

interface Props {
  times: Time[];
}

export type GroupedByWeek = Record<string, Time[]>;

const TimeList: FC<Props> = ({ times }) => {
  const groupedByWeek = useGroupByWeek(times);

  return (
    <>
      {Object.entries(groupedByWeek).map(([week, times]) => (
        <div key={week}>
          <Typography>{week}</Typography>
          {times.map((time) => (
            <Typography key={formatDate(time.date)}>
              {formatDate(time.date, "P")}: {time.hours}
            </Typography>
          ))}
        </div>
      ))}
    </>
  );
};

export default TimeList;
