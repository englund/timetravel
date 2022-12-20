import { compareDesc } from "date-fns";

import { FC } from "react";

import { Typography } from "@mui/material";

import { format } from "@/utils/date";

import { Time } from "./useTimeline";

interface Props {
  times: Time[];
}

type GroupedByWeek = Record<string, Time[]>;

const TimeList: FC<Props> = ({ times }) => {
  const groupedByWeek = times
    .sort((a, b) => compareDesc(a.date, b.date))
    .reduce<GroupedByWeek>((grouped, time) => {
      const week = format(time.date, "I");
      if (!grouped[week]) {
        grouped[week] = [];
      }
      grouped[week] = [...grouped[week], time];
      return grouped;
    }, {});

  return (
    <>
      {Object.entries(groupedByWeek).map(([week, times]) => (
        <div key={week}>
          <Typography>{week}</Typography>
          {times.map((time) => (
            <Typography key={format(time.date)}>
              {format(time.date, "P")}: {time.hours}
            </Typography>
          ))}
        </div>
      ))}
    </>
  );
};

export default TimeList;
