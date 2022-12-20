import { FC } from "react";

import TimeForm from "./TimeForm";
import TimeList from "./TimeList";
import { useTimeline } from "./useTimeline";

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
