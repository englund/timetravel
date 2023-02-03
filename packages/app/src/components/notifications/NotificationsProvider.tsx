import { FC, PropsWithChildren, createContext, useContext } from "react";

import { SnackbarProvider, useSnackbar } from "notistack";

interface NotificationsContextType {
  addNotification: (message: string) => void;
}

const initialContext: NotificationsContextType = {
  addNotification: () => {
    throw new Error("Function is not implemented");
  },
};

export const NotificationsContext =
  createContext<NotificationsContextType>(initialContext);

export const useNotifications: () => NotificationsContextType = () =>
  useContext(NotificationsContext);

const NotificationsProvider: FC<PropsWithChildren> = ({ children }) => {
  const { enqueueSnackbar } = useSnackbar();
  const addNotification = (message: string) => {
    enqueueSnackbar(message);
  };

  return (
    <NotificationsContext.Provider value={{ addNotification }}>
      <SnackbarProvider>{children}</SnackbarProvider>
    </NotificationsContext.Provider>
  );
};

const NotificationsProviderWithNotistack: FC<PropsWithChildren> = ({
  children,
}) => (
  <SnackbarProvider>
    <NotificationsProvider>{children}</NotificationsProvider>
  </SnackbarProvider>
);

export default NotificationsProviderWithNotistack;
