import { Container, Stack } from "@mui/material";
import { FC, PropsWithChildren } from "react";

import Header from "./Header";

const Layout: FC<PropsWithChildren> = ({ children }) => (
  <Container>
    <Stack spacing={2}>
      <Header />
      {children}
    </Stack>
  </Container>
);

export default Layout;
