import CssBaseline from "@mui/material/CssBaseline/CssBaseline";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import svLocale from "date-fns/locale/sv";

import Layout from "./components/layout/Layout";
import Timeline from "./components/timeline/Timeline";

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={svLocale}>
      <CssBaseline />
      <Layout>
        <Timeline />
      </Layout>
    </LocalizationProvider>
  );
}

export default App;
