import { FC, PropsWithChildren, createContext, useContext } from "react";

import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton/IconButton";

import { SnackbarKey, SnackbarProvider, useSnackbar } from "notistack";

interface NotificationsContextType {
  addErrorNotification: (message: string) => void;
}

const initialContext: NotificationsContextType = {
  addErrorNotification: () => {
    throw new Error("Function is not implemented");
  },
};

export const NotificationsContext =
  createContext<NotificationsContextType>(initialContext);

export const useNotifications: () => NotificationsContextType = () =>
  useContext(NotificationsContext);

const NotificationsProvider: FC<PropsWithChildren> = ({ children }) => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const action = (snackbarId: SnackbarKey) => (
    <>
      <IconButton onClick={() => closeSnackbar(snackbarId)}>
        <CloseIcon sx={{ color: "#ffffff" }} />
      </IconButton>
    </>
  );

  const addErrorNotification = (message: string) => {
    enqueueSnackbar(message, { variant: "error", persist: true, action });
  };

  return (
    <NotificationsContext.Provider value={{ addErrorNotification }}>
      {children}
    </NotificationsContext.Provider>
  );
};

const NotificationsProviderWithNotistack: FC<PropsWithChildren> = ({
  children,
}) => (
  <SnackbarProvider hideIconVariant>
    <NotificationsProvider>{children}</NotificationsProvider>
  </SnackbarProvider>
);

export default NotificationsProviderWithNotistack;
