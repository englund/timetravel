import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import CssBaseline from "@mui/material/CssBaseline/CssBaseline";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import svLocale from "date-fns/locale/sv";

import Layout from "@/layout/Layout";
import Timeline from "@/pages/Timeline";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LocalizationProvider
        dateAdapter={AdapterDateFns}
        adapterLocale={svLocale}
      >
        <CssBaseline />
        <Layout>
          <Timeline />
        </Layout>
      </LocalizationProvider>
    </QueryClientProvider>
  );
}

export default App;
