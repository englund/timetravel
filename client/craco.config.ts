import { CracoConfig } from "@craco/types";

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
