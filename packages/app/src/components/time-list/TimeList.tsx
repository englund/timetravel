import { FC } from "react";

import { Typography } from "@mui/material";

import { useGroupByWeek } from "@/hooks/useGroupByWeek";
import { Time } from "@/models/time";
import { formatDate } from "@/utils/date";

interface Props {
  times: Time[];
}

const TimeList: FC<Props> = ({ times }) => {
  const groupedByWeek = useGroupByWeek(times);

  return (
    <>
      {Object.entries(groupedByWeek).map(([week, times]) => (
        <div key={week}>
          <Typography>{week}</Typography>
          {times.map((time) => (
            <Typography key={formatDate(time.date)}>
              {formatDate(time.date, "iiii")}: {time.hours}
            </Typography>
          ))}
        </div>
      ))}
    </>
  );
};

export default TimeList;
