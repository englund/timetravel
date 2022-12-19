import { useState } from "react";

export interface Time {
  hours: number;
  date: Date;
}

export const useTimeline = () => {
  const [timeline, setTimeline] = useState<Time[]>([]);

  return {
    addTime: (hours: number, date: Date) => {
      setTimeline([...timeline, { hours, date }]);
    },
    timeline,
  };
};
