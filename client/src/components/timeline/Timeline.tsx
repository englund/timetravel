import { FC } from "react";

import TimeInput from "./TimeInput";
import TimeList from "./TimeList";
import { useTimeline } from "./useTimeline";

const Timeline: FC = () => {
  const { timeline, addTime } = useTimeline();

  return (
    <>
      <TimeInput addTime={addTime} />
      <TimeList times={timeline} />
    </>
  );
};

export default Timeline;
