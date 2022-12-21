import { FC } from "react";

import TimeForm from "@/components/time-form/TimeForm";
import TimeList from "@/components/time-list/TimeList";
import { useTimeline } from "@/hooks/useTimeline";

const Timeline: FC = () => {
  const { timeline, addTime } = useTimeline();

  return (
    <>
      <TimeForm addTime={addTime} />
      <TimeList times={timeline} />
    </>
  );
};

export default Timeline;
