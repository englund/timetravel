import { FC } from "react";

import { Button } from "@mui/material";

import { useNotifications } from "@/components/notifications/NotificationsProvider";
import TimeForm from "@/components/time-form/TimeForm";
import TimeList from "@/components/time-list/TimeList";

const Timeline: FC = () => {
  const { addNotification } = useNotifications();

  return (
    <>
      <TimeForm />
      <TimeList />
      <Button onClick={() => addNotification("Hello " + new Date())}>
        Add
      </Button>
    </>
  );
};

export default Timeline;
