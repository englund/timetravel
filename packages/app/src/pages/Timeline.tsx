import { FC } from "react";

import TimeForm from "@/components/time-form/TimeForm";
import TimeList from "@/components/time-list/TimeList";

const Timeline: FC = () => {
  return (
    <>
      <TimeForm />
      <TimeList />
    </>
  );
};

export default Timeline;
