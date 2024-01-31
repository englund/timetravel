import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { FC } from "react";

import CssBaseline from "@mui/material/CssBaseline/CssBaseline";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import { sv } from "date-fns/locale/sv";

import Layout from "@/layout/Layout";
import Timeline from "@/pages/Timeline";

import NotificationsProvider from "./components/notifications/NotificationsProvider";

const queryClient = new QueryClient();

const App: FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={sv}>
        <CssBaseline />
        <Layout>
          <NotificationsProvider>
            <Timeline />
          </NotificationsProvider>
        </Layout>
      </LocalizationProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
