import { CracoConfig } from "@craco/types";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { CracoAliasPlugin } from "react-app-alias";

const config: CracoConfig = {
  plugins: [
    {
      plugin: CracoAliasPlugin,
      options: {},
    },
  ],
};

export default config;
