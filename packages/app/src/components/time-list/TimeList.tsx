import { FC } from "react";

import { Typography } from "@mui/material";

import { useTimeline } from "@/api/timeline/useTimeline";
import { useGroupByWeek } from "@/hooks/useGroupByWeek";
import { formatDate } from "@/utils/date";

const TimeList: FC = () => {
  const { data: times = [] } = useTimeline();

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
