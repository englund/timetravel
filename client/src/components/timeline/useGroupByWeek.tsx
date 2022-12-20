import { useMemo } from "react";

import { compareDesc } from "date-fns";

import { formatDate } from "@/utils/date";

import { GroupedByWeek } from "./TimeList";
import { Time } from "./useTimeline";

export const useGroupByWeek = (times: Time[]) =>
  useMemo(
    () =>
      times
        .sort((a, b) => compareDesc(a.date, b.date))
        .reduce<GroupedByWeek>((grouped, time) => {
          const week = formatDate(time.date, "I");
          if (!grouped[week]) {
            grouped[week] = [];
          }
          grouped[week] = [...grouped[week], time];
          return grouped;
        }, {}),
    [times]
  );
