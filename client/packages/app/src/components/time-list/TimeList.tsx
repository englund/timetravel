import { FC, useMemo } from "react";

import { Typography } from "@mui/material";

import { useTimeline } from "@/api/timeline/useTimeline";
import { formatDate, groupByWeek } from "@/utils/date";

const TimeList: FC = () => {
  const { data: times = [] } = useTimeline();

  const groupedByWeek = useMemo(
    () => groupByWeek(times, (time) => time.date),
    [times],
  );

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
