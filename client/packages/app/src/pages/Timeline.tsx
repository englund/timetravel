import { FC } from "react";

import { Button } from "@mui/material";

import { useNotifications } from "@/components/notifications/NotificationsProvider";
import TimeForm from "@/components/time-form/TimeForm";
import TimeList from "@/components/time-list/TimeList";

const Timeline: FC = () => {
  const { addErrorNotification } = useNotifications();

  return (
    <>
      <TimeForm />
      <TimeList />
      <Button onClick={() => addErrorNotification("Hello " + new Date())}>
        Add
      </Button>
    </>
  );
};

export default Timeline;
