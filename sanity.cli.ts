import { defineCliConfig } from "sanity/cli";
import dotenv from "dotenv";
import * as path from "node:path";

dotenv.config();

export default defineCliConfig({
  api: {
    projectId: process.env.SANITY_STUDIO_PROJECT_ID,
    dataset: process.env.SANITY_STUDIO_DATASET,
  },
  studioHost:process.env.SANITY_STUDIO_HOST_NAME,
  deployment: {
    autoUpdates: false,
  },
  vite: (prev: any) => ({
    ...prev,
    resolve: {
      ...(prev?.resolve ?? {}),
      alias: {
        ...((prev?.resolve as any)?.alias ?? {}),
        "@": path.resolve(__dirname, "./"),
      },
    },
  }),
});
