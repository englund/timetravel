import { useState } from "react";

import { Time } from "@/models/time";
import { isSameDay } from "@/utils/date";

const initialTimeline: Time[] = [
  // v.50
  {
    date: new Date("2022-12-12"),
    hours: 8,
  },
  {
    date: new Date("2022-12-13"),
    hours: 8,
  },
  {
    date: new Date("2022-12-14"),
    hours: 8,
  },
  {
    date: new Date("2022-12-15"),
    hours: 8.5,
  },
  {
    date: new Date("2022-12-16"),
    hours: 7.5,
  },
  // v.51
  {
    date: new Date("2022-12-19"),
    hours: 8,
  },
  {
    date: new Date("2022-12-20"),
    hours: 8,
  },
  {
    date: new Date("2022-12-21"),
    hours: 8,
  },
  {
    date: new Date("2022-12-22"),
    hours: 8.5,
  },
];

export const useTimeline = () => {
  const [timeline, setTimeline] = useState<Time[]>(initialTimeline);

  return {
    addTime: (hours: number, date: Date) => {
      const found = timeline.some((time) => isSameDay(time.date, date));
      if (!found) {
        setTimeline([...timeline, { hours, date }]);
      }
      return !found;
    },
    timeline,
  };
};
