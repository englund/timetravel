import { useMemo } from "react";

import { compareAsc } from "date-fns";

import { Time } from "@/models/time";
import { formatDate } from "@/utils/date";

export const useGroupByWeek = (times: Time[]) =>
  useMemo(
    () =>
      times
        .sort((a, b) => compareAsc(a.date, b.date))
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
