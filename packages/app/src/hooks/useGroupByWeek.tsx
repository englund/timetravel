import { useMemo } from "react";

import { compareDesc } from "date-fns";

import { Time } from "@/models/time";
import { formatDate } from "@/utils/date";

export const useGroupByWeek = (times: Time[]) =>
  useMemo(
    () =>
      times
        .sort((a, b) => compareDesc(a.date, b.date))
        .reduce<Record<string, Time[]>>((grouped, time) => {
          const week = formatDate(time.date, "I");
          if (!grouped[week]) {
            grouped[week] = [];
          }
          grouped[week] = [...grouped[week], time];
          return grouped;
        }, {}),
    [times]
  );
